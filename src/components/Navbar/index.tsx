import React, { useCallback, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    return (
        <>
            <nav className="flex items-center justify-between px-4 md:px-12 xl:px-32 py-4">
                <img
                    src="/assets/logo.png"
                    alt="Site logo"
                    width={120}
                    height={75}
                />

                <div className="hidden lg:flex items-center space-x-8 text-white">
                    <a
                        href="#journey"
                        className="hover:text-forestGreen transition-colors duration-200"
                    >
                        Journey
                    </a>
                    <a
                        href="#trainers"
                        className="hover:text-forestGreen transition-colors duration-200"
                    >
                        Trainers
                    </a>
                    <a
                        href="#testimonials"
                        className="hover:text-forestGreen transition-colors duration-200"
                    >
                        Testimonials
                    </a>
                    <a
                        href="#services"
                        className="hover:text-forestGreen transition-colors duration-200"
                    >
                        Services
                    </a>

                    <button className="border border-forestGreen text-forestGreen px-5 py-2 rounded-full hover:bg-forestGreen hover:text-gray-900 transition-colors duration-200">
                        Get In Touch
                    </button>
                </div>

                <div className="lg:hidden flex items-center">
                    <button
                        type="button"
                        onClick={toggleMenu}
                        className="text-forestGreen focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        <Menu size={32} />
                    </button>
                </div>
            </nav>

            <div
                className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center space-y-8 transition-opacity duration-300 ease-in-out 
          ${
              isOpen
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
          }`}
            >
                <button
                    onClick={toggleMenu}
                    className="absolute top-6 right-6 text-white focus:outline-none"
                    aria-label="Close menu"
                >
                    <X size={32} />
                </button>

                <a
                    href="#journey"
                    onClick={toggleMenu}
                    className="text-white text-2xl hover:text-forestGreen transition-colors duration-200"
                >
                    Journey
                </a>
                <a
                    href="#trainers"
                    onClick={toggleMenu}
                    className="text-white text-2xl hover:text-forestGreen transition-colors duration-200"
                >
                    Trainers
                </a>
                <a
                    href="#testimonials"
                    onClick={toggleMenu}
                    className="text-white text-2xl hover:text-forestGreen transition-colors duration-200"
                >
                    Testimonials
                </a>
                <a
                    href="#services"
                    onClick={toggleMenu}
                    className="text-white text-2xl hover:text-forestGreen transition-colors duration-200"
                >
                    Services
                </a>
                <button
                    onClick={toggleMenu}
                    className="bg-forestGreen text-gray-900 font-semibold px-8 py-3 rounded-full"
                >
                    Get In Touch
                </button>
            </div>
        </>
    );
};

export default Navbar;
