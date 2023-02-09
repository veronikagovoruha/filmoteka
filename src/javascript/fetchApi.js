import axios from 'axios';

export class TheMovie{
    #BASE_URL = 'https://api.themoviedb.org';
    #API_KEY = '174088f8b022edeebba64c50a0d47a62';

    // fetchMovie(){
    //     return axios.get(`${this.#BASE_URL}/3/movie/550?api_key=${this.#API_KEY}`
    //     // , {
    //         // params:{
    //         //     api_key: this.#API_KEY,
    //         // }
    //     // }
    //     )
    // }

    fetchMovieSearch(){
        return axios.get(`${this.#BASE_URL}/3/search/movie?api_key=${this.#API_KEY}&query=${this.searchQuery}`)
    }
}