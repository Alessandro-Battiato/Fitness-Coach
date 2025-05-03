import React from "react";
import TrainerCard from "./TrainerCard";
import { TrainerData } from "./types";

const trainers: TrainerData[] = [
    {
        name: "Refi Saf",
        role: "Cardio Trainer",
        hours: 900,
        imageSrc: "/assets/firstTrainer.png",
    },
    {
        name: "Amir Abbas",
        role: "Cardio Trainer",
        hours: 900,
        imageSrc: "/assets/secondTrainer.png",
    },
    {
        name: "Alex Siththam",
        role: "Cardio Trainer",
        hours: 900,
        imageSrc: "/assets/thirdTrainer.png",
    },
];

const Trainers: React.FC = () => {
    return (
        <section
            className="min-h-screen flex flex-col items-center justify-center px-6 text-white"
            id="trainers"
        >
            <h2 className="text-3xl md:text-5xl text-center font-semibold mb-14">
                Meet Our Trainers
            </h2>

            <div className="max-w-7xl flex flex-col lg:flex-row gap-8 mx-auto">
                {trainers.map((t) => (
                    <TrainerCard
                        key={t.name}
                        name={t.name}
                        role={t.role}
                        hours={t.hours}
                        imageSrc={t.imageSrc}
                    />
                ))}
            </div>
        </section>
    );
};

export default Trainers;
