//

//Dillin's Code
var searchedTitle = document.querySelector('#search-title');
var searchBtn = document.querySelector('#search-title-btn');

// Run Movie Search through API

searchBtn.addEventListener('click', function getUserMovie() {
  var userMovie = searchedTitle.value.trim();
  console.log(userMovie);

  fetch("https://api.themoviedb.org/3/search/movie?api_key=a1edf9a21ed595540b3cfea1a623b835&query=" + userMovie).then(repsonse => repsonse.json()).then(function(data) {

      for (let i=0; i < 5; i++) {
            var movieName = data.results[i].name;
            var movieId = data.results[i].id;
            var movie = data.results[i];
            console.log(data, movieName, movieId);
            var title = movie.title;
            var releaseDate = movie.release_date;
            var imgUrl = "https://image.tmdb.org/t/p/w500/" + movie.backdrop_path;
            console.log(title, releaseDate, imgUrl);
            document.querySelector('#title-movie').textContent = title;
            document.querySelector('#release-movie').textContent = releaseDate;
            document.querySelector('#movie-poster').setAttribute('src', imgUrl);

            
          };

        console.log(data);

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
getWhereToWatch()

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

