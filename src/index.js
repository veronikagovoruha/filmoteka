import { TheMovie } from "./javascript/fetchApi";

const searchInputEl = document.querySelector('.header__input');
const searchBtnEl = document.querySelector('.header__form');

const theMovie = new TheMovie();

// const onTrending = () => {
//     theMovie.fetchMovie(theMovie).then(
//         ({data} = {}) =>{
//             console.log(data);
//         })
//         .catch(err => {
//             console.log(err);
//         })
// }

const onSearchInput = (event) => {
    event.preventDefault();

    theMovie.searchQuery = event.currentTarget.elements['inputSearch'].value;

    theMovie.fetchMovieSearch().then(
        ({data} = {}) =>{
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
}

searchBtnEl.addEventListener('submit', onSearchInput);
