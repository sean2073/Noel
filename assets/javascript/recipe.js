$(document).ready(function() {
  $("#submit").on("click", function(event) {
    var q = $("#query").val();
    //var password = $("#password").val();
    console.log(q);
    var b = "beef";
    //queryURL="https://api.edamam.com/search?q=" + q + "&app_id=${c24cde76}&app_key=${d8d15088e36d8a58570af6069ff5e5be}";
    // Using Sy's api_id and api_key
    queryURL =
      "https://api.edamam.com/search?q=" +
      q +
      "&app_id=c24cde76&app_key=d8d15088e36d8a58570af6069ff5e5be";
    // Using my api_id and api_key
    queryURL2 =
      "https://api.edamam.com/search?q=" +
      q +
      "&app_id=c69aa22c&app_key=ee3492ea77b67ed2322a011a5159e6b9";
    $.ajax({
      //$.curl({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response.hits[0].recipe.url);
      console.log(response);
      //var res = response.hits[0].recipe.url;
      
      var res = $("<a href="+ response.hits[0].recipe.url + ">" + response.hits[0].recipe.url + "</a>");
      console.log(res);
      $("#recipe-content").append(res);
    });
    console.log("hello");
  });
});
