import React from "react";
import { PlaceholderImageProps } from "./types";
import { Loader } from "lucide-react";
import { usePlaceholderImage } from "../../hooks/usePlaceholderImage";

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
    text,
    seed,
    query,
    queryKey,
    containerClassName = "aspect-square w-24 lg:w-36",
    imgClassName = "w-full h-full object-cover",
}) => {
    const {
        data: src,
        isLoading,
        isError,
    } = usePlaceholderImage(seed, query, queryKey);

    const baseWrapperStyles =
        "bg-hardZinc p-2 rounded-lg border border-zinc-800 hover:border-forestGreen transition-colors";

    const outerDivClasses = `
        relative ${baseWrapperStyles} ${containerClassName}
    `
        .replace(/\s+/g, " ")
        .trim();

    return (
        <div className={outerDivClasses}>
            <div className="relative w-full h-full rounded-md overflow-hidden bg-black/20">
                {isLoading ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-zinc-700">
                        <Loader className="animate-spin w-8 h-8 text-forestGreen" />
                    </div>
                ) : isError || !src ? (
                    <div className="flex items-center justify-center h-full bg-red-900/50 text-white text-xs px-2 text-center">
                        Error loading image
                    </div>
                ) : (
                    <img src={src} alt={text} className={imgClassName} />
                )}
                {!isError && (
                    <span className="absolute bottom-1 left-1 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded">
                        {text}
                    </span>
                )}
            </div>
        </div>
    );
};

export default PlaceholderImage;
