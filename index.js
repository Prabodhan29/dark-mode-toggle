$(document).ready(function () {

    $("#chk").change(function (e) { 
        e.preventDefault();
        darkTheme();
    });
  
    function darkTheme() {
        $("body").toggleClass("dark");

        var darkModeText = "<h1> Welcome to the dark side </h1>";
        var lightModeText = "<h1>Hello!!</h1>";

        var bodyText = $(".text").html(($(".text").html() == darkModeText) ?  lightModeText : darkModeText);
        bodyText.addClass("textDark");
    }


});