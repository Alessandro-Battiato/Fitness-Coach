import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import HumanModel from "./HumanModel";
import RotatingModel from "./RotatingModel";
import Dialog from "../Dialog";
import { Loader } from "lucide-react";
import { Html } from "@react-three/drei";

const Hero: React.FC = () => {
    const [selectedZone, setSelectedZone] = useState<string | null>(null);

    return (
        <section className="relative w-full flex items-center justify-center px-6 py-16">
            <div className="max-w-7xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-xl p-8">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
                    <div className="flex-1 flex flex-col items-start justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                            Achieve Your Fitness Goals
                        </h1>
                        <p className="text-gray-300 max-w-lg mb-6">
                            Welcome! We offer personalized training programs to
                            help you stay fit and healthy. Whether you are a
                            beginner or an experienced athlete, we have a plan
                            for you.
                        </p>
                        <button className="bg-forestGreen text-black font-semibold px-8 py-3 rounded-full hover:bg-lime-600 transition-colors duration-200">
                            Get Start Today
                        </button>
                    </div>

                    <div className="flex-1 w-full h-[400px] sm:h-[500px] lg:h-[600px] relative">
                        <Canvas camera={{ position: [0, 0.25, 2], fov: 40 }}>
                            <ambientLight intensity={0.7} />
                            <directionalLight
                                position={[2, 2, 2]}
                                intensity={1}
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
