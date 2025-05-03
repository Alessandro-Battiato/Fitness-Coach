import React from "react";
import { ArrowRight } from "lucide-react";

const Newsletter: React.FC = () => (
    <div className="relative overflow-visible bg-white/10 rounded-2xl backdrop-blur-lg border border-white/20 flex flex-col-reverse md:flex-row items-center justify-between p-8">
        <div className="flex flex-col items-start  md:text-left md:w-1/2 z-10 gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Achieve your fitness goals with personalized guidance from
                expert trainers.
            </h2>
            <button className="relative inline-flex items-center bg-elegantZinc text-white font-semibold pl-6 pr-14 py-3 rounded-full hover:bg-hardZinc transition-colors duration-200 group">
                <span>Subscribe Now</span>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 border-2 border-elegantZinc group-hover:border-hardZinc bg-lime-500 rounded-full p-3.5 group-hover:bg-lime-600 transition-colors duration-200">
                    <ArrowRight className="w-4 h-4 text-black" />
                </div>
            </button>
        </div>

        <div className="relative w-full flex justify-center mb-6 lg:mb-0 lg:absolute lg:w-auto lg:right-40 lg:-top-16 overflow-visible">
            <img
                src="/assets/newsletterImage.png"
                alt="Training Expert"
                className="w-52 h-auto rounded-full object-cover shadow-lg"
            />
        </div>
    </div>
);

export default Newsletter;
