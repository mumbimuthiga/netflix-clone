const API_KEY="bd848c5b3e336db9ba95e20ed323ef1d";

const requests={
    fetchtrending:`/trending/all/week?api_key=${API_KEY}&languages=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
//const requests=`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
//https://api.themoviedb.org/3//discover/movie?api_key=${API_KEY}$with_genres=28
export default requests;