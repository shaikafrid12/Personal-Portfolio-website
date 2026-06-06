import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const LogoIcon = ({ size = 32 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_12px_rgba(56,189,248,0.7)]"
    >
        {/* Dynamic Outer Rotating Ring */}
        <circle
            cx="20"
            cy="20"
            r="17"
            stroke="url(#orbit-grad)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            className="animate-[spin_20s_linear_infinite]"
        />

        {/* Inner Glowing Hexagon */}
        <path
            d="M20 5L33 12.5V27.5L20 35L7 27.5V12.5L20 5Z"
            stroke="url(#hexa-grad)"
            strokeWidth="2"
            strokeLinejoin="round"
            className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
        />

        {/* Sci-Fi Code Brackets (Glows and Shifts on Hover) */}
        <path
            d="M14 16L9 20L14 24"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:-translate-x-0.5 transition-transform duration-300"
        />
        <path
            d="M26 16L31 20L26 24"
            stroke="#8b5cf6"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-0.5 transition-transform duration-300"
        />

        {/* Center Tech Core Particle */}
        <circle
            cx="20"
            cy="20"
            r="3"
            fill="#ffffff"
            className="animate-pulse"
        />

        {/* Custom Premium Gradients */}
        <defs>
            <linearGradient id="orbit-grad" x1="3" y1="3" x2="37" y2="37" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="hexa-grad" x1="7" y1="5" x2="33" y2="35" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
        </defs>
    </svg>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Listen to page scroll to adjust background styling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-[#0f172a]/80 backdrop-blur-md py-4 border-b border-white/5 shadow-lg'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Brand Logo in Terminal Code Style */}
                <Link to="/" className="flex items-center gap-1 group select-none">
                    <div className="flex items-center text-xl md:text-2xl font-bold tracking-tight transition-transform duration-300 hover:scale-102">
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

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        to="/"
                        className={
                            location.pathname === '/'
                                ? 'text-accent-blue nav-link-active cursor-pointer transition-all duration-300 font-semibold'
                                : 'text-gray-300 hover:text-accent-blue cursor-pointer transition-all duration-300 font-medium'
                        }
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={
                            location.pathname === '/about'
                                ? 'text-accent-blue nav-link-active cursor-pointer transition-all duration-300 font-semibold'
                                : 'text-gray-300 hover:text-accent-blue cursor-pointer transition-all duration-300 font-medium'
                        }
                    >
                        About
                    </Link>
                    <Link
                        to="/skills"
                        className={
                            location.pathname === '/skills'
                                ? 'text-accent-blue nav-link-active cursor-pointer transition-all duration-300 font-semibold'
                                : 'text-gray-300 hover:text-accent-blue cursor-pointer transition-all duration-300 font-medium'
                        }
                    >
                        Skills
                    </Link>
                    <Link
                        to="/projects"
                        className={
                            location.pathname === '/projects'
                                ? 'text-accent-blue nav-link-active cursor-pointer transition-all duration-300 font-semibold'
                                : 'text-gray-300 hover:text-accent-blue cursor-pointer transition-all duration-300 font-medium'
                        }
                    >
                        Projects
                    </Link>
                    <Link
                        to="/contact"
                        className={
                            location.pathname === '/contact'
                                ? 'text-accent-blue nav-link-active cursor-pointer transition-all duration-300 font-semibold'
                                : 'text-gray-300 hover:text-accent-blue cursor-pointer transition-all duration-300 font-medium'
                        }
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Navigation Trigger */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Slide-Down Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 glass-panel border-b border-white/5 py-6 px-6 flex flex-col gap-5 animate-in fade-in slide-in-from-top-5 duration-200">
                    <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className={`text-left py-2 text-lg font-medium cursor-pointer transition-colors ${location.pathname === '/' ? 'text-accent-blue font-semibold' : 'text-gray-300 hover:text-accent-blue'
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        onClick={() => setIsOpen(false)}
                        className={`text-left py-2 text-lg font-medium cursor-pointer transition-colors ${location.pathname === '/about' ? 'text-accent-blue font-semibold' : 'text-gray-300 hover:text-accent-blue'
                            }`}
                    >
                        About
                    </Link>
                    <Link
                        to="/skills"
                        onClick={() => setIsOpen(false)}
                        className={`text-left py-2 text-lg font-medium cursor-pointer transition-colors ${location.pathname === '/skills' ? 'text-accent-blue font-semibold' : 'text-gray-300 hover:text-accent-blue'
                            }`}
                    >
                        Skills
                    </Link>
                    <Link
                        to="/projects"
                        onClick={() => setIsOpen(false)}
                        className={`text-left py-2 text-lg font-medium cursor-pointer transition-colors ${location.pathname === '/projects' ? 'text-accent-blue font-semibold' : 'text-gray-300 hover:text-accent-blue'
                            }`}
                    >
                        Projects
                    </Link>
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className={`text-left py-2 text-lg font-medium cursor-pointer transition-colors ${location.pathname === '/contact' ? 'text-accent-blue font-semibold' : 'text-gray-300 hover:text-accent-blue'
                            }`}
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
