$(document).ready(function () {
  $("button#dark").click(function () {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("p").css({ color: "#F0F0F0" });
    $(".intro").css({ color: "yellow" });
  });
  $("button#light").click(function () {
    $("body").removeClass();
    $("body").addClass("light-background");
    $("p").css({ color: "black" });
    $(".intro").css({ color: "blueviolet" });
  });
});
