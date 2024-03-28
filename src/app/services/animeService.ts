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
  }
};

export default animeService;