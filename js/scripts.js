// $(document).ready(function() {

  $(".clickable").click(function() {
    $(this).find("p").toggleClass("frontCard");
    $(this).find("p").toggleClass("back");
  });
// });
