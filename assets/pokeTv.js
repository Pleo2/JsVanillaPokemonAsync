const SEARCH = "pokemon";

const URL_API_TMDB = "https://api.themoviedb.org/3";
const API_KEY_TMDB = "2492785d913953d3872744cbd439746e";
const RUTA_MOVIE_DETAILS = (id) => `/movie/${id}?api_key=`;
const RUTA_MOVIE_TRAILLER = (id) => `/movie/${id}/videos?api_key=`;
const RUTA_MOVIE_WATCH = (id) => `/movie/${id}/watch/providers?api_key=`;
const RUTA_MOVIE_RECOMMENDATIONS = (id) =>
  `/movie/${id}/recommendations?api_key=`;
const RUTA_SEARCH = "/search/movie?api_key=";
const QUERY_SEARCH = `&query=${SEARCH}`;
const LANGUAGE_SEARCH = "&language=en-US&region=US" ;
const PAGE_SEARCH = (page) => `&page=${page}`;
 
const RUTA_URL_IMG = "https://image.tmdb.org/t/p/w500/";
const RUTA_URL_IMG_ORIGINAL_QUALITY = "https://image.tmdb.org/t/p/original/";

// -------------------------------------------------------------------------//
const URL_API_SEARCH = (page) =>
  URL_API_TMDB + RUTA_SEARCH + API_KEY_TMDB + QUERY_SEARCH + LANGUAGE_SEARCH + PAGE_SEARCH(page);
const URL_API_MOVIE_DETAILS = (id) =>
  URL_API_TMDB + RUTA_MOVIE_DETAILS(id) + API_KEY_TMDB;
const URL_API_MOVIE_TRAILLERS = (id) =>
  URL_API_TMDB + RUTA_MOVIE_TRAILLER(id) + API_KEY_TMDB;
const URL_API_MOVIE_WATCH = (id) =>
  URL_API_TMDB + RUTA_MOVIE_WATCH(id) + API_KEY_TMDB;
const URL_API_MOVIE_RECOMMENDATIONS = (id) =>
  URL_API_TMDB + RUTA_MOVIE_RECOMMENDATIONS(id) + API_KEY_TMDB;

const fetchDataMovies = async (urlApi) => {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
};

const getDataTmdb = async (urlApi) => {
  const trending = await fetchDataMovies(urlApi);
  return trending;
};

const showMoviesAll = async (page1, page2, page3) => {
  const result1 = await getDataTmdb(URL_API_SEARCH(page1));
  const result2 = await getDataTmdb(URL_API_SEARCH(page2));

  const allResult = [result1.results, result2.results].flat();
  const filterArr = filterDuplicateObj(allResult);
  const sortAllResult = sortMoviesScore(filterArr)
  const bestMovies = filterMoviesWithError(sortAllResult);
  createPoster(listMovies, bestMovies, {
    lazyLoader: true,
    clean: true,
  });
};

(async () => {
  try {
    showMoviesAll(1,2);
  } catch (error) {
    console.log(error);
  }
})();