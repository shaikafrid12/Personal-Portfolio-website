
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';




const GithubIcon = ({ size = 20, ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const LinkedinIcon = ({ size = 20, ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);

const LeetcodeIcon = ({ size = 20, ...props }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M16.102 17.93l-2.69 2.6c-.75.68-1.75 1.07-2.83 1.07-2.2 0-4-1.77-4-3.97 0-1.1.45-2.1 1.17-2.83l4.2-4.1a1.25 1.25 0 1 0-1.76-1.77l-4.2 4.1a6.45 6.45 0 0 0-1.83 4.6c0 3.58 2.95 6.47 6.6 6.47 1.76 0 3.39-.7 4.62-1.83l2.69-2.6a1.25 1.25 0 1 0-1.76-1.77z" />
        <path d="M22.08 11.58c0-.7-.56-1.25-1.25-1.25H9.31c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25h11.52c.69 0 1.25-.56 1.25-1.25z" />
        <path d="M17.15 6.8c.49.48 1.27.48 1.76 0l2.25-2.25a1.25 1.25 0 1 0-1.76-1.77L17.15 5.03c-.49.49-.49 1.28 0 1.77z" />
    </svg>
);


const Footer = () => {
    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className='relative bg-[#0b101f] border-white/5 border-t py-12 px-6 z-10 overflow-hidden'>
            {/* Ambient background glows */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-accent-purple/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-accent-blue/5 blur-[120px] rounded-full pointer-events-none" />

            <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative'>
                {/* Brand & Bio */}
                <div className='flex flex-col items-center md:items-start gap-3 flex-1 w-full'>
                    <Link to="/" className="flex items-center gap-1 group select-none">
                        <div className="flex items-center text-lg md:text-xl font-bold tracking-tight transition-transform duration-300 hover:scale-102">
                            {/* Command-prompt Caret and Cursor */}
                            <span className="text-accent-blue font-mono mr-1.5 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] font-extrabold">&gt;</span>
                            <span className="text-white font-mono mr-2.5 drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] font-extrabold animate-pulse">_</span>

                            {/* Name and Extension */}
                            <span className="text-white font-extrabold transition-colors group-hover:text-accent-blue duration-300 mr-1.5">
                                Afrid
                            </span>
                            <span className="text-accent-blue font-extrabold drop-shadow-[0_0_6px_rgba(56,189,248,0.4)]">
                                .Dev
                            </span>
                        </div>
                    </Link>
                    <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
                        Motivated Computer Science undergraduate student building modern, responsive, and secure software applications.
                    </p>
                </div>

                {/* Social Links (Center) */}
                <div className="flex flex-col items-center justify-center gap-3 flex-1 w-full">
                    <span className="text-xs font-semibold tracking-widest uppercase text-gray-500">Connect</span>
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/shaikafrid12"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
                            aria-label="GitHub"
                        >
                            <GithubIcon size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/shaik-afrid-335582332/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
                            aria-label="LinkedIn"
                        >
                            <LinkedinIcon size={18} />
                        </a>
                        <a
                            href="https://leetcode.com/u/shaikafrid709/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
                            aria-label="LeetCode"
                        >
                            <LeetcodeIcon size={18} />
                        </a>
                    </div>
                </div>

                {/* Copyright & Scroll to Top */}
                <div className="flex flex-col items-center md:items-end gap-4 flex-1 w-full">
                    <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500">
                        <span>&copy; {new Date().getFullYear()} Shaik Afrid. All rights reserved.</span>
                        <button
                            onClick={scrolltoTop}
                            className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
