$(function () {
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurg = {
      burger_name: $("#bn").val().trim(),
      devoured: false
    };

    // Send the POST request.
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurg
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
  $(".burger-be-ate").on("click", function (event) {
    console.log($(this).context.innerText);
    let textString = $(this).context.innerText;
    id = textString.slice(0, textString.indexOf("."))

    var burger = {
        burger_name: textString.slice(textString.indexOf(".")+2,textString.indexOf("Devour")-1),
        devoured: true
    };
    // Send the DELETE request.
    $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: burger
    }).then(
        function () {
            console.log("deleted cat", id);
            // Reload the page to get the updated list
            location.reload();
        }
    );
});
  // $(".burger-be-ate").on("click", function (event) {
  //   var id = $(this).data("id");
  //   var burgerFate = $(this).data("burgerfate");

  //   var burgerFateState = {
  //     devoured: burgerFate
  //   };

  //   // Send the PUT request.
  //   $.ajax("/api/burger/" + id, {
  //     type: "PUT",
  //     data: burgerFateState
  //   }).then(
  //     function () {
  //       console.log("changed burger to", burgerFate);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});
