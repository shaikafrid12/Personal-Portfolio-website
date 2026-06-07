const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Project = require('./models/Project');

// Load environment variables
dotenv.config();

const projects = [
  {
    title: 'E-Commerce Web Application',
    description: 'A full-featured responsive e-commerce web application featuring user authentication, product catalog, cart management, and secure checkout.',
    detailedDescription: `### Project Overview\nAn immersive MERN stack e-commerce system that handles the entire retail journey from account creation to checkout.\n\n### Technical Implementation & Architecture\n- **Client**: React, Redux Toolkit for state flows, Tailwind CSS for sleek grids.\n- **Server**: Express.js REST API with structured MVC architecture.\n- **Database**: MongoDB for scalable product and user collections.\n- **Security**: JSON Web Tokens (JWT) for secure authentication and bcrypt for password hashing.`,
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d296e?auto=format&fit=crop&w=800&q=80',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt', 'Tailwind CSS'],
    githubLink: 'https://github.com/shaikafrid12/ecommerce-mern',
    liveLink: '',
    category: 'Full-Stack Applications',
    featured: true
  },
  {
    title: 'Task Management Web Application',
    description: 'An intuitive web application helping users organize tasks using custom categories, prioritization metrics, and status filtering.',
    detailedDescription: `### Project Overview\nA responsive productivity dashboard designed to optimize work tracking and task progress.\n\n### Technical Achievements & Architecture\n- **Client**: React.js for building dynamic, reusable task cards and forms.\n- **Server**: Express.js serving APIs with secure private routes.\n- **Database**: MongoDB storing task metadata linked to user accounts.\n- **Security**: JWT tokens for stateless private dashboard endpoints.`,
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    githubLink: 'https://github.com/shaikafrid12/task-manager',
    liveLink: '',
    category: 'Full-Stack Applications',
    featured: true
  },
  {
    title: 'Stellar Personal Portfolio',
    description: 'A professional personal portfolio designed using highly aesthetic dark glassmorphic UI, dynamic particle backgrounds, and a contact form API.',
    detailedDescription: `### Project Overview\nShaik Afrid's professional personal website designed to showcase computer science skills, timelines, and projects.\n\n### Architecture & Key Highlights\n- **Styling**: Tailwind CSS v4 and vanilla custom keyframes.\n- **Motion**: Framer Motion transitions and canvas-drawn particle repulsion coordinates.\n- **Core API**: Contact inquiries logged directly inside MongoDB via custom Nodemailer triggers and REST endpoints.`,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    technologies: ['React.js', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS v4', 'Framer Motion'],
    githubLink: 'https://github.com/shaikafrid12/personal-portfolio',
    liveLink: '',
    category: 'Web Development',
    featured: true
  }
];

const seedDB = async () => {
  try {
    const connStr = process.env.MONGODB_URI;
    if (!connStr) {
      console.error('MONGODB_URI is not defined in env variables');
      process.exit(1);
    }
    
    console.log('Connecting to database...');
    await mongoose.connect(connStr);
    
    console.log('Clearing old projects...');
    await Project.deleteMany({});
    
    console.log('Inserting seed projects...');
    await Project.insertMany(projects);
    
    console.log('Database seeded successfully!');
    mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
