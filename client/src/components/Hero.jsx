import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";


const GithubIcon = ({ size = 22, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedinIcon = ({ size = 22, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const DownloadIcon = ({ size = 14, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const nameContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.1,
        }
    }
};

const letterVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        rotateX: -40,
    },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
            type: "spring",
            damping: 15,
            stiffness: 150,
        }
    }
};


const Hero = ({ onContactClick, onProjectsClick }) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const words = [
        'B.Tech CSE Undergraduate',
        'Full-Stack Developer',
        'Problem Solver'
    ];

    useEffect(() => {
        let timer;
        const currentWord = words[wordIndex];
        const typingSpeed = isDeleting ? 40 : 100;


        const handleTyping = () => {
            if (!isDeleting) {
                setText(currentWord.substring(0, text.length + 1));
                if (text === currentWord) {
                    timer = setTimeout(() => setIsDeleting(true), 2000);
                    return;
                }
            } else {
                setText(currentWord.substring(0, text.length - 1));
                if (text === "") {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                    return;
                }
            }
            timer = setTimeout(handleTyping, typingSpeed);
        }
        timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, wordIndex]);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-28 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2.5 px-4.5 py-2.5 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 border border-accent-blue/20 hover:border-accent-blue/40 rounded-full mb-6 backdrop-blur-md shadow-lg shadow-accent-blue/5 transition-colors duration-300 cursor-default"
                >
                    <span className="w-2 h-2 rounded-full bg-accent-blue animate-ping" />
                    <span className="text-[11px] font-bold uppercase tracking-widest text-accent-blue">
                        Seeking Entry-Level Opportunities
                    </span>
                </motion.div>

                <motion.h1
                    variants={nameContainerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight select-none"
                >
                    {"SHAIK AFRID".split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={letterVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.15,
                                color: 'var(--color-accent-purple)',
                                textShadow: '0 0 15px rgba(139, 92, 246, 0.6)',
                                transition: { type: 'spring', stiffness: 300, damping: 10 }
                            }}
                            className="inline-block cursor-default transition-colors duration-200"
                            style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}

                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="h-10 text-xl md:text-2xl text-gray-400 font-medium mb-8 flex items-center justify-center gap-1.5"
                >
                    <span>I'm a</span>
                    <span className="text-white border-r-2 border-accent-blue pr-1 animate-pulse font-semibold font-mono">
                        {text}
                    </span>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Motivated Computer Science undergraduate with a strong foundation in programming, software development, and problem-solving. Seeking to build efficient and scalable software solutions.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-5 mb-14"
                >
                    <button
                        onClick={onProjectsClick}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-blue to-accent-purple hover:brightness-110 text-black font-semibold rounded-2xl shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-accent-blue/20 cursor-pointer group"
                    >
                        Explore Projects
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                        onClick={onContactClick}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-102 cursor-pointer"
                    >
                        Let's Connect
                        <Mail size={18} />
                    </button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex justify-center items-center gap-6"
                >
                    <a
                        href="https://github.com/shaikafrid12"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                        title="GitHub Profile"
                    >
                        <GithubIcon size={22} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shaik-afrid-335582332/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white transition-colors"
                        title="LinkedIn Profile"
                    >
                        <LinkedinIcon size={22} />
                    </a>
                    <a
                        href="/SHAIK_AFRID_RESUME.pdf"
                        download="SHAIK_AFRID_RESUME.pdf"
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-accent-blue hover:text-accent-purple transition-colors cursor-pointer pl-6 border-l border-white/10"
                    >
                        <DownloadIcon size={14} /> Download Resume
                    </a>
                </motion.div>

            </div>

        </section>
    )
}

export default Hero;