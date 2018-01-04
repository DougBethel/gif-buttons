$(document).ready(function(){
// Create on Click Event for when button is clicked
  $('#submitButton').on('click', function(){
    //create a way to link button class back to funcion
var animal = $(this).attr("data-animal")
// API
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "api_key=YggWquimzlo8LusXtOH09JvJPK2WRJhB&q=&limit=25&offset=0&rating=G&lang=en";
// AJAX
        $.ajax({
                 url: queryURL,
                 method: "GET"
               })
done(function(response) {
  var results = response.data;
  for (var i = 0; i < results.length; i++) {
 var gifDiv = $("<div class='item'>");
 var animalImage = $("<img>");
 animalImage.attr("src", results[i].images.fixed_height.url);
  gifDiv.append(animalImage)

}
});



});
});
