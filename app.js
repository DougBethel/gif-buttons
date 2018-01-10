$(document).ready(function(){
//create array for inital buttons
  var animals = ["cat", "dog", "mouse", "bird"];

// create button functions based off animals array
  function createButtons(){

    $("#buttonField").empty();

  for (var i = 0; i < animals.length; i++) {

    var addButton = $("<button>");

    addButton.addClass('animal');



    addButton.attr("data-name", animals[i]);

    addButton.text(animals[i]);

    $("#buttonField").append(addButton);

  }
}
createButtons();

  // Create on Click Event for when button is clicked
  $("#buttonField").on("click", ".animal", function() {
$('.gifContent').empty();
        // In this case, the "this" keyword refers to the button that was clicked
        var queriedAnimals = $(this).attr("data-name");

        // Constructing a URL to search Giphy for the name of the person who said the quote
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          queriedAnimals + "&api_key=YggWquimzlo8LusXtOH09JvJPK2WRJhB&limit=10";

    // AJAX

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      var results = response.data;
      console.log(results);
      for (var i = 0; i < results.length; i++) {
        var gifDiv = $("<div class='item'>");
        var animalImage = $("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url);
        gifDiv.append(animalImage);
        $('.gifContent').append(gifDiv);
      }
    });
  });
  $('.searchButton').on('click', function(){

  var search = $('.search').val()
  animals.push(search)

  createButtons();

  });
});
