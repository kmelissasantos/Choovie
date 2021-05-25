// fetch("https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=netflix&type=movie&genre=18&page=1&language=en", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "258d49d84fmsh463a70f9e397e14p11e540jsnb40dba07f201",
// 		"x-rapidapi-host": "streaming-availability.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

//Dillin's Code
var searchedTitle = document.querySelector('#search-title');
var searchBtn = document.querySelector('#search-title-btn');

// Run Movie Search through API

searchBtn.addEventListener('click', function getUserMovie() {
  var userMovie = searchedTitle.value.trim();
  console.log(userMovie);

  fetch("https://api.themoviedb.org/3/search/movie?api_key=a1edf9a21ed595540b3cfea1a623b835&query=" + userMovie).then(repsonse => repsonse.json()).then(function(data) {
      var movieName = data.results[0].name;
      var movieId = data.results[0].id;
      console.log(data, movieName, movieId);

    return fetch("https://api.themoviedb.org/3/movie/" + movieId + "?api_key=a1edf9a21ed595540b3cfea1a623b835").then(repsonse => repsonse.json()).then(function(data) {
      console.log(data);
    });
  });
});
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

