import React from "react";

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
    return (
        <footer className="bg-white/10 text-gray-300 py-12 px-6 mt-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <img
                        src="/assets/logo.png"
                        alt="Site logo"
                        width={120}
                        height={75}
                    />

                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Fitness Blog
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-forestGreen transition-colors duration-200"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-forestGreen transition-colors duration-200"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-forestGreen transition-colors duration-200"
                                >
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-forestGreen transition-colors duration-200"
                                >
                                    Membership
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-forestGreen transition-colors duration-200"
                                >
                                    Training Programs
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Nutrition Tips
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-forestGreen transition-colors duration-200"
                                >
                                    Exercise Routines
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-forestGreen transition-colors duration-200"
                                >
                                    Success Stories
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-forestGreen transition-colors duration-200"
                                >
                                    Events
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-forestGreen transition-colors duration-200"
                                >
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-forestGreen transition-colors duration-200"
                                >
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                            Partners
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-forestGreen transition-colors duration-200"
                                >
                                    Affiliate Program
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-forestGreen transition-colors duration-200"
                                >
                                    Become a Trainer
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-forestGreen transition-colors duration-200"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-forestGreen transition-colors duration-200"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-forestGreen transition-colors duration-200"
                                >
                                    Cookie Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <hr className="border-t border-elegantZinc my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-center md:text-left">
                    <p className="mb-4 md:mb-0">
                        &copy; {currentYear} Fitness Blog. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="hover:text-forestGreen transition-colors duration-200"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="#"
                            className="hover:text-forestGreen transition-colors duration-200"
                        >
                            Terms of Service
                        </a>
                        <a
                            href="#"
                            className="hover:text-forestGreen transition-colors duration-200"
                        >
                            Cookie Settings
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
