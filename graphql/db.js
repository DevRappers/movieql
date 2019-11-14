// export const people = [
//     {
//         id: "0",
//         name: "DevRappers",
//         age: 22,
//         gender: "male"
//     },
//     {
//         id: "1",
//         name: "Japan Guy",
//         age: 18,
//         gender: "male"
//     },
//     {
//         id: "2",
//         name: "asapz",
//         age: 19,
//         gender: "male"
//     },
//     {
//         id: "3",
//         name: "Dayun",
//         age: 22,
//         gender: "female"
//     },
//     {
//         id: "4",
//         name: "testUser",
//         age: 25,
//         gender: "male"
//     },
//     {
//         id: "5",
//         name: "flynn",
//         age: 18,
//         gender: "male"
//     },
// ];

// export const getById = id => {
//     const filteredPeople = people.filter(person => person.id === String(id));
//     return filteredPeople[0]
// }

// let movies = [
//     {
//         id: 0,
//         name: "Star Wars - The new one",
//         score: 0.1
//     },
//     {
//         id: 1,
//         name: "Avengers - The new one",
//         score: 8
//     },
//     {
//         id: 2,
//         name: "The Godfather I",
//         score: 99
//     },
//     {
//         id: 3,
//         name: "Logan",
//         score: 2
//     }
// ]

// export const getMovies = () => movies;

// export const getById = id =>{
//     const filteredMovies = movies.filter(movie => movie.id === id);
//     return filteredMovies[0];
// };

// export const deleteMovie = (id) => {
//     const cleanedMovies = movies.filter(movie => movie.id !== id);
//     if(movies.length > cleanedMovies.length){
//         movies = cleanedMovies;
//         return true;
//     }else{
//         return false;
//     }
// }

// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: `${movies.length+1}`,
//         name,
//         score
//     };
//     movies.push(newMovie);
//     return newMovie;
// }
import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
//    return fetch(`${API_URL}`)
//           .then(res => res.json())
//           .then(json => json.data.movies);
    let REQUEST_URL = API_URL;
    if(limit > 0){
        REQUEST_URL += `limit=${limit}`;
    }
    if(rating > 0){
        REQUEST_URL += `&minimum_rating=${rating}`;
    }
    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
}