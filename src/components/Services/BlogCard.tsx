import React from "react";
import { BlogCardProps } from "./types";

const BlogCard: React.FC<BlogCardProps> = ({
    date,
    title,
    description,
    tags,
}) => (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl overflow-hidden flex flex-col">
        <img
            src="/assets/blogPostPlaceholder.png"
            alt={title}
            className="w-full h-48 rounded-2xl object-cover"
        />
        <div className="mt-4 flex flex-col flex-grow">
            <p className="text-sm text-gray-400">{date}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-gray-300 flex-grow">{description}</p>
            <div className="mt-8 flex flex-wrap gap-2">
                {tags.map((tag, idx) => (
                    <span
                        key={idx}
                        className="text-xs border border-white/20 text-white px-4 py-1 rounded-lg"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export default BlogCard;
