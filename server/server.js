const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
// Load environment variables
dotenv.config();
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');


//Routes imports

const contactRoutes = require('./routes/contactRoutes');
const projectRoutes = require('./routes/projectRoutes');
//Connect to MongoDB
connectDB();

const app = express();

// Enable trust proxy to allow express-rate-limit to read X-Forwarded-For header correctly behind Render reverse proxy
app.set('trust proxy', 1);


// Security Middlewares
// Customize helmet to allow image loads from multiple CDNs/sources easily
app.use(helmet({
  contentSecurityPolicy: false,
  crossOriginEmbedderPolicy: false
}))

//Allow all origins to access our API. In production you would restrict this to specific origins.
app.use(cors({
  origin: '*',
  credentials: true,
}))


// Body Parsing Middlewares
app.use(express.json({ limit: '10mb' })); // support base64 image uploads
app.use(express.urlencoded({ extended: true, limit: '10mb' }));


//API Request Rate Limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300, // limit each IP to 300 requests per window
  message: {
    success: false,
    error: 'Too many requests from this IP, please try again after 15 minutes.'
  },
  standardHeaders: true,
  legacyHeaders: false
});

app.use('/api', apiLimiter);

//Api Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

// Root Index route for debugging
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Welcome to the Professional Personal Portfolio Website API Service!',
    version: '1.0.0'
  });
});

// 404 Route Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    error: `API Route not found: ${req.originalUrl}`
  });
});


// Set port and launch Express listener
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Express Backend Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});

process.on('unhandledRejection', (err, promise) => {
  console.error(`Unhandled Rejection Error: ${err.message}`);
  // Do not crash server in developer environment, keep server active
});
// Force nodemon reload to pick up new .env settings