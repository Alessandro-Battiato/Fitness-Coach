import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PromoCardProps } from "./types";

const PromoCard: React.FC<PromoCardProps> = ({ title, description }) => {
    return (
        <div className="max-w-7xl relative bg-hardZinc text-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 lg:mt-16">
            <button className="absolute top-4 right-4 p-2 bg-hardZinc rounded-full hover:bg-forestGreen transition">
                <ArrowUpRight className="w-5 h-5" />
            </button>

            <div className="flex-1 flex items-center">
                <h2 className="text-2xl md:text-4xl font-bold leading-tight">
                    {title}
                </h2>
            </div>

            <div className="flex-1">
                <p className="text-base md:text-lg leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default PromoCard;
