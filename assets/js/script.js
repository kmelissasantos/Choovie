let sourceID = "movie/278";


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


// fetch("https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F18785", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "89c66f1ebdmsh7105bec14609ed5p1ff77cjsn2c17d52f4e43",
// 		"x-rapidapi-host": "streaming-availability.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

// var movieID = 18785
// let movie = {
//         "x-rapidapi-key": "89c66f1ebdmsh7105bec14609ed5p1ff77cjsn2c17d52f4e43",
//         "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
//         fetchMovie: function  () {
//             fetch(
//                 "https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie%2F" 
//                 + movieID,{

//                 }
//             ).then((response) => response.json())
//             .then((data) => console.log(data));
//         }   
//             };




            // 89c66f1ebdmsh7105bec14609ed5p1ff77cjsn2c17d52f4e43
            // 258d49d84fmsh463a70f9e397e14p11e540jsnb40dba07f201
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