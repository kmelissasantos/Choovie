
fetch("https://api.themoviedb.org/3/movie/550?api_key=a1edf9a21ed595540b3cfea1a623b835")
.then(response => response.json())
.then(data => console.log(data));

//Search Title bar functionality
//var searchTitle = function (userMovie) {
    
    //fetch tmdb
    
  
   // var searchApiUrl = "https://api.themoviedb.org/3/movie/550?api_key=a1edf9a21ed595540b3cfea1a623b835&q=" + userMovie + "/";
  
  //};    

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
