import React, { useCallback, useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const handleScroll = useCallback(() => {
        setVisible(window.scrollY > 300);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Go back up"
            className={`
                fixed bottom-4 right-4 p-3 rounded-full shadow-lg
                bg-hardZinc text-forestGreen
                transition-opacity duration-500
                ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
            `}
        >
            <ArrowUp className="w-5 h-5" />
        </button>
    );
};

export default BackToTopButton;
