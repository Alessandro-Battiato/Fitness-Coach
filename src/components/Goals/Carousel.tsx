import React, { useMemo } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import PlaceholderImage from "../PlaceholderImage";
import { CarouselProps } from "./types";

const Carousel: React.FC<CarouselProps> = ({ slideCount }) => {
    const seeds = useMemo(
        () => Array.from({ length: slideCount }, () => Math.random()),
        [slideCount]
    );

    return (
        <Splide
            aria-label="Programs carousel"
            options={{
                type: "slide",
                rewind: true,
                perPage: 2,
                gap: "1rem",
                autoplay: true,
                interval: 3000,
                drag: true,
                arrows: true,
                pagination: true,
                breakpoints: {
                    425: { perPage: 1 },
                },
            }}
        >
            {seeds.map((seed, idx) => (
                <SplideSlide key={idx}>
                    <PlaceholderImage
                        seed={seed}
                        text={`Program ${idx + 1}`}
                        query="gym"
                        queryKey="gymImage"
                        containerClassName="w-full aspect-square"
                    />
                </SplideSlide>
            ))}
        </Splide>
    );
};

export default Carousel;
