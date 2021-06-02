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
var movieList = document.querySelector("#movies-list");

//Create Card Function (BOB)
function createCard(title, releaseDate, posterImg){
  var cardContainer = document.createElement("div");
  cardContainer.classList.add("card");
  var cardDivider = document.createElement("div");
  cardDivider.classList.add("card-divider");
  var h2Title = document.createElement("h2");
  h2Title.classList.add("title");
  h2Title.textContent = title;
  cardDivider.appendChild(h2Title);
  var cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardBody.classList.add("text-white");
  var img = document.createElement("img");
  img.classList.add("card-img");
  img.setAttribute('src', posterImg);
  var h2Release = document.createElement("h3");
  h2Release.classList.add("card-text");
  h2Release.textContent = releaseDate;
  cardBody.appendChild(img);
  cardBody.appendChild(h2Release);
  cardContainer.appendChild(cardDivider);
  cardContainer.appendChild(cardBody);
  movieList.appendChild(cardContainer);
}

// Run Movie Search through API
//search by title
searchBtn.addEventListener('click', function getUserMovie() {
  var userMovie = searchedTitle.value.trim();
  console.log(userMovie);
  movieList.innerHTML = ""
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
            // document.querySelector('#title-movie').textContent = movieArr.title;
            // document.querySelector('#release-movie').textContent = releaseDate;
            // document.querySelector('#movie-poster').setAttribute('src', imgUrl);
            createCard(title, releaseDate, imgUrl);
            };

    });
              
});

//comedy button
comedyBtn.addEventListener('click', function getUserMovie() {
  var userMovie = "comedy";
  console.log(userMovie);
  movieList.innerHTML = ""
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
            createCard(title, releaseDate, imgUrl);
            // document.querySelector('#title-movie').textContent = title;
            // document.querySelector('#release-movie').textContent = releaseDate;
            // document.querySelector('#movie-poster').setAttribute('src', imgUrl);
            // document.querySelector('.hide').classList.remove('hide');
            };

    });
              
});

//action button
actionBtn.addEventListener('click', function getUserMovie() {
  var userMovie = "action";
  console.log(userMovie);
  movieList.innerHTML = ""
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
            createCard(title, releaseDate, imgUrl);
            // document.querySelector('#title-movie').textContent = title;
            // document.querySelector('#release-movie').textContent = releaseDate;
            // document.querySelector('#movie-poster').setAttribute('src', imgUrl);
            // document.querySelector('.hide').classList.remove('hide');
            };

    });
              
});

//documentary button

docuBtn.addEventListener('click', function getUserMovie() {
  var userMovie = "documentaries";
  console.log(userMovie);
  movieList.innerHTML = ""
  fetch("https://api.themoviedb.org/3/search/movie?api_key=a1edf9a21ed595540b3cfea1a623b835&query=" + userMovie).then(repsonse => repsonse.json()).then(function(data) {

      for (let i = 0; i < 4; i++) {
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
            createCard(title, releaseDate, imgUrl);
            // document.querySelector('#title-movie').textContent = title;
            // document.querySelector('#release-movie').textContent = releaseDate;
            // document.querySelector('#movie-poster').setAttribute('src', imgUrl);
            // document.querySelector('.hide').classList.remove('hide');
            };

    });
              
});

//horror button
horrorBtn.addEventListener('click', function getUserMovie() {
  var userMovie = "horror";
  console.log(userMovie);
  movieList.innerHTML = ""
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
            createCard(title, releaseDate, imgUrl);
            // document.querySelector('#title-movie').textContent = title;
            // document.querySelector('#release-movie').textContent = releaseDate;
            // document.querySelector('#movie-poster').setAttribute('src', imgUrl);
            // document.querySelector('.hide').classList.remove('hide');
            };
    });
              
});

//scifi button

scifiBtn.addEventListener('click', function getUserMovie() {
  var userMovie = "sci-fi";
  console.log(userMovie);
  movieList.innerHTML = ""
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
            createCard(title, releaseDate, imgUrl);
            // document.querySelector('#title-movie').textContent = title;
            // document.querySelector('#release-movie').textContent = releaseDate;
            // document.querySelector('#movie-poster').setAttribute('src', imgUrl);
            // document.querySelector('.hide').classList.remove('hide');
            };

    });
              
});

//drama button

dramaBtn.addEventListener('click', function getUserMovie() {
  var userMovie = "drama";
  console.log(userMovie);
  movieList.innerHTML = ""
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
            createCard(title, releaseDate, imgUrl);
            // document.querySelector('#title-movie').textContent = title;
            // document.querySelector('#release-movie').textContent = releaseDate;
            // document.querySelector('#movie-poster').setAttribute('src', imgUrl);
            // document.querySelector('.hide').classList.remove('hide');
            };

    });
              
});

//family button

familyBtn.addEventListener('click', function getUserMovie() {
  var userMovie = "family";
  console.log(userMovie);
  movieList.innerHTML = ""
  fetch("https://api.themoviedb.org/3/search/movie?api_key=a1edf9a21ed595540b3cfea1a623b835&query=" + userMovie).then(repsonse => repsonse.json()).then(function(data) {

      for (let i = 0; i < 5; i++) {
            var movie = data.results[i];
            var movieId = movie.id;
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
            createCard(title, releaseDate, imgUrl);
            // document.querySelector('#title-movie').textContent = title;
            // document.querySelector('#release-movie').textContent = releaseDate;
            // document.querySelector('#movie-poster').setAttribute('src', imgUrl);
            // document.querySelector('.hide').classList.remove('hide');
            };

            

    });
              
});

//experiment for displaying multiple cards at once
//function displayChoices() {
  //var movieInfoArr = [{
  //  title: movie.title
 // },{
 //   imgUrl: "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path
  //},{
  //  releaseDate: movie.release_date
  //}]

 // var row = document.querySelector('row');
 // var movieCard = document.querySelector("#container").createElement('div');
 // movieCard.classList.add('card');
 // row.appendChild(movieCard);
 // movieCard.appendChild(movieInfoArr);


 // console.log(movieInfoArr);

      
//}
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
};

getWhereToWatch();
//getWhereToWatch()

$('#main').toggleClass(localStorage.toggled);

function darkLight() {
  /*DARK CLASS*/
  if (localStorage.toggled != 'dark') {
    $('#main, p').toggleClass('dark', true);
    localStorage.toggled = "dark";
     
  } else {
    $('#main, p').toggleClass('dark', false);
    localStorage.toggled = "";
  }
}

/*Add 'checked' property to input if background == dark*/
if ($('main').hasClass('dark')) {
   $( '#checkBox' ).prop( "checked", true )
} else {
  $( '#checkBox' ).prop( "checked", false )
}

