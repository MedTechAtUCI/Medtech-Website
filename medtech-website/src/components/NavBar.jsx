import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const currentPath = location.pathname;

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const linkStyle = (path) => 
        `transition-all duration-200 text-sm uppercase tracking-widest font-bold ${
            currentPath === path 
            ? 'text-blue-600' 
            : 'text-neutral-500 hover:text-blue-600'
        }`;

    return (
        <nav className="fixed top-0 left-0 right-0 z-[100]">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-3 group relative z-[110]">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
                        <img
                            src="/icons/medtech_logo_blue.png"
                            alt="MedTech Logo"
                            className="w-7 h-7 object-contain brightness-0 invert"
                        />
                    </div>
                    <span className="text-xl font-black tracking-tighter text-neutral-900">
                        MedTech<span className="text-blue-600">@</span>UCI
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/partnerships" className={linkStyle('/partnerships')}>Partnerships</Link>
                    <Link to="/projects" className={linkStyle('/projects')}>Projects</Link>
                    <Link to="/about" className={linkStyle('/about')}>About</Link>
                    <Link 
                        to="/contact" 
                        className="ml-4 px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-neutral-900/10 hover:shadow-blue-500/30"
                    >
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button 
                    className="md:hidden relative z-[110] p-2 text-neutral-900"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`
                    fixed inset-0 bg-white transition-all duration-300 ease-in-out z-[100] md:hidden
                    ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-x-full'}
                `}>
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        <Link to="/partnerships" className="text-2xl font-black tracking-tighter text-neutral-900">Partnerships</Link>
                        <Link to="/projects" className="text-2xl font-black tracking-tighter text-neutral-900">Projects</Link>
                        <Link to="/about" className="text-2xl font-black tracking-tighter text-neutral-900">About</Link>
                        <Link 
                            to="/contact" 
                            className="mt-4 px-10 py-4 rounded-2xl bg-blue-600 text-white font-black uppercase tracking-widest text-sm shadow-2xl shadow-blue-500/40"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}