import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;


    return (
        <nav className="absolute top-0 w-full z-10 bg-white">
            <div className="flex justify-center items-center p-4 max-w-screen-2xl mx-auto">
                <div className="flex space-x-6 text-xl" style={{ fontSize: "3vmin" }}>
                    <Link
                        to="/"
                        className={`hover:text-blue-600 ${currentPath === '/' ? 'font-bold' : ''}`}
                    >
                        <img
                        src="/org_logo2.png"
                        alt="Home"
                        width = {25}
                        height = {25}
                        className="cursor-pointer mx-4"
                        />
                    </Link>
                    <Link
                        to="/partnerships"
                        className={`hover:text-blue-600 ${currentPath === '/partnerships' ? 'font-bold' : ''}`}
                    >
                        Partnerships
                    </Link>
                    <Link
                        to="/projects"
                        className={`hover:text-blue-600 ${currentPath === '/projects' ? 'font-bold' : ''}`}
                    >
                        Projects
                    </Link>
                    <Link
                        to="/contact"
                        className={`hover:text-blue-600 ${currentPath === '/contact' ? 'font-bold' : ''}`}
                    >
                        Contact Us
                    </Link>
                    <Link
                        to="/about"
                        className={`hover:text-blue-600 ${currentPath === '/about' ? 'font-bold' : ''}`}
                    >
                        About
                    </Link>
                </div>
            </div>
        </nav>
    );
}