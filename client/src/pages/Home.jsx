import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Cpu, Layers, Mail, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';


const Home = () => {

    const navigate = useNavigate();
    const highlights = [
        {
            title: 'About My Journey',
            description: 'Discover my B.Tech CSE track, internship accomplishments, and academic history.',
            icon: <User className="text-accent-blue" size={22} />,
            path: '/about',
            hoverBorder: 'hover:border-accent-blue/30',
            tag: 'Experience & Education'
        },
        {
            title: 'Technical Stack',
            description: 'Explore my MERN stack experience, programming tools, and languages.',
            icon: <Cpu className="text-accent-purple" size={22} />,
            path: '/skills',
            hoverBorder: 'hover:border-accent-purple/30',
            tag: 'Skills & Tools'
        },
        {
            title: 'Featured Projects',
            description: 'Browse my full-stack web applications, REST APIs, and UI designs.',
            icon: <Layers className="text-emerald-500" size={22} />,
            path: '/projects',
            hoverBorder: 'hover:border-emerald-500/30',
            tag: 'Portfolio Showcase'
        },
        {
            title: 'Get In Touch',
            description: 'Let’s connect! Send a direct message or check out my professional socials.',
            icon: <Mail className="text-pink-500" size={22} />,
            path: '/contact',
            hoverBorder: 'hover:border-pink-500/30',
            tag: 'Connect & Socials'
        }
    ];
    return (
        <div className="animate-in fade-in duration-500 flex flex-col gap-12 pb-24">
            <Hero onContactClick={() => navigate('/contact')}
                onProjectsClick={() => navigate('/projects')}
            />

            <section className='px-6 relative z-10 max-w-6xl mx-auto w-full -mt-6 sm:-mt-16'>
                <div className='text-center mb-12'>
                    <h2 className='text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3 '>Explore My Experience</h2>
                    <p className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        Key Highlights
                    </p>
                    <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-3 rounded-full" />

                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            onClick={() => navigate(card.path)}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                            }}
                            className={`glass-panel p-6 rounded-3xl border-white/5 cursor-pointer relative overflow-hidden group transition-all duration-300 ${card.hoverBorder}`}
                        >
                            {/* Spotlight Hover Glow */}
                            <div
                                className="absolute inset-0 bg-[radial-gradient(350px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(56,189,248,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            />

                            <div className="flex justify-between items-center mb-4 relative z-10">
                                <span className="text-[10px] font-extrabold uppercase tracking-wider text-gray-500 group-hover:text-accent-blue transition-colors">
                                    {card.tag}
                                </span>
                                <div className="flex items-center justify-center w-11 h-11 bg-white/5 rounded-2xl">
                                    {card.icon}
                                </div>
                            </div>

                            <div className="relative z-10 flex flex-col gap-2">
                                <h3 className="text-lg font-bold text-white group-hover:text-accent-blue transition-colors">
                                    {card.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                                    {card.description}
                                </p>

                                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-accent-blue mt-4 group-hover:text-accent-purple transition-all duration-300">
                                    Explore section
                                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
