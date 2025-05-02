import React from "react";
import { Testimonial } from "./types";

const testimonials: Testimonial[] = [
    {
        id: 1,
        text: "I couldn't be happier with the results I've achieved through working with my personal fitness trainer. Their expertise and guidance have helped me reach my fitness goals faster than I ever thought possible.",
        name: "Jane Smith",
        role: "Fitness Enthusiast, ABC Company",
    },
    {
        id: 2,
        text: "Working with my trainer has been a game-changer. I've gained strength, confidence, and a healthier lifestyle. Highly recommend!",
        name: "John Doe",
        role: "Health Coach, XYZ Corporation",
    },
    {
        id: 3,
        text: "The personalized program and constant encouragement kept me on track. I've never felt better or more motivated.",
        name: "Alice Johnson",
        role: "Marketing Manager, Acme Co.",
    },
    {
        id: 4,
        text: "Fantastic experience! The trainer really listened to my needs and pushed me to new heights. I'm in the best shape of my life.",
        name: "Sarah Lee",
        role: "Software Engineer, TechWorks",
    },
];

const Testimonials: React.FC = () => {
    return (
        <section className="w-full text-white px-6 py-12" id="testimonials">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-5xl text-center font-bold mb-2">
                    Success Stories
                </h2>
                <p className="text-base md:text-lg text-center mb-8">
                    Read what our clients have to say about their fitness
                    transformations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((t) => (
                        <div
                            key={t.id}
                            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 flex flex-col justify-between hover:scale-[1.02] transition-transform"
                        >
                            <p className="text-gray-200 flex-1">{t.text}</p>
                            <div className="flex items-center mt-6">
                                <img
                                    src={`https://i.pravatar.cc/150?u=${t.id}`}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-forestGreen"
                                />
                                <div className="ml-4">
                                    <p className="font-semibold">{t.name}</p>
                                    <p className="text-gray-400 text-sm">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
