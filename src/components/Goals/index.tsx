import React, { useMemo } from "react";
import PromoCard from "./PromoCard";
import FeatureCard from "./FeatureCard";
import Carousel from "./Carousel";
import { Flame, Users, Dumbbell, LandPlot, ArrowRight } from "lucide-react";
import { FeatureCardProps, Variant } from "./types";

const features: FeatureCardProps[] = [
    {
        showImage: false,
        variant: Variant.Vertical,
        Icon: Flame,
        title: "Weight Loss Journey",
        subtitle:
            "We make it possible to lose 50 pounds in just 3 months with out personalized training program.",
    },
    {
        showImage: false,
        Icon: Users,
        title: "Mega Community",
        subtitle: "Our Community has 100M+ members.",
        variant: Variant.Horizontal,
    },
    {
        showImage: false,
        Icon: Dumbbell,
        title: "Personal Trainer",
        subtitle: "Professional trainers at your service.",
        variant: Variant.Horizontal,
    },
    {
        showImage: false,
        variant: Variant.Vertical,
        Icon: LandPlot,
        title: "Success Transformation",
        subtitle:
            "You can achieve your dream body with our customized fitness program.",
    },
    {
        showIcon: false,
        variant: Variant.Vertical,
        title: "AI Support Training",
        subtitle:
            "Client X lost 50 pounds in just 3 months with our personalized training program.",
        image: "/assets/runnerImg.png",
    },
];

const Goals: React.FC = () => {
    const columns = useMemo(() => {
        const cols: (typeof features)[] = [];
        for (let i = 0; i < features.length; i += 2) {
            cols.push(features.slice(i, i + 2));
        }
        return cols;
    }, []);

    return (
        <section
            className="py-12 px-6 text-white flex flex-col gap-24 items-center justify-center"
            id="goals"
        >
            <PromoCard
                title="Achieve Your Fitness Goals with Personal Training"
                description="Achieve your fitness goals with customized workout plans and expert support from certified trainers. Whether you're  aiming to lose weight, build muscle, or boost overall health, we provide the guidance and motivation you need. Start your journey today and experience the power of personal training!"
            />

            <p className="text-3xl md:text-5xl text-center font-semibold">
                Unleash your full potential
            </p>

            <div className="flex flex-col lg:flex-row gap-8 max-w-7xl">
                {columns.map((col, colIndex) => (
                    <div key={colIndex} className="flex-1 flex flex-col gap-8">
                        {col.map((feat, i) => (
                            <FeatureCard {...feat} key={i} />
                        ))}
                    </div>
                ))}
            </div>

            <div className="w-full max-w-7xl flex flex-col lg:flex-row gap-8 mt-20 items-center">
                <div className="flex-1">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-4">
                        Achieve Your Fitness Goals with Our Programs
                    </h2>
                    <p className="text-sm md:text-base mb-6">
                        Our fitness programs are designed to help you lose
                        weight, build muscle, and improve cardiovascular health.
                    </p>
                    <button
                        type="button"
                        className="inline-flex items-center gap-2 border mt-6 border-lime-500 
                            hover:bg-lime-500 hover:text-black 
                            transition-colors rounded-lg px-5 py-2
                        "
                    >
                        <span>100 Programs</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
                <div className="flex-1 max-w-xs sm:max-w-lg">
                    <Carousel slideCount={12} />
                </div>
            </div>
        </section>
    );
};

export default Goals;
