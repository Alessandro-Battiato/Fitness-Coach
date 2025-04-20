import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axios";

export interface ExerciseInfo {
    instructions: string;
    equipment: string;
    gifUrl: string;
}

export const useExercise = (
    muscleZone: string,
    randomId: number,
    enabled: boolean
) =>
    useQuery<ExerciseInfo>({
        queryKey: ["exercise", muscleZone, randomId],
        enabled,
        queryFn: async () => {
            const { data } = await api.get<ExerciseInfo[]>(
                `/exercises/bodyPart/${encodeURIComponent(
                    muscleZone.toLowerCase()
                )}`
            );

            if (!data.length) throw new Error("Could not find any exercises");
            const randomIndex = Math.floor(Math.random() * data.length);
            return data[randomIndex];
        },
        staleTime: 1000 * 60 * 5,
    });
