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
    query: string = "fitness",
    queryKey: string = "fitnessImage"
) =>
    useQuery<string>({
        queryKey: [queryKey, randomId],
        enabled: true,
        queryFn: async () => {
            const { data }: AxiosResponse<PexelsSearchResponse> =
                await pexelsApi.get(`/search`, {
                    params: {
                        query,
                        orientation: "square",
                        per_page: 20,
                    },
                });

            if (!data.photos.length) {
                throw new Error(`No ${query} images found`);
            }
            const idx = Math.floor(randomId * data.photos.length);
            return data.photos[idx].src.medium;
        },
        staleTime: 1000 * 60 * 5,
    });
