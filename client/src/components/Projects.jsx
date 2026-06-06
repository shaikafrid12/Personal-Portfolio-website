import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { ExternalLink, Search, X, Loader2 } from 'lucide-react';


const GithubIcon = ({ size = 16, ...props }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
);

const Projects = ({ isHomeMode = true }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);

    // Categories list
    const categories = ['All', 'Full-Stack Applications', 'Web Development', 'UI/UX Design'];

    // Fetch projects from backend
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get('/api/projects');
                if (res.data.success) {
                    setProjects(res.data.data);
                }
            } catch (error) {
                console.error('Failed to fetch projects, using fallback data:', error.message);
                // Fallback robust mocks if database is not seeded yet
                setProjects([
                    {
                        _id: 'fallback-1',
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
                        _id: 'fallback-2',
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
                        _id: 'fallback-3',
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
                ]);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    // Filter & Search logic
    const filteredProjects = projects.filter((project) => {
        const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
        const searchString = `${project.title} ${project.description} ${project.technologies.join(' ')}`.toLowerCase();
        const matchesSearch = searchString.includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section id="projects" className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-xs font-semibold tracking-widest uppercase text-accent-blue mb-3">Portfolio</h2>
                    <p className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Explore My Featured Projects
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mt-4 rounded-full" />
                </div>

                {/* Filter and Search Controls */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap gap-2 justify-center">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-xl border transition-all cursor-pointer ${activeCategory === cat
                                        ? 'bg-accent-blue border-accent-blue text-black shadow-lg shadow-accent-blue/10'
                                        : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:border-white/10'
                                    }`}
                            >
                                {cat.split(' ')[0]} {/* shortened mobile view */}
                                <span className="hidden sm:inline">{cat.split(' ').slice(1).join(' ') ? ` ${cat.split(' ').slice(1).join(' ')}` : ''}</span>
                            </button>
                        ))}
                    </div>

                    {/* Search box input */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                        <input
                            type="text"
                            placeholder="Search technologies, titles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/5 rounded-2xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-accent-blue/50 transition-colors"
                        />
                    </div>
                </div>

                {/* Loading Spinner */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <Loader2 className="text-accent-blue animate-spin" size={40} />
                    </div>
                ) : (
                    /* Grid of project cards */
                    <motion.div
                        layout
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    key={project._id}
                                    onMouseMove={(e) => {
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        const x = e.clientX - rect.left;
                                        const y = e.clientY - rect.top;
                                        e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
                                        e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
                                    }}
                                    className="glass-panel rounded-3xl border-white/5 overflow-hidden flex flex-col group h-full cursor-pointer relative"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {/* Spotlight Hover Glow */}
                                    <div
                                        className="absolute inset-0 bg-[radial-gradient(400px_circle_at_var(--mouse-x,0px)_var(--mouse-y,0px),rgba(56,189,248,0.12),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                    />

                                    {/* Glowing Outline */}
                                    <div className="absolute inset-0 border border-transparent group-hover:border-accent-blue/20 rounded-3xl transition-colors pointer-events-none" />

                                    {/* Card mockup header */}
                                    <div className="relative h-48 overflow-hidden bg-slate-950 border-b border-white/5">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                        {/* Category Overlay Tag */}
                                        <span className="absolute top-4 left-4 px-3 py-1 bg-[#0f172a]/80 backdrop-blur-md border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-wider text-accent-blue">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Card body */}
                                    <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-xl font-bold text-white group-hover:text-accent-blue transition-colors">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="flex flex-col gapa-4">
                                            {/* Tech stack badges */}
                                            <div className="flex flex-wrap gap-1.5">
                                                {project.technologies.slice(0, 3).map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-1 bg-white/5 rounded-lg text-[10px] font-semibold text-gray-400"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.technologies.length > 3 && (
                                                    <span className="px-2 py-1 bg-white/5 rounded-lg text-[10px] font-semibold text-accent-blue">
                                                        +{project.technologies.length - 3} more
                                                    </span>
                                                )}
                                            </div>

                                            {/* Detail CTA Row */}
                                            <div className="flex items-center justify-between pt-3 border-t border-white/5">
                                                <span className="text-xs font-bold uppercase tracking-wider text-accent-blue group-hover:text-accent-purple transition-colors">
                                                    View Details
                                                </span>

                                                <div className="flex items-center gap-3" onClick={(e) => e.stopPropagation()}>
                                                    {project.githubLink && (
                                                        <a
                                                            href={project.githubLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-gray-500 hover:text-white transition-colors"
                                                            title="GitHub Code"
                                                        >
                                                            <GithubIcon size={16} />
                                                        </a>
                                                    )}
                                                    {project.liveLink && (
                                                        <a
                                                            href={project.liveLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-accent-blue hover:text-white transition-colors"
                                                            title="Live Demo"
                                                        >
                                                            <ExternalLink size={16} />
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

                {/* Empty State */}
                {!loading && filteredProjects.length === 0 && (
                    <div className="text-center py-20 glass-panel border-white/5 rounded-3xl">
                        <p className="text-gray-400 text-lg">No projects match your active search criteria.</p>
                    </div>
                )}
            </div>

            {/* Case Study Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* Dark blur backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-zoom-out"
                        />

                        {/* Modal Body card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-panel border-white/10 rounded-3xl shadow-2xl z-10 flex flex-col"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black text-white hover:text-red-400 rounded-xl transition-all z-20 cursor-pointer border border-white/5"
                            >
                                <X size={18} />
                            </button>

                            {/* Modal Cover Image */}
                            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950 flex-shrink-0">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/20 to-transparent" />

                                {/* Info Block overlay on image bottom */}
                                <div className="absolute bottom-6 left-6 right-6">
                                    <span className="px-3 py-1 bg-accent-blue text-black text-[10px] font-bold uppercase tracking-wider rounded-full">
                                        {selectedProject.category}
                                    </span>
                                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                                        {selectedProject.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Modal contents */}
                            <div className="p-6 sm:p-8 flex flex-col gap-6">

                                {/* Action Links */}
                                <div className="flex flex-wrap items-center gap-4 pb-4 border-b border-white/5">
                                    {selectedProject.liveLink && (
                                        <a
                                            href={selectedProject.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-blue to-accent-purple text-black font-semibold text-sm rounded-xl hover:brightness-110 shadow-lg shadow-accent-blue/10 transition-all hover:scale-102"
                                        >
                                            <ExternalLink size={16} />
                                            Live Preview
                                        </a>
                                    )}
                                    {selectedProject.githubLink && (
                                        <a
                                            href={selectedProject.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm rounded-xl border border-white/10 hover:border-white/20 transition-all hover:scale-102"
                                        >
                                            <GithubIcon size={16} />
                                            Source Code
                                        </a>
                                    )}
                                </div>

                                {/* Tech Badges list */}
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-xl text-xs font-semibold text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Case Study Render (detailedDescription falling back to default description) */}
                                <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed text-sm sm:text-base prose-headings:text-white prose-headings:font-bold prose-h3:text-lg prose-ul:list-disc prose-ul:pl-6 flex flex-col gap-4">
                                    {selectedProject.detailedDescription ? (
                                        <ReactMarkdown>{selectedProject.detailedDescription}</ReactMarkdown>
                                    ) : (
                                        <p>{selectedProject.description}</p>
                                    )}
                                </div>

                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
