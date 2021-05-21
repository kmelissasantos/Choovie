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
   
//Search Title bar functionality
var searchTitle = function (userMovie) {
    
    //fetch tmdb
    fetch("https://api.themoviedb.org/3/movie/550?api_key=a1edf9a21ed595540b3cfea1a623b835")
    .then(response => response.json())
    .then(data => console.log(data));
  
    var searchApiUrl = "https://api.themoviedb.org/3/movie/550?api_key=a1edf9a21ed595540b3cfea1a623b835&q=" + userMovie + "/";
  
  };    

var formSubmitHandler = function(event) {
    //Start Search By Title bar
    var userInput = document.querySelector("#search-title");
    // prevent page from refreshing
  event.preventDefault();

  // get value from input element
  var userMovie = userInput.value.trim();
  if (userMovie) {
      searchTitle(userMovie);
      //clear old content
      userInput.value= "";
  } else {
      alert("Please enter a movie title!");
  }
};

