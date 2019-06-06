$(function() {
    $(".burger-be-ate").on("click", function(event) {
      var id = $(this).data("id");
      var burgerFate = $(this).data("burgerfate");
  
      var burgerFateState = {
        devoured: burgerFate
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: burgerFateState
      }).then(
        function() {
          console.log("changed burger to", burgerFate);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurg = {
        burger_name: $("#ca").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurg
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  