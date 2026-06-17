let apiKey = 'e16f18b86fab2744e6aba6067174e2df';
let baseURL = 'https://api.themoviedb.org/3';

let moviesContainer = document.getElementById('movies-container');
let searchInput = document.getElementById('input');
let searchButton = document.getElementById('search');
let homeLink = document.getElementById('home');
let popularLink = document.getElementById('popular');
let topRatedLink = document.getElementById('top-rated');

searchButton.addEventListener('click', searchMovies);
homeLink.addEventListener('click', displayPopularMovies);
popularLink.addEventListener('click', displayPopularMovies);
topRatedLink.addEventListener('click', displayTopRatedMovies);

function fetchMovies(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.results);
        })
        .catch(error => console.error('Error fetching movies:', error));
}

function displayMovies(movies) {
    moviesContainer.innerHTML = '';
    movies.forEach(movie => {
        let movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');
        movieCard.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>${movie.overview}</p>
            <p><strong>Rating:</strong> ${movie.vote_average}</p>
            <p><strong>Release Date:</strong> ${movie.release_date}</p>
            <button onclick="playTrailer('${movie.id}')">Play Trailer</button>
        `;
        moviesContainer.appendChild(movieCard);
    });
}

function displayPopularMovies() {
    let url = `${baseURL}/movie/popular?api_key=${apiKey}`;
    fetchMovies(url);
}

function displayTopRatedMovies() {
    let url = `${baseURL}/movie/top_rated?api_key=${apiKey}`;
    fetchMovies(url);
}

function searchMovies() {
    let query = searchInput.value;
    if (query) {
        let url = `${baseURL}/search/movie?api_key=${apiKey}&query=${query}`;
        fetchMovies(url);
    }
}

function playTrailer(movieId) {
    fetch(`${baseURL}/movie/${movieId}/videos?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            let trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
            if (trailer) {
                window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank');
            } else {
                alert('Trailer not available');
            }
        })
        .catch(error => console.error('Error fetching trailer:', error));
}

displayPopularMovies();
