$(function () {
   
   $("body").on("submit", "#form", function (e) {
      var input = $("#input").val();
      getMovies(input);
      // e.preventDefault();
   }); 
});

$(document).on("pagebeforeshow", "#movie", function() {
   let movieId = sessionStorage.getItem("movieId");
   getMovie(movieId);
})

function getMovies(x) {
   $.ajax({
      method: "GET",
      url: "http://www.omdbapi.com/?s="+x
   }).done(function(data) {
      let movies = data.Search;
      let output = "";
      $.each(movies, function(index, movie) {
         output += `
            <li>
               <a href="" onclick="clickMovie('${movie.imdbID}')">
                  <img src="${movie.Poster}">
                  <h2>${movie.Title}</h2>
                  <p>Year: ${movie.Year}</p>
               </a>
            </li>          
         `;
      });
      $("#movies").html(output).listview("refresh");
    })  
}

function clickMovie(id) {
   sessionStorage.setItem("movieId", id);
   $.mobile.changePage("movie.html");
}

function getMovie(y) {
   $.ajax({
      method: "GET",
      url: "http://www.omdbapi.com/?i="+y
   }).done(function(movie) {
      let movieTop = `
            <li>
               <div class="text-center">
                  <h1>${movie.Title}</h1>
                  <img src="${movie.Poster}">
               </div>
            </li>          
         `;
      $("#movieTop").html(movieTop);
      
      let movieDetails = `
         <li><b>Genre:</b> ${movie.Genre}</li>
         <li><b>Year:</b> ${movie.Year}</li>
         <li><b>Rated:</b> ${movie.Rated}</li>
         <li><b>Runtime:</b> ${movie.Runtime}</li>
         <li><b>Rating:</b> ${movie.imdbRating}</li>
         <li><b>Votes:</b> ${movie.imdbVotes}</li>
         <li><b>Actors:</b> ${movie.Actors}</li>
         <li><b>Director:</b> ${movie.Director}</li>         
      `;
      $("#movieDetails").html(movieDetails).listview("refresh");
    })  
}