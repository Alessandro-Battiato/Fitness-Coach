import React from "react";
import PromoCard from "./PromoCard";

const Goals: React.FC = () => {
    return (
        <section
            className="p-12 text-white flex items-center justify-center"
            id="#goals"
        >
            <PromoCard
                title="Achieve Your Fitness Goals with Personal Training"
                description="Achieve your fitness goals with customized workout plans and expert support from certified trainers. Whether you're aiming to lose weight, build muscle, or boost overall health, we provide the guidance and motivation you need. Start your journey today and experience the power of personal training!"
            />
        </section>
    );
};

export default Goals;
