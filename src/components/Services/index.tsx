import React from "react";
import BlogCard from "./BlogCard";
import Newsletter from "./Newsletter";
import { BlogCardProps } from "./types";

const posts: BlogCardProps[] = [
    {
        date: "Jul 29, 2024",
        title: "How to Build a Stunning Body",
        description:
            "Discover how HIIT can help you burn fat and improve fitness.",
        tags: ["Cardio", "Fitness", "Health"],
    },
    {
        date: "Jul 29, 2024",
        title: "How to Build a Stunning Body",
        description:
            "Discover how HIIT can help you burn fat and improve fitness.",
        tags: ["Cardio", "Fitness", "Health"],
    },
    {
        date: "Jul 29, 2024",
        title: "How to Build a Stunning Body",
        description:
            "Discover how HIIT can help you burn fat and improve fitness.",
        tags: ["Cardio", "Fitness", "Health"],
    },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="px-6 pb-6">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl md:text-4xl font-semibold text-white">
                        My Latest Article
                    </h2>
                    <p className="text-white">
                        See what our clients have to say about their experience
                        working with me and my team.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center lg:flex-row lg:flex-nowrap mt-8 gap-8">
                    {posts.map((post, idx) => (
                        <BlogCard key={idx} {...post} />
                    ))}
                </div>

                <div className="mt-24">
                    <Newsletter />
                </div>
            </div>
        </section>
    );
};

export default Services;
