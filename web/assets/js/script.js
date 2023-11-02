
$(document).ready(resizeTextBox);
$(window).resize(resizeTextBox);



function resizeTextBox() {
  var bigThing = $("#test").outerHeight();
  var style3Text = $(".style-3 .intro-text").outerHeight();
  var style3TextWidth = $(".style-3 .intro-text").width();
  var windowWidth = $(window).width();

  if (bigThing < 300) {
      $(".bg-img-one").css("height", "300px");
  } else {
      if (windowWidth > 2000) {
          $(".bg-img-one").css("height", "20vh");
      } else {
          $(".bg-img-one").css("height", bigThing + "px");
      }
  }


    // residential and commercial pages hero image svg image
    if (style3TextWidth < 400) {
      $(".style-3 .absolute-wrapper").css("padding-top", (style3Text/2) + "px");
    } else {
      $(".style-3 .absolute-wrapper ").css("padding-top", style3Text + 40 + "px");
    }

}

// $(document).ready(function() {
// 	$(".megamenu").on("mouseenter", function(e) {
// 		e.stopPropagation();
// 	});
// });