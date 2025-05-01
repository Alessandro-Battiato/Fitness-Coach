import React, { useMemo } from "react";
import { FeatureCardProps, Variant } from "./types";

const FeatureCard: React.FC<FeatureCardProps> = ({
    variant,
    showIcon = true,
    showImage = true,
    Icon = () => null,
    title,
    subtitle,
    image,
}) => {
    const isVertical = useMemo(() => variant === Variant.Vertical, [variant]);

    const canShowImage = useMemo(
        () => isVertical && !!showImage && !!image,
        [image, isVertical, showImage]
    );
    const canShowIcon = useMemo(() => showIcon && !!Icon, [Icon, showIcon]);

    const directionClass = useMemo(
        () => (isVertical ? "flex-col" : "flex-row"),
        [isVertical]
    );
    const alignClass = useMemo(
        () =>
            !isVertical
                ? "items-center"
                : canShowImage
                ? "items-center"
                : "items-start",
        [canShowImage, isVertical]
    );

    return (
        <div
            className={`
                relative bg-white/10 backdrop-blur-lg flex gap-4 p-6 rounded-2xl h-full border border-white/20
                ${directionClass} ${alignClass}
            `}
        >
            {canShowIcon && (
                <div
                    className={`p-1.5 lg:p-2.5 border border-forestGreen rounded-xl ${
                        isVertical ? "mb-2" : ""
                    }`}
                >
                    <Icon className="text-forestGreen lg:w-7 lg:h-7" />
                </div>
            )}

            <div className={`text-left ${!isVertical ? "my-4" : ""}`}>
                <h3 className="text-md lg:text-lg font-semibold mb-1">
                    {title}
                </h3>
                <p className="text-sm lg:text-base">{subtitle}</p>
            </div>

            {canShowImage && (
                <img
                    className="lg:absolute lg:top-32"
                    alt="runner Image"
                    src="/assets/runnerImg.png"
                    width={250}
                    height={250}
                />
            )}
        </div>
    );
};

export default FeatureCard;
