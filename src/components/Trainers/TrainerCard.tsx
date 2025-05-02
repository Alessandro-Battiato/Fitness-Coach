import { TrainerCardProps } from "./types";

const TrainerCard: React.FC<TrainerCardProps> = ({
    name,
    role = "Trainer",
    hours = 0,
    imageSrc,
}) => (
    <div className="relative overflow-hidden bg-hardZinc text-white group">
        <img
            src={imageSrc}
            alt={name}
            className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105"
        />

        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-6">
            <h3 className="text-2xl font-semibold">{name}</h3>
            <p className="text-sm opacity-75">
                {role} || More than {hours}hr
            </p>
        </div>
    </div>
);

export default TrainerCard;
