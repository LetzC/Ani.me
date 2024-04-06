import animeDatabase from '../../../database-animes.json';

export interface AnimeInterface {
  id: number;
  title: string;
  studio: string;
  gender: string;
  synopsis: string;
  urlImage: string;
  episodes?: number;
  isNew?: boolean;
}

const animeService = {
  getLowAnimeTitle: (animeId: number) => {
    // Encontrando o anime correspondente no animeDatabase
    const anime = animeDatabase.find((anime: AnimeInterface) => anime.id === animeId);

    if (anime) {
      // Substituindo o espaço das palavras por - e transformando texto em minúsculo
      const animeTitle = anime.title.replace(/\s+/g, "-").toLowerCase();
      return animeTitle;
    } else {
      throw new Error('Anime não encontrado'); // Lança um erro caso o anime não seja encontrado
    }
  },

  getRelatedGenres: (animeGender: string, animeId: number) => {
    const filteredAnimes = animeDatabase.filter((anime) => {
      const genders = anime.gender.split(", ");
      return genders.some((gender) => animeGender.includes(gender)) && anime.id !== animeId;
    });

    return filteredAnimes;
  },

  getRelatedAnimesSearch: (search: string) => {
    const formattedSearch = search.replace(/[-\s]+/g, '').toLocaleLowerCase(); // Remove hífens e espaços e converte para minúsculas

    const filteredAnimes = animeDatabase.filter((anime) => {
      const titleWithoutHyphens = anime.title.replace(/[-\s]+/g, ''); // Remove hífens e espaços do título
      return titleWithoutHyphens.toLocaleLowerCase().includes(formattedSearch);
    });

    return filteredAnimes;
  },

  getUniqueGenres: () => {
    let genres: string[] = [];

    animeDatabase.forEach((anime) => {
      const animeGenres = anime.gender.split(',').map(genre => genre.trim());
      genres = genres.concat(animeGenres);
    });

    // Remove gêneros duplicados
    genres = genres.filter((genre, index) => genres.indexOf(genre) === index);

    return genres;
  },

  getAnimesByGender: (animeGender: string) => {
    return animeDatabase.filter((anime) => {
      const genders = anime.gender.split(", ");
      return genders.some((gender) => animeGender.includes(gender));
    });
  },
};

export default animeService;