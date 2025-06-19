import { Character } from "../../types/Characters";

const api = "https://rickandmortyapi.com/api";

interface FetchResults {
  characters: Character[];
  nextPage: string | null;
}

export const fetchCharacters = async(page = 1, search = '', status = ''): Promise<FetchResults> => {
    let url = `${api}/character?page=${page}`;
  
    const params = new URLSearchParams();
     if (search) params.append('name', search);
     if (status) params.append('status', status);

    if (params.toString()) {
      url += `&${params.toString()}`;
    }

    const response = await fetch(url);
     if (!response.ok) {
    return { characters: [], nextPage: null};
    }
    const data = await response.json();


    return {
        characters: data.results.map((character: any) => ({
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          gender: character.gender,
          location: character.location.name,
          image: character.image
        })),
        nextPage: data.info.next || null,
  };
};