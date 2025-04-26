import { useQuery } from "@tanstack/react-query";
import { pexelsApi } from "../lib/pexels";
import type { AxiosResponse } from "axios";

interface PexelsPhoto {
    src: { medium: string };
}

interface PexelsSearchResponse {
    photos: PexelsPhoto[];
}

export const usePlaceholderImage = (
    randomId: number,
    enabled: boolean = true
) =>
    useQuery<string>({
        queryKey: ["fitnessImage", randomId],
        enabled,
        queryFn: async () => {
            const { data }: AxiosResponse<PexelsSearchResponse> =
                await pexelsApi.get(`/search`, {
                    params: {
                        query: "fitness",
                        orientation: "square",
                        per_page: 20,
                    },
                });

            if (!data.photos.length) {
                throw new Error("No fitness images found");
            }
            const idx = Math.floor(randomId * data.photos.length);
            return data.photos[idx].src.medium;
        },
        staleTime: 1000 * 60 * 5,
    });
