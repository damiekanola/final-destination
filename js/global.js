// import { redirectToMovieDetailsPage } from './detail.js';
// const API_KEY = "api_key=3e06ebba910f62ff6a06a3976a508806";
// const BASE_URL = "https://api.themoviedb.org/3/";
// const API_URL = BASE_URL + "trending/movie/day?language=en-US&" + API_KEY;
// const IMG_URL = 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg';


// getMovies(API_URL);

// function getMovies(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {

//       showMovies(data.results);
//     });
// }

// function showMovies(data) {

//     // mainEl.innerHTML='';
//     const mainEl = document.getElementById('trendingcontainer');


//     data.forEach((movie) => {
//     const {title, poster_path} = movie;
//     const movieEl = document.createElement("div");
//     movieEl.classList.add("trendingmovie");
//     movieEl.innerHTML = `
//     <div class="w-full rounded-2xl overflow-hidden">
//         <img src="${IMG_URL+poster_path}" alt="">
//      </div>
//     <p class="text-white">${title}</p>
//     `

//     mainEl.appendChild(movieEl);
//   });

// }


// // function fetchMovies() {
// //     const API_KEY = "api_key=3e06ebba910f62ff6a06a3976a508806";
// //     const BASE_URL = "https://api.themoviedb.org/3/";
// //     const API_URL = BASE_URL + "trending/movie/day?language=en-US&" + API_KEY;
// //     const IMG_URL = 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg';

// //     // const apiKey = 'YOUR_API_KEY'; // Replace with your TMDb API key
// //     // const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;


// //     fetch(API_URL)
// //         .then(response => response.json())
// //         .then(data => {
// //             const movies = data.results;
// //             const moviesContainer = document.getElementById('trendingcontainer');

// //             movies.forEach(movie => {
// //                 const movieElement = document.createElement('div');
// //                 movieElement.innerHTML =`<div class="w-full rounded-2xl overflow-hidden">
// //                                       <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="">
// //                                       </div>
// //                                       <p class="text-white">${movie.title}</p>
// //                                     `;
// //                 moviesContainer.appendChild(movieElement);
// //             });
// //         })

// //         .catch(error => {
// //             console.log('Error:', error);
// //         });
// // }

// // // Call the function to fetch and display movies
// // fetchMovies();


function fetchTrendingMovie() {
    const apiKey = '3e06ebba910f62ff6a06a3976a508806'; // Replace with your TMDb API key
    const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const trendingMovie = data.results[9];
            const trendingMovieContainer = document.getElementById('1trending');
            const imageUrl = `https://image.tmdb.org/t/p/original${trendingMovie.backdrop_path}`

            trendingMovieContainer.innerHTML = '';




            const releaseYear = new Date(trendingMovie.release_date).getFullYear();

            const movieElement = document.createElement('div');
            // movieElement.classList.add = "relative"
            movieElement.innerHTML = `<div class= "maintrenidng">
            <div class="rounded-3xl overflow-hidden w-full -z-10">
            <img src="https://image.tmdb.org/t/p/original${trendingMovie.backdrop_path}" alt="${trendingMovie.title}" class="w-full ">
            </div>

            <div class="banner-content max-[1158px]:">
                <div >
                    <h1 class="heading text-black text-3xl font-bold tracking-wide">${trendingMovie.title}
                    </h1>
                    <p class="year text-black ">${releaseYear}</p>
                    <p class="summary text-black font-medium py-3 text-lg ">${trendingMovie.overview}</p>
                </div>
                <div class="hover: outline-white outlinesoli ">
                    <a href="./detail.html"
                        class="no-underline font-semibold flex items-center w-fit gap-3 p-4 rounded-md bg-red-600">
                        <img src="/play_circle.png" alt="" width="24" height="24">
                        <span class="text-white">Watch Now</span>
                    </a>
                </div>
            </div>
            </div>
            `;

            trendingMovieContainer.appendChild(movieElement);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

// Function to fetch movies from TMDb API
function fetchMovies() {
    const apiKey = '3e06ebba910f62ff6a06a3976a508806'; // Replace with your TMDb API key
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const movies = data.results;
            const moviesContainer = document.getElementById('trendingcontainer');

            moviesContainer.innerHTML = '';

            movies.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.innerHTML = `<div class="imagecont w-85">
                <div class="imagecont rounded-2xl overflow-hidden w-85 h-100 transition duration-300 ease-out hover:-translate-y-1 ">
                        <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" alt="${movie.title}" class="h-full object-cover w-full ">
                    </div>
                    <p class="text-black text-ellipsis overflow-hidden text-center text-base font-medium p-2">${movie.title}</p>
                    </div>
                    `;

                moviesContainer.appendChild(movieElement);
            });
        })
        .catch(error => {
            console.log('Error:', error);
        });
}


// function fetchGenre(genreId) {
//     const apiKey = '3e06ebba910f62ff6a06a3976a508806'; // Replace with your TMDb API key
//     const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             const movies = data.results;
//             const moviesContainer = document.getElementById(genreId);

//             moviesContainer.innerHTML = '';

//             movies.forEach(movie => {
//                 const movieElement = document.createElement('div');
//                 movieElement.innerHTML = `<div class="w-full rounded-2xl overflow-hidden w-85 h-auto">
//                         <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="h-full object-cover w-full">
//                     </div>
//                     <p class="text-white text-ellipsis text-center text-base font-medium p-2 overflow-hidden w-85">${movie.title}</p>`;

//                 moviesContainer.appendChild(movieElement);
//             });
//         })
//         .catch(error => {
//             console.log('Error:', error);
//         });


// }

function fetchGenres(...genreIds) {
    const apiKey = '3e06ebba910f62ff6a06a3976a508806'; // Replace with your TMDb API key

    genreIds.forEach(genreId => {
        const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const movies = data.results;
                const moviesContainer = document.getElementById(genreId);

                moviesContainer.innerHTML = '';

                movies.forEach(movie => {
                    const movieElement = document.createElement('div');
                    movieElement.innerHTML = `<div class="imagecont w-85">
                    <div class="imagecont rounded-2xl overflow-hidden w-85 h-100 transition duration-300 ease-out hover:-translate-y-1 ">
                            <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" alt="${movie.title}" class="h-full object-cover w-full ">
                        </div>
                        <p class="text-black text-ellipsis overflow-hidden text-center text-base font-medium p-2">${movie.title}</p>
                        </div>
  `;

                    movieElement.addEventListener('click', () => {
                        const movieId = movie.id;
                        // Handle movie click even
                        window.location.href = `detail.html?id=${movieId}`;
                    });

                    moviesContainer.appendChild(movieElement);
                });
            })
            .catch(error => {
                console.log('Error:', error);
            });
    });
}

// Example usage



// function fetchGenre(...genreIds) {
//     const apiKey = '3e06ebba910f62ff6a06a3976a508806'; // Replace with your TMDb API key
//     const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}`;

//     genreIds.forEach((genreId) => {



//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             const movies = data.results;
//             const moviesContainer = document.getElementById(genreId);

//             moviesContainer.innerHTML = '';

//             movies.forEach(movie => {
//                 const movieElement = document.createElement('div');
//                 movieElement.innerHTML = `<div class="w-full rounded-2xl overflow-hidden w-85 h-auto">
//                         <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="h-full object-cover w-full">
//                     </div>
//                     <p class="text-white text-ellipsis text-center text-base font-medium p-2 overflow-hidden w-85">${movie.title}</p>`;

//                 moviesContainer.appendChild(movieElement);
//             });
//         })
//         .catch(error => {
//             console.log('Error:', error);
//         });

//         });


// }

// Call the function to fetch and display movies

// function fetchMovieSearch() {
//     const apiKey = '3e06ebba910f62ff6a06a3976a508806'; // Replace with your TMDb API key
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}`;

//     fetch(url+'&query='+searchTerm)
//         .then(response => response.json())
//         .then(data => {
//             const movies = data.results;
//             const 
//             const moviesContainer = document.getElementById('wholemoviesection');

//             moviesContainer.innerHTML = '';

//             movies.forEach(movie => {
//                 const movieElement = document.createElement('div');
//                 movieElement.classList.add= "flex", "flex-wrap", "gap-4", "w-full", "justify-between"
//                 movieElement.innerHTML = `<div class=" rounded-2xl overflow-hidden w-85 h-100 transition duration-300 ease-out hover:-translate-y-1">
//                         <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" alt="${movie.title}" class="h-full object-cover w-full ">
//                     </div>
//                     <p class="text-black text-ellipsis overflow-hidden text-center text-base font-medium p-2">${movie.title}</p>`;

//                 moviesContainer.appendChild(movieElement);
//             });
//         })
//         .catch(error => {
//             console.log('Error:', error);
//         });
// }


fetchMovies();
fetchTrendingMovie();
fetchGenres(27, 16, 10762, 14, 18, 28, 35);

const form = document.getElementById('form');
const input = document.getElementById('search');
const resultsDiv = document.getElementById('wholemoviesection');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    const query = input.value;
    searchMovies(query);
});

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const query = input.value;
        searchMovies(query);
    }
});

function searchMovies(query) {
    const apiKey = '3e06ebba910f62ff6a06a3976a508806'
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const movies = data.results;
            displayMovies(movies);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


function displayMovies(movies) {
    resultsDiv.innerHTML = ''; // Clear previous results
    resultsDiv.classList.add("searchmovies")

    if (movies.length === 0) {
        resultsDiv.textContent = 'No movies found.';
        return;
    }

    movies.forEach(movie => {
        const movieCard = document.createElement('div');


        movieCard.innerHTML = ` <div class="w-[280px]" >
        <div class="imagecont rounded-2xl overflow-hidden w-full h-100 transition duration-300 ease-out hover:-translate-y-1 ">
        <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" alt="${movie.title}" class="h-full object-cover w-full ">
        </div>
        <p class="text-black text-ellipsis overflow-hidden text-center text-base font-medium p-2">${movie.title}</p>
        </div>
        `

        movieCard.addEventListener('click', () => {
            const movieId = movie.id;
            // Handle movie click even
            window.location.href = `detail.html?id=${movieId}`;
        });

        resultsDiv.appendChild(movieCard);
    });
}



// function displayResults() {
//   resultsDiv.innerHTML = ''; // Clear previous results

//   if (results.length === 0) {
//     resultsDiv.innerHTML = '<p>No results found.</p>';
//     return;
//   }

//   // Iterate over the results and display them
//   results.forEach(movie => {
//     // const movieTitle = movie.title;
//     // const movieOverview = movie.overview;

//     const movieDiv = document.createElement('div');
//     movieDiv.classList.add = 'flex', 'flex-wrap', 'w-full', 'gap-4', 'justify-between'
//     movieDiv.innerHTML = `<div class="w-80 pb-3">
//     <div class="w-full rounded-2xl overflow-hidden">
//         <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" alt="">
//     </div>
//     <p class="text-black text-center text-ellipsis overflow-hidden">${movie.title}</p>
// </div>
// `;

//     resultsDiv.appendChild(movieDiv);
//   });
// }
// displayResults();
