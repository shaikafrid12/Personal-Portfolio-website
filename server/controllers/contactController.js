const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');


//Reusable transporter for sending emails

const getMailTransporter = () => {
    if (
        process.env.EMAIL_USER &&
        process.env.EMAIL_USER !== 'your_email@gmail.com' &&
        process.env.EMAIL_PASS &&
        process.env.EMAIL_PASS !== 'your_app_specific_password'
    ) {
        return nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE || 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            },
            connectionTimeout: 8000, // fail fast if SMTP is blocked
            greetingTimeout: 8000,
            socketTimeout: 15000
        });
    }
    return null;
};




const submitContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;


        if (!name || !email || !subject || !message) {
            return res.status(400).json({ success: false, error: 'Please provide all required fields' });
        }

        const contact = await Contact.create({
            name,
            email,
            subject,
            message
        });

        const transporter = getMailTransporter();
        let emailSent = false;

        if (transporter) {
            const mailOptions = {
                from: `"${name}" <${process.env.EMAIL_USER}>`,
                replyTo: email,
                to: process.env.ADMIN_EMAIL && process.env.ADMIN_EMAIL !== 'admin@example.com' 
                    ? process.env.ADMIN_EMAIL 
                    : process.env.EMAIL_USER,
                subject: `[Portfolio Inbox] ${subject}`,
                text: `You have received a new message from your portfolio website contact form:\n\n` +
                    `Name: ${name}\n` +
                    `Email: ${email}\n` +
                    `Subject: ${subject}\n\n` +
                    `Message:\n${message}\n`
            };

            try {
                const info = await transporter.sendMail(mailOptions);
                console.log('Email sent successfully:', info.response);
                emailSent = true;
            } catch (err) {
                console.error('Nodemailer Error (email forwarding failed but contact was saved):', err.message);
            }
        } else {
            console.log(`[Local Simulation Mode] Contact form submitted by ${name} (${email}): "${subject}" - ${message}`);
        }

        res.status(201).json({
            success: true,
            message: emailSent 
                ? 'Your message has been sent successfully! I will get back to you soon.' 
                : 'Your message has been saved successfully (Email notification offline)!',
            data: contact
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
  submitContact
};
