import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;

    const linkStyle = (path) => 
        `transition-colors duration-200 ${
            currentPath === path 
            ? 'text-blue-600 font-semibold' 
            : 'text-neutral-600 hover:text-blue-600'
        }`;

    return (
        <nav className="absolute top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
                        <img
                            src="/icons/medtech_logo_blue.png"
                            alt="MedTech Logo"
                            className="w-7 h-7 object-contain brightness-0 invert" // Makes logo white to pop against blue
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-neutral-900">
                        MedTech<span className="text-blue-600">@</span>UCI
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/partnerships" className={linkStyle('/partnerships')}>
                        Partnerships
                    </Link>
                    <Link to="/projects" className={linkStyle('/projects')}>
                        Projects
                    </Link>
                    <Link to="/about" className={linkStyle('/about')}>
                        About
                    </Link>
                    
                    {/* Action Button */}
                    <Link 
                        to="/contact" 
                        className="ml-4 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 active:scale-95"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </nav>
    );
}