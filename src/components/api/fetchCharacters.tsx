import { Character } from "../../types/Characters";

const api = "https://rickandmortyapi.com/api";

interface FetchResults {
  characters: Character[];     // array of char objects returning from API call
  nextPage: string | null;     // URL string of next page or null if no more pages
}

// fetch characters from Rick and Morty API with optional paging and filters

export const fetchCharacters = async(page = 1, search = '', status = ''): Promise<FetchResults> => {
    let url = `${api}/character?page=${page}`;          // Base URL
  
    const params = new URLSearchParams();               // URLSearchParams to conditionally append name and status filters
     if (search) params.append('name', search);
     if (status) params.append('status', status);
 
    if (params.toString()) {                            // if filters exist, append them to url
      url += `&${params.toString()}`;
    }

    const response = await fetch(url);                  // fetch data from API 
     if (!response.ok) {                                // if error happens return empty result and null page
    return { characters: [], nextPage: null};
    }
    const data = await response.json();                 // parse json respnse


    return {                                      
        characters: data.results.map((character: any) => ({   // mapping API char data
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