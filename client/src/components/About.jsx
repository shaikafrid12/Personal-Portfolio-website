import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Cpu, BookOpen, Globe } from 'lucide-react';
import profileImage from '../assets/image.png';



const About = () => {

    const [activeTab, setActiveTab] = useState('education');

    const stats = [
        { label: 'B.Tech CGPA', value: '8.11 / 10', icon: <GraduationCap className="text-accent-blue" size={20} /> },
        { label: 'Internships Finished', value: '1 Active', icon: <Briefcase className="text-accent-purple" size={20} /> },
        { label: 'Certifications', value: '3 Achieved', icon: <Award className="text-pink-500" size={20} /> }
    ];
    const experienceData = [
        {
            role: 'Web Development Intern',
            company: 'Agratas Academy Pvt Ltd',
            period: 'Nov 2024 – Jan 2025',
            desc: 'Assisted in developing reusable React components improving UI consistency. Worked with Git and GitHub for version control and collaboration. Focused on building responsive web applications with high performance and scalability.'
        },
        {
            role: 'Open-Source Contributor',
            company: 'GitHub Communities',
            period: '2023 - Present',
            desc: 'Actively committing code, fixing front-end UI glitches, improving responsive web designs, and resolving documentation issues across community projects.'
        }
    ];

    const educationData = [
        {
            degree: 'B.Tech in Computer Science and Engineering',
            school: 'Raghu Engineering College',
            period: '2023 – Present',
            desc: 'Deepening concepts of programming, software engineering, databases, and problem solving. CGPA: 8.11. Location: Visakhapatnam, India.'
        },
        {
            degree: 'Higher Secondary Education (12th Grade)',
            school: 'Sri Sadhana Junior College',
            period: '2021 – 2023',
            desc: 'Focused on Mathematics, Physics, and Chemistry. Percentage: 72.7%. Location: Erragondapalem, India.'
        },
        {
            degree: 'Secondary School Education (10th Grade)',
            school: 'Wachaspathi High School',
            period: '2020 – 2021',
            desc: 'Completed secondary education with high merit. Percentage: 83.83%. Location: Erragondapalem, India.'
        }
    ];

    const certifications = [
        { name: 'Database Management Systems', organization: 'NPTEL' },
        { name: 'Web Development', organization: 'Agratas Academy Pvt Ltd' },
        { name: 'Java Programming', organization: 'Scaler Topics' }
    ];


    return (
        <section id='about' className='py-24 px-6 relative z-10'>
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">About Me</h2>
                    <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Discover My Technical Journey
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4 rounded-full" />
                </div>
            </div>
            <div className="grid md:grid-cols-12 gap-12 items-start">

                <div className='md:col-span-5 flex justify-center'>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group max-w-sm w-full"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue to-accent-purple rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                        <div className="relative glass-panel p-3 rounded-3xl border-white/10 overflow-hidden shadow-2xl">
                            <div className="w-full h-80 bg-gradient-to-br from-slate-800 to-slate-950 rounded-2xl overflow-hidden relative flex items-center justify-center border border-white/5">
                                <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/10 to-accent-purple/10 mix-blend-overlay" />

                                <img
                                    src={profileImage}
                                    alt="Shaik Afrid CS Student"
                                    className="w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-slate-950/20 pointer-events-none" />

                            </div>
                        </div>
                    </motion.div>
                </div>


                <div className='md:col-span-7'>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col gap-6"
                    >
                        <h3 className="text-2xl font-bold text-white">
                            Hi, I'm <span className="text-accent-blue">Shaik Afrid</span>
                        </h3>

                        <p className="text-gray-400 leading-relaxed text-lg">
                            I am a motivated Computer Science undergraduate student with a strong foundation in programming, software engineering, and web development. Equipped with hands-on MERN stack architectures and algorithmic concepts, I love building modern, responsive, and secure software applications.
                        </p>

                        <p className="text-gray-400 leading-relaxed">
                            Having completed an internship where I refined my React rendering, Git coordination, and styling consistency, I am eager to apply my technical learnings to an entry-level software developer opportunity where I can continuously learn and build scalable digital solutions.
                        </p>

                        <div className='grid grid-cols-3 gap-4 my-4'>
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        const x = e.clientX - rect.left;
                                        const y = e.clientY - rect.top;
                                        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                                    }}
                                    className="glass-panel p-4 rounded-2xl border-white/5 flex flex-col gap-2 items-center text-center relative overflow-hidden group"
                                >
                                    <div
                                        className="absolute inset-0 bg-[radial-gradient(200px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(56,189,248,0.1),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    />
                                    <div className="p-2 bg-white/5 rounded-xl z-10">
                                        {stat.icon}
                                    </div>
                                    <span className="text-xl font-extrabold text-white z-10">{stat.value}</span>
                                    <span className="text-[10px] uppercase font-bold tracking-wider text-gray-500 z-10">{stat.label}</span>
                                </div>
                            ))}

                        </div>

                        <div className='flex gap-4 border-b border-white/5 pb-2'>
                            <button onClick={() => setActiveTab('education')} className={`flex items-center gap-2 pb-2 font-bold uppercase text-xs tracking-widest transition-colors cursor-pointer relative ${activeTab === 'education' ? 'text-accent-blue' : 'text-gray-500 hover:text-white'
                                }`} >
                                <GraduationCap size={20} />

                                Education
                                {activeTab === 'education' && (
                                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-blue" />
                                )}


                            </button>
                            <button
                                onClick={() => setActiveTab('experience')}
                                className={`flex items-center gap-2 pb-2 font-bold uppercase text-xs tracking-widest transition-colors cursor-pointer relative ${activeTab === 'experience' ? 'text-accent-blue' : 'text-gray-500 hover:text-white'
                                    }`}
                            >
                                <Briefcase size={20} />
                                Internships & Activities
                                {activeTab === 'experience' && (
                                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-blue" />
                                )}
                            </button>
                            <button
                                onClick={() => setActiveTab('certifications')}
                                className={`flex items-center gap-2 pb-2 font-bold uppercase text-xs tracking-widest transition-colors cursor-pointer relative ${activeTab === 'certifications' ? 'text-accent-blue' : 'text-gray-500 hover:text-white'
                                    }`}
                            >
                                <Award size={20} />
                                Certificates & Skills
                                {activeTab === 'certifications' && (
                                    <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-blue" />
                                )}
                            </button>

                        </div>

                        <div className="relative pl-6 mt-4 timeline-track flex flex-col gap-8">
                            <AnimatePresence mode="wait">
                                {activeTab === 'education' ? (
                                    <motion.div
                                        key="edu"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col gap-6"
                                    >
                                        {educationData.map((item, index) => (
                                            <div key={index} className="relative group">
                                                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-accent-blue rounded-full border-4 border-[#070b19] z-20 group-hover:scale-125 transition-transform" />

                                                <div
                                                    onMouseMove={(e) => {
                                                        const rect = e.currentTarget.getBoundingClientRect();
                                                        const x = e.clientX - rect.left;
                                                        const y = e.clientY - rect.top;
                                                        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                                        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                                                    }}
                                                    className="glass-panel p-5 rounded-2xl border-white/5 group-hover:border-accent-blue/20 transition-colors relative overflow-hidden group"
                                                >
                                                    {/* Spotlight Hover Glow */}
                                                    <div
                                                        className="absolute inset-0 bg-[radial-gradient(300px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(56,189,248,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                                    />
                                                    <span className="text-xs font-semibold text-accent-blue uppercase tracking-wider z-10 relative">{item.period}</span>
                                                    <h4 className="text-lg font-bold text-white mt-1 z-10 relative">{item.degree}</h4>
                                                    <span className="text-sm font-semibold text-gray-400 z-10 relative">{item.school}</span>
                                                    <p className="text-gray-400 text-sm mt-3 leading-relaxed z-10 relative">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                ) : activeTab === 'experience' ? (
                                    <motion.div
                                        key="exp"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex flex-col gap-6"
                                    >
                                        {experienceData.map((item, index) => (
                                            <div key={index} className="relative group">
                                                <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-accent-purple rounded-full border-4 border-[#070b19] z-20 group-hover:scale-125 transition-transform" />

                                                <div
                                                    onMouseMove={(e) => {
                                                        const rect = e.currentTarget.getBoundingClientRect();
                                                        const x = e.clientX - rect.left;
                                                        const y = e.clientY - rect.top;
                                                        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                                        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                                                    }}
                                                    className="glass-panel p-5 rounded-2xl border-white/5 group-hover:border-accent-purple/20 transition-colors relative overflow-hidden group"
                                                >
                                                    {/* Spotlight Hover Glow */}
                                                    <div
                                                        className="absolute inset-0 bg-[radial-gradient(300px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(139,92,246,0.08),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                                    />
                                                    <span className="text-xs font-semibold text-accent-purple uppercase tracking-wider z-10 relative">{item.period}</span>
                                                    <h4 className="text-lg font-bold text-white mt-1 z-10 relative">{item.role}</h4>
                                                    <span className="text-sm font-semibold text-gray-400 z-10 relative">{item.company}</span>
                                                    <p className="text-gray-400 text-sm mt-3 leading-relaxed z-10 relative">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="certs"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="grid sm:grid-cols-2 gap-4"
                                    >
                                        {certifications.map((item, index) => (
                                            <div
                                                key={index}
                                                onMouseMove={(e) => {
                                                    const rect = e.currentTarget.getBoundingClientRect();
                                                    const x = e.clientX - rect.left;
                                                    const y = e.clientY - rect.top;
                                                    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                                    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                                                }}
                                                className="glass-panel p-5 rounded-2xl border-white/5 hover:border-pink-500/20 transition-colors flex flex-col gap-2 relative overflow-hidden group"
                                            >
                                                {/* Spotlight Hover Glow */}
                                                <div
                                                    className="absolute inset-0 bg-[radial-gradient(300px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(236,72,153,0.1),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                                />
                                                <Award className="text-pink-500 z-10" size={24} />
                                                <h4 className="text-white font-bold text-base mt-2 z-10">{item.name}</h4>
                                                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wider z-10">{item.organization}</span>
                                            </div>
                                        ))}

                                        {/* Language card addition */}
                                        <div className="glass-panel p-5 rounded-2xl border-white/5 sm:col-span-2 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <Globe className="text-accent-blue" size={22} />
                                                <span className="text-sm font-bold text-white uppercase tracking-wider">Spoken Languages</span>
                                            </div>
                                            <div className="flex gap-2">
                                                {['English', 'Telugu', 'Hindi'].map((lang, lIdx) => (
                                                    <span key={lIdx} className="px-3 py-1 bg-white/5 border border-white/5 rounded-xl text-xs text-gray-300 font-semibold">{lang}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                    </motion.div>

                </div>
            </div>

        </section>
    )
}

export default About