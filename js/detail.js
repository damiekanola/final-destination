


// Get the movie ID from the query parameter in the URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
console.log(movieId)

if (movieId) {
  const apiKey = '3e06ebba910f62ff6a06a3976a508806';

  // Make API request to get movie details
  fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`)
    .then(response => response.json())
    .then(movie => {

      const movieDetailsContainer = document.getElementById('moviedetails');
      movieDetailsContainer.innerHTML = ''
      const releaseYear = new Date(movie.release_date).getFullYear();

      const movieDetails = document.createElement('div');
      movieDetails.innerHTML = `
      <div class="moviedetails text-white flex flex-wrap gap-8 pl-4">

      <div class="flex-shrink-0" id="detailscontainer">
          <div class=" overflow-hidden rounded-2xl max-w-sm w-full detailimagecontainer">
              <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" alt="" class="detailimage">
          </div>
      </div>

      <div class="w-100 mt-7">
          <div class="h-fit">
              <h1 class="heading text-black text-4xl font-bold tracking-wide w-fit">${movie.title}
              </h1>
              <div class="flex justify-between text-black w-44 p-2 mt-1">
                  <p class="rating opacity-60 bg-gray-600 p-1 rounded-sm">${movie.vote_average}</p>
                  <p class="duration opacity-60 rounded-sm bg-gray-600 p-1">123m</p>
                  <p class="year opacity-60 bg-gray-600 rounded-sm p-1">${releaseYear}</p>
              </div>
              <p class="genre text-black font-extrabold text-lg opacity-50 p-2 w-fit">"Animation, Action,
                  Adventure" </p>
              <p class="summary text-black font-normal text-1xl  py-3 w-full">${movie.overview}</p>
          </div>
      </div>
      
      `
      movieDetailsContainer.appendChild(movieDetails);


    })
    .catch(error => {
      console.error('Error:', error);
    });



  fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const movies = data.results;
      const similarmoviescontainer = document.getElementById('similarmovies');
      similarmoviescontainer.innerHTML = '';
      similarmoviescontainer.classList.add("searchmovies")

      movies.forEach(movie => {
        const similarmovie = document.createElement('div');
        
    
        similarmovie.innerHTML = ` <div class="w-[280px]" >
        <div class="imagecont rounded-2xl overflow-hidden w-full h-100 transition duration-300 ease-out hover:-translate-y-1 ">
        <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" alt="${movie.title}" class="h-full object-cover w-full ">
        </div>
        <p class="text-black text-ellipsis overflow-hidden text-center text-base font-medium p-2">${movie.title}</p>
        </div>
        `

        similarmovie.addEventListener('click', () => { 
          const movieId = movie.id;
          // Handle movie click even
          window.location.href = `detail.html?id=${movieId}`;
        });


        similarmoviescontainer.appendChild(similarmovie);
      });
    })
    .catch(error => {
      console.log('Error:', error);
    });
}

{/* <img src="https://image.tmdb.org/t/p/w1280${movie.poster_path}" alt="" class="h-[70%] w-full object-contain">
<p class="text-black text-ellipsis overflow-hidden text-center text-base font-medium p-2">${movie.title}</p> */}
