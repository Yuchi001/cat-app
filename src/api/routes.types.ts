export type CatBreed = { breedId: string, breedName: string };

export const CatBreeds: CatBreed[] = [
    { breedId: 'abys', breedName: 'Abyssinian' },
    { breedId: 'aege', breedName: 'Aegean' },
    { breedId: 'abob', breedName: 'American Bobtail' },
    { breedId: 'acur', breedName: 'American Curl' },
    { breedId: 'bomb', breedName: 'Bombay' },
    { breedId: 'chee', breedName: 'Cheetoh' },
    { breedId: 'jbob', breedName: 'Japanese Bobtail' },
    { breedId: 'orie', breedName: 'Oriental' },
    { breedId: 'sava', breedName: 'Savannah' },
]

export const GetCatBreedName = (breedId: string): string => CatBreeds.find(c => c.breedId === breedId)?.breedName || '';
export const GetCatBreedId = (breedName: string): string => CatBreeds.find(c => c.breedName === breedName)?.breedId || '';