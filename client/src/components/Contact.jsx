import { useState } from 'react';
import axios from 'axios';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [statusMsg, setStatusMsg] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic local validations
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setStatus('error');
            setStatusMsg('Please fill in all form fields.');
            return;
        }

        setStatus('loading');

        try {
            const res = await axios.post('/api/contact', formData);
            if (res.data.success) {
                setStatus('success');
                setStatusMsg(res.data.message || 'Your message has been sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
                setStatusMsg(res.data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Contact submission error:', error.message);
            setStatus('error');
            setStatusMsg(error.response?.data?.error || 'Failed to establish connection. Please check your network.');
        }
    };

    const contactInfos = [
        {
            title: 'Email Direct',
            value: 'shaikafrid709@gmail.com',
            icon: <Mail className="text-accent-blue" size={20} />,
            link: 'mailto:shaikafrid709@gmail.com'
        },
        {
            title: 'WhatsApp Message',
            value: '+91 6303846110',
            icon: <Phone className="text-accent-purple" size={20} />,
            link: 'https://wa.me/916303846110'
        },
        {
            title: 'Active Headquarters',
            value: 'Erragondapalem, Andhra Pradesh, India',
            icon: <MapPin className="text-pink-500" size={20} />,
            link: 'https://maps.google.com'
        }
    ];

    return (
        <section id="contact" className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Contact</h2>
                    <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Let's Build Something Awesome
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4 rounded-full" />
                </div>

                <div className="grid md:grid-cols-12 gap-12 items-stretch">

                    {/* Contact Details Left Side */}
                    <div className="md:col-span-5 flex flex-col justify-between gap-8">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold text-white">Got a project idea? Let's connect!</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Whether you want to discuss full-stack employment, freelance projects, custom database integrations, or just want to say hi, fill out the form or trigger a direct WhatsApp chat!
                            </p>
                        </div>

                        {/* Info cards */}
                        <div className="flex flex-col gap-4">
                            {contactInfos.map((info, idx) => (
                                <a
                                    href={info.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={idx}
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        const x = e.clientX - rect.left;
                                        const y = e.clientY - rect.top;
                                        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                                    }}
                                    className="glass-panel p-5 rounded-2xl border-white/5 flex items-center gap-4 hover:border-accent-blue/20 transition-all hover:translate-x-1 relative overflow-hidden group"
                                >
                                    {/* Spotlight Hover Glow */}
                                    <div
                                        className="absolute inset-0 bg-[radial-gradient(300px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(139,92,246,0.1),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    />
                                    <div className="p-3 bg-white/5 rounded-xl z-10">
                                        {info.icon}
                                    </div>
                                    <div className="flex flex-col z-10">
                                        <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{info.title}</span>
                                        <span className="text-sm font-semibold text-white mt-0.5">{info.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Simulated Live availability banner */}
                        <div className="p-4 bg-accent-blue/5 border border-accent-blue/10 rounded-2xl flex items-center gap-3">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-xs font-semibold text-gray-300">
                                Afrid is currently open for entry-level opportunities and full-time hiring pools!
                            </span>
                        </div>
                    </div>

                    {/* Form Processing Right Side */}
                    <div className="md:col-span-7">
                        <div
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                            }}
                            className="glass-panel p-6 sm:p-8 rounded-3xl border-white/5 h-full relative overflow-hidden group"
                        >
                            {/* Spotlight Hover Glow */}
                            <div
                                className="absolute inset-0 bg-[radial-gradient(500px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(56,189,248,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            />

                            {/* Form elements */}
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                                {/* Name */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="John Doe"
                                        disabled={status === 'loading'}
                                        className="w-full px-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue/50 transition-colors disabled:opacity-50"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="john@example.com"
                                        disabled={status === 'loading'}
                                        className="w-full px-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue/50 transition-colors disabled:opacity-50"
                                    />
                                </div>

                                {/* Subject */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Freelance Project / Hiring inquiry"
                                        disabled={status === 'loading'}
                                        className="w-full px-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue/50 transition-colors disabled:opacity-50"
                                    />
                                </div>

                                {/* Message Body */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="4"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Tell me about your project context, timeline, budget..."
                                        disabled={status === 'loading'}
                                        className="w-full px-4 py-3 bg-slate-950 border border-white/5 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-accent-blue/50 transition-colors resize-none disabled:opacity-50"
                                    />
                                </div>

                                {/* Status indicator popups */}
                                {status === 'success' && (
                                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm rounded-xl flex items-center gap-3 animate-in fade-in zoom-in-95 duration-200">
                                        <CheckCircle2 size={18} className="flex-shrink-0" />
                                        <span>{statusMsg}</span>
                                    </div>
                                )}

                                {status === 'error' && (
                                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl flex items-center gap-3 animate-in fade-in zoom-in-95 duration-200">
                                        <AlertCircle size={18} className="flex-shrink-0" />
                                        <span>{statusMsg}</span>
                                    </div>
                                )}

                                {/* Send Button */}
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-accent-blue to-accent-purple text-black font-semibold rounded-xl hover:brightness-110 shadow-lg shadow-accent-blue/10 transition-all hover:scale-101 cursor-pointer disabled:opacity-50"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            Sending Inquiry...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send Message
                                        </>
                                    )}
                                </button>

                            </form>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
