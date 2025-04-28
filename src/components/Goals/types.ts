import { LucideProps } from "lucide-react";
import { ReactNode } from "react";

export interface PromoCardProps {
    title: string;
    description: string;
}

export enum Variant {
    Vertical = "vertical",
    Horizontal = "horizontal",
}

export interface FeatureCardProps {
    variant: Variant;
    showIcon?: boolean;
    showImage?: boolean;
    Icon?: React.ComponentType<LucideProps>;
    title: string;
    subtitle: string;
    image?: ReactNode;
}
