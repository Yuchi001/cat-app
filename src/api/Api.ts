import {CatsByBreedRoute} from "./routes";
import {Cat} from "./Models/Cat";

const auth_key: string = 'live_f94fdmVltfSjrhVBsqjuSyfqtBMCvPCegEyTC1KAitLBvUwMgGkJrv7elxJS34Nu';

const withKey = (path: string) => `${path}&api_key=${auth_key}`;

export const GetCatsByBreed = async (breedId: string, limit: number): Promise<Cat[]> => {
    try {
        const pathWithKey = withKey(CatsByBreedRoute(breedId, limit));

        const res = await fetch(pathWithKey);

        if (!res.ok) return [];

        return await res.json();
    } catch (error) {
        return [];
    }
}