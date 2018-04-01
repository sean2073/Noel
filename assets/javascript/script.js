$(function() {
  $("span:first").addClass("large-emphasize");
  $("a").css({
    color: "#FFFFFF",
    "text-decoration": "none",
    "font-style": "none",
    "margin-right": "35px"
    // "box-shadow": "0 0 4px #811",
  });
  $(".navLink").fadeTo(500, 0.6);

  $(".navLink").hover(
    function() {
      $(this)
        .stop()
        .fadeTo(500, 0.8);
      $(this).css("text-decoration", "underline");
    },
    function() {
      $(this)
        .stop()
        .fadeTo(500, 0.6);
      $(this).css("text-decoration", "none");
    }
  );
  $("#specialWords").css("color", "#c90909");

  // $(".navLink #currentLink").css("color", "#ffffff");
  // $(".navLink").not("#currentLink").css("color", "#ffffff").fadeTo(500, .8);
  // $(".navLink").not("#currentLink").fadeTo(500, .8);
  //$("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#submit-btn").css({
    "background-color": "#435246",
    color: "#f6f7f4",
    border: "2px solid #c90909",
    "font-size": "25px"
  });

//  $("#pic3").css("opacity", "0.3");
 $("#recipe-content").css({
    "background-color": "violet"
  });
});
