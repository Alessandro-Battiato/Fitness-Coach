import React, { Suspense, useCallback, useMemo, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import HumanModel from "./HumanModel";
import RotatingModel from "./RotatingModel";
import Dialog from "../Dialog";
import { Loader, ArrowRight, RefreshCw } from "lucide-react";
import { Html } from "@react-three/drei";
import PlaceholderImage from "../PlaceholderImage";

const Hero: React.FC = () => {
    const workouts = useMemo(() => ["27 min", "45 min", "35 min"], []);

    const [selectedZone, setSelectedZone] = useState<string | null>(null);
    const [seeds, setSeeds] = useState<number[]>(() =>
        workouts.map(() => Math.random())
    );
    const [spinning, setSpinning] = useState(false);
    const [hintVisible, setHintVisible] = useState(true);

    const lastClick = useRef<number>(0);

    const refreshSeeds = useCallback(
        () => setSeeds(workouts.map(() => Math.random())),
        [workouts]
    );

    const handleRefresh = useCallback(() => {
        const now = Date.now();

        if (now - lastClick.current > 1000) {
            lastClick.current = now;
            setSpinning(true);
            refreshSeeds();
            setTimeout(() => setSpinning(false), 600);
        }
    }, [refreshSeeds]);

    const handleFirstInteraction = useCallback(() => {
        if (hintVisible) {
            setHintVisible(false);
        }
    }, [hintVisible]);

    return (
        <section className="relative w-full flex items-center justify-center px-6 py-12">
            <div className="max-w-7xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-6 md:p-12">
                <div className="flex flex-col-reverse lg:flex-row items-center">
                    <div className="relative flex-1 flex flex-col items-start justify-center">
                        <h1 className="text-4xl text-white xl:text-5xl font-bold leading-tight mb-4">
                            Achieve Your Fitness Goals
                        </h1>
                        <p className="text-gray-300 max-w-lg mb-6">
                            Welcome! We offer personalized training programs to
                            help you stay fit and healthy. Whether you are a
                            beginner or an experienced athlete, we have a plan
                            for you.
                        </p>
                        <button className="relative inline-flex items-center bg-elegantZinc text-white font-semibold pl-6 pr-14 py-3 rounded-full hover:bg-hardZinc transition-colors duration-200 group">
                            <span>Get Started Today</span>
                            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 border-2 border-elegantZinc group-hover:border-hardZinc bg-lime-500 rounded-full p-3.5 group-hover:bg-lime-600 transition-colors duration-200">
                                <ArrowRight className="w-4 h-4 text-black" />
                            </div>
                        </button>
                        <div className="hidden lg:block lg:absolute lg:top-72 lg:z-20">
                            <div className="flex items-center justify-between gap-2 mb-4">
                                <h2 className="text-xl text-white md:text-2xl font-semibold">
                                    Choose Workout and Start Exercising
                                </h2>
                                <button
                                    onClick={handleRefresh}
                                    className="focus:outline-none"
                                >
                                    <RefreshCw
                                        className="w-6 h-6 text-gray-300"
                                        style={{
                                            animation: spinning
                                                ? "spin 0.6s linear 1"
                                                : "none",
                                        }}
                                    />
                                </button>
                            </div>
                            <div className="flex gap-4">
                                {workouts.map((text, idx) => (
                                    <PlaceholderImage
                                        key={idx}
                                        text={text}
                                        seed={seeds[idx]}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        onPointerDown={handleFirstInteraction}
                        className="relative w-full md:max-w-lg lg:max-w-xl h-[600px]"
                    >
                        <Canvas camera={{ position: [0, 0, 2], fov: 45 }}>
                            <ambientLight intensity={0.7} />
                            <directionalLight
                                position={[2, 2, 2]}
                                intensity={2}
                            />

                            <Suspense
                                fallback={
                                    <Html center>
                                        <Loader className="animate-spin w-10 h-10 text-forestGreen" />
                                    </Html>
                                }
                            >
                                <RotatingModel>
                                    <HumanModel onSelect={setSelectedZone} />
                                </RotatingModel>
                            </Suspense>
                        </Canvas>
                        {hintVisible && (
                            <div
                                role="status"
                                aria-live="polite"
                                className="absolute bottom-4 lg:bottom-0 left-1/2 transform -translate-x-1/2 bg-black/60 text-white text-sm px-3 py-2 rounded-lg"
                            >
                                Drag (or swipe) to rotate; click (or tap) on any
                                muscle group for more info
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Dialog
                open={Boolean(selectedZone)}
                onOpenChange={(open) => !open && setSelectedZone(null)}
                muscleZone={selectedZone!}
            />
        </section>
    );
};

export default Hero;
