

//Dillin's Code
var searchedTitle = document.querySelector('#search-title');
var searchBtn = document.querySelector('#search-title-btn');
var comedyBtn = document.querySelector('#comedy-button');
var actionBtn = document.querySelector('#action-button');
var docuBtn = document.querySelector('#docu-button');
var horrorBtn = document.querySelector('#horror-button');
var scifiBtn = document.querySelector('#scifi-button');
var dramaBtn = document.querySelector('#drama-button');
var familyBtn = document.querySelector('#family-button');
var row = document.querySelector('#row');

// Run Movie Search through API

//search by title
searchBtn.addEventListener('click', function getUserMovie() {
  var userMovie = searchedTitle.value.trim();
  console.log(userMovie);

  fetch("https://api.themoviedb.org/3/search/movie?api_key=a1edf9a21ed595540b3cfea1a623b835&query=" + userMovie).then(repsonse => repsonse.json()).then(function(data) {

      for (let i = 0; i < 5; i++) {
            var movie = data.results[i];
            console.log(data);
            var title = movie.title;
            var releaseDate = movie.release_date;
            var imgUrl = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
            console.log(title, releaseDate, imgUrl);
            var movieArr = [{
              title: movie.title
            },
            {
              img: imgUrl
            },
            {
              release_date: releaseDate
            }]

            console.log(movieArr);
            document.querySelector('#title-movie').textContent = title;
            document.querySelector('#release-movie').textContent = releaseDate;
            document.querySelector('#movie-poster').setAttribute('src', imgUrl);
            };

    });
              
});

//comedy button
comedyBtn.addEventListener('click', function getUserMovie() {
  var userMovie = "comedy";
  console.log(userMovie);

  fetch("https://api.themoviedb.org/3/search/movie?api_key=a1edf9a21ed595540b3cfea1a623b835&query=" + userMovie).then(repsonse => repsonse.json()).then(function(data) {

      for (let i = 0; i < 5; i++) {
            var movie = data.results[i];
            console.log(data);
            var title = movie.title;
            var releaseDate = movie.release_date;
            var imgUrl = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
            console.log(title, releaseDate, imgUrl);
            var movieArr = [{
              title: movie.title
            },
            {
              img: imgUrl
            },
            {
              release_date: releaseDate
            }]

            console.log(movieArr);
            document.querySelector('#title-movie').textContent = title;
            document.querySelector('#release-movie').textContent = releaseDate;
            document.querySelector('#movie-poster').setAttribute('src', imgUrl);
            };

    });
              
});

//action button
actionBtn.addEventListener('click', function getUserMovie() {
  var userMovie = "action";
  console.log(userMovie);

  fetch("https://api.themoviedb.org/3/search/movie?api_key=a1edf9a21ed595540b3cfea1a623b835&query=" + userMovie).then(repsonse => repsonse.json()).then(function(data) {

      for (let i = 0; i < 5; i++) {
            var movie = data.results[i];
            console.log(data);
            var title = movie.title;
            var releaseDate = movie.release_date;
            var imgUrl = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
            console.log(title, releaseDate, imgUrl);
            var movieArr = [{
              title: movie.title
            },
            {
              img: imgUrl
            },
            {
              release_date: releaseDate
            }]

            console.log(movieArr);
            document.querySelector('#title-movie').textContent = title;
            document.querySelector('#release-movie').textContent = releaseDate;
            document.querySelector('#movie-poster').setAttribute('src', imgUrl);
            };

    });
              
});

//documentary button

docuBtn.addEventListener('click', function getUserMovie() {
  var userMovie = "documentaries";
  console.log(userMovie);

  fetch("https://api.themoviedb.org/3/search/movie?api_key=a1edf9a21ed595540b3cfea1a623b835&query=" + userMovie).then(repsonse => repsonse.json()).then(function(data) {

      for (let i = 0; i < 5; i++) {
            var movie = data.results[i];
            console.log(data);
            var title = movie.title;
            var releaseDate = movie.release_date;
            var imgUrl = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
            console.log(title, releaseDate, imgUrl);
            var movieArr = [{
              title: movie.title
            },
            {
              img: imgUrl
            },
            {
              release_date: releaseDate
            }]

            console.log(movieArr);
            document.querySelector('#title-movie').textContent = title;
            document.querySelector('#release-movie').textContent = releaseDate;
            document.querySelector('#movie-poster').setAttribute('src', imgUrl);
            };

    });
              
});

//horror button
horrorBtn.addEventListener('click', function getUserMovie() {
  var userMovie = "horror";
  console.log(userMovie);

  fetch("https://api.themoviedb.org/3/search/movie?api_key=a1edf9a21ed595540b3cfea1a623b835&query=" + userMovie).then(repsonse => repsonse.json()).then(function(data) {

      for (let i = 0; i < 5; i++) {
            var movie = data.results[i];
            console.log(data);
            var title = movie.title;
            var releaseDate = movie.release_date;
            var imgUrl = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
            console.log(title, releaseDate, imgUrl);
            var movieArr = [{
              title: movie.title
            },
            {
              img: imgUrl
            },
            {
              release_date: releaseDate
            }]

            console.log(movieArr);
            document.querySelector('#title-movie').textContent = title;
            document.querySelector('#release-movie').textContent = releaseDate;
            document.querySelector('#movie-poster').setAttribute('src', imgUrl);
            };

    });
              
});

//scifi button

scifiBtn.addEventListener('click', function getUserMovie() {
  var userMovie = "sci-fi";
  console.log(userMovie);

  fetch("https://api.themoviedb.org/3/search/movie?api_key=a1edf9a21ed595540b3cfea1a623b835&query=" + userMovie).then(repsonse => repsonse.json()).then(function(data) {

      for (let i = 0; i < 5; i++) {
            var movie = data.results[i];
            console.log(data);
            var title = movie.title;
            var releaseDate = movie.release_date;
            var imgUrl = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
            console.log(title, releaseDate, imgUrl);
            var movieArr = [{
              title: movie.title
            },
            {
              img: imgUrl
            },
            {
              release_date: releaseDate
            }]

            console.log(movieArr);
            document.querySelector('#title-movie').textContent = title;
            document.querySelector('#release-movie').textContent = releaseDate;
            document.querySelector('#movie-poster').setAttribute('src', imgUrl);
            };

    });
              
});

//drama button

dramaBtn.addEventListener('click', function getUserMovie() {
  var userMovie = "drama";
  console.log(userMovie);

  fetch("https://api.themoviedb.org/3/search/movie?api_key=a1edf9a21ed595540b3cfea1a623b835&query=" + userMovie).then(repsonse => repsonse.json()).then(function(data) {

      for (let i = 0; i < 5; i++) {
            var movie = data.results[i];
            console.log(data);
            var title = movie.title;
            var releaseDate = movie.release_date;
            var imgUrl = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
            console.log(title, releaseDate, imgUrl);
            var movieArr = [{
              title: movie.title
            },
            {
              img: imgUrl
            },
            {
              release_date: releaseDate
            }]

            console.log(movieArr);
            document.querySelector('#title-movie').textContent = title;
            document.querySelector('#release-movie').textContent = releaseDate;
            document.querySelector('#movie-poster').setAttribute('src', imgUrl);
            };

    });
              
});

//family button

familyBtn.addEventListener('click', function getUserMovie() {
  var userMovie = "family";
  console.log(userMovie);

  fetch("https://api.themoviedb.org/3/search/movie?api_key=a1edf9a21ed595540b3cfea1a623b835&query=" + userMovie).then(repsonse => repsonse.json()).then(function(data) {

      for (let i = 0; i < 5; i++) {
            var movie = data.results[i];
            console.log(data);
            var title = movie.title;
            var releaseDate = movie.release_date;
            var imgUrl = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
            console.log(title, releaseDate, imgUrl);
            var movieArr = [{
              title: movie.title
            },
            {
              img: imgUrl
            },
            {
              release_date: releaseDate
            }]

            console.log(movieArr);
            document.querySelector('#title-movie').textContent = title;
            document.querySelector('#release-movie').textContent = releaseDate;
            document.querySelector('#movie-poster').setAttribute('src', imgUrl);
            };

    });
              
});


function displayChoices() {
  var movieInfoArr = [{
    title: movie.title
  },{
    imgUrl: "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path
  },{
    releaseDate: movie.release_date
  }]

  var row = document.querySelector('row');
  var movieCard = document.querySelector("#container").createElement('div');
  movieCard.classList.add('card');
  row.appendChild(movieCard);
  movieCard.appendChild(movieInfoArr);


  console.log(movieInfoArr);
      
}
//End Dillin's Code

//EXAMPLE, 'SHAWSHANK REDEMPTION'
let sourceID = "movie/278";

//***API FOR WHERE TO FIND CONTENT USING TMDB ID***//
function getWhereToWatch() {
  fetch("https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=" + sourceID + "&source=tmdb&country=us", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "45e2d343b0mshb21a1f4fd6e6d29p166b41jsnb915ef76a153",
      "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com"
    }
  }).then(function(response) {
    response.json().then(function(data) {
      console.log(data);
    });
    });
  }

  getWhereToWatch();
//getWhereToWatch()

