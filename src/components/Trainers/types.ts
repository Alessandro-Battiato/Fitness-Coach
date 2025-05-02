export interface TrainerData {
    name: string;
    role: string;
    hours: number;
    imageSrc: string;
}

export interface TrainerCardProps {
    name: string;
    role?: string;
    hours?: number;
    imageSrc: string;
}
