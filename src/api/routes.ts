export const CatsByBreedRoute = (catBreedId: string, limit: number) => `https://api.thecatapi.com/v1/images/search?breed_ids=${catBreedId}&limit=${limit}`;