// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burger-be-ate").on("click", function(event) {
      var id = $(this).data("id");
      var newBurg = $(this).data("newburg");
  
      var newBurgState = {
        devoured: newBurg
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgState
      }).then(
        function() {
          console.log("changed burger to", newBurg);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newCat = {
        burger_name: $("#ca").val().trim(),
        devoured: $("[burger_name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newCat
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  