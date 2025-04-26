import React from "react";
import { PlaceholderImageProps } from "./types";
import { Loader } from "lucide-react";
import { usePlaceholderImage } from "../../hooks/usePlaceholderImage";

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ text, seed }) => {
    const { data: src, isLoading, isError } = usePlaceholderImage(seed, true);

    return (
        <div className="relative aspect-square w-24 lg:w-32 rounded-lg overflow-hidden">
            {isLoading ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                    <Loader className="animate-spin w-8 h-8 text-forestGreen" />
                </div>
            ) : isError || !src ? (
                <div className="flex items-center justify-center h-full bg-gray-800 text-white text-xs">
                    Error loading image
                </div>
            ) : (
                <img
                    src={src}
                    alt={text}
                    className="w-full h-full object-cover"
                />
            )}

            <span className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-1.5 py-0.5 rounded">
                {text}
            </span>
        </div>
    );
};

export default PlaceholderImage;
