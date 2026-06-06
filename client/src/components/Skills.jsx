import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

// Custom designed premium SVG icons with matching neon drop shadow filters
const FrontendIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-accent-blue drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
        <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M2 9h20M7 9v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="4.5" cy="6" r="1.2" fill="currentColor" />
        <circle cx="7.5" cy="6" r="1.2" fill="currentColor" />
        <circle cx="10.5" cy="6" r="1.2" fill="currentColor" />
    </svg>
);

const BackendIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-accent-purple drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]">
        <rect x="2" y="2" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="2" y="9" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="2" y="16" width="20" height="6" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M6 5h.01M6 12h.01M6 19h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M18 5h.01M18 12h.01M18 19h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" fill="currentColor" className="animate-pulse" />
    </svg>
);

const LanguagesIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
        <path d="M16 18l6-6-6-6M8 6L2 12l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 4l-4 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

const ToolsIcon = ({ size = 24 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className="text-emerald-500 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Skills = () => {
    const skillCategories = [
        {
            title: 'Frontend Technologies',
            icon: <FrontendIcon size={24} />,
            accentColor: 'rgba(56, 189, 248, 0.3)',
            skills: [
                { name: 'React.js', level: 90 },
                { name: 'Tailwind CSS', level: 92 },
                { name: 'HTML5 / CSS3', level: 95 },
                { name: 'Responsive Web Design', level: 95 }
            ]
        },
        {
            title: 'Backend & Databases',
            icon: <BackendIcon size={24} />,
            accentColor: 'rgba(139, 92, 246, 0.3)',
            skills: [
                { name: 'Node.js / Express.js', level: 85 },
                { name: 'MongoDB / Mongoose', level: 88 },
                { name: 'RESTful API Design', level: 90 },
                { name: 'JWT Authentication', level: 88 }
            ]
        },
        {
            title: 'Programming Languages',
            icon: <LanguagesIcon size={24} />,
            accentColor: 'rgba(236, 72, 153, 0.3)',
            skills: [
                { name: 'Java Programming', level: 85 },
                { name: 'Python Programming', level: 75 },
                { name: 'C Language', level: 80 }
            ]
        },
        {
            title: 'Tools & Platforms',
            icon: <ToolsIcon size={24} />,
            accentColor: 'rgba(16, 185, 129, 0.3)',
            skills: [
                { name: 'Git & GitHub', level: 90 },
                { name: 'Postman API Testing', level: 88 },
                { name: 'VS Code Editor', level: 95 }
            ]
        }
    ];

    return (
        <section id="skills" className="py-24 px-6 relative z-10 bg-transparent">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(139,92,246,0.03),transparent)] pointer-events-none" />

            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Skills</h2>
                    <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        My Technical Stack
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4 rounded-full" />
                </div>

                {/* Categories Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            onMouseMove={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const y = e.clientY - rect.top;
                                e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                            }}
                            className="glass-panel p-6 rounded-3xl border-white/5 relative group overflow-hidden"
                            style={{
                                '--hover-glow': category.accentColor
                            }}
                        >
                            <div
                                className="absolute inset-0 bg-[radial-gradient(400px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),var(--hover-glow),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                            />

                            <div className="flex items-center gap-3 mb-6 relative">
                                <div className="p-3 bg-white/5 rounded-2xl">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            {/* Progress bars */}
                            <div className="flex flex-col gap-5 relative">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="flex flex-col gap-2">
                                        <div className="flex justify-between items-center text-sm font-semibold">
                                            <span className="text-gray-300 flex items-center gap-1.5">
                                                <CheckCircle size={14} className="text-accent-blue/60" />
                                                {skill.name}
                                            </span>
                                            <span className="text-white">{skill.level}%</span>
                                        </div>

                                        <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-white/5 relative">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.2, ease: 'easeOut' }}
                                                className="h-full bg-gradient-to-r rounded-full"
                                                style={{
                                                    backgroundImage: category.title.includes('Frontend')
                                                        ? 'linear-gradient(90deg, #38bdf8, #8b5cf6)'
                                                        : category.title.includes('Backend')
                                                            ? 'linear-gradient(90deg, #8b5cf6, #ec4899)'
                                                            : category.title.includes('Programming')
                                                                ? 'linear-gradient(90deg, #ec4899, #f43f5e)'
                                                                : 'linear-gradient(90deg, #10b981, #38bdf8)'
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </motion.div>
                    ))}
                </div>

                {/* Small Stack badges */}
                <div className="mt-14 flex flex-wrap justify-center gap-3">
                    {['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'RESTful APIs', 'JWT Authentication', 'Java', 'Python', 'C', 'Git', 'GitHub', 'Postman', 'VS Code'].map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-2 bg-white/5 hover:bg-white/10 hover:border-white/20 border border-white/5 rounded-full text-xs font-semibold text-gray-400 hover:text-white transition-all cursor-default"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;
