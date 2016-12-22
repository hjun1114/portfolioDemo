
$(document).ready(function(){
  console.log("hello world");
});

$(document).ready(function(){
	$(".main").onepage_scroll({
	   sectionContainer: "section",
	   easing: "cubic-bezier(.8,.08,.8,.62)",
	   animationTime: 1200,
	   pagination: false,
	   updateURL: false
	});
});

function init() {

    window.setTimeout(function(){
        start();
    }, 2000);
}

// fade in experience
function start() {
	$('body').removeClass("loading").addClass('loaded');
}

$(window).load(function() {

	init();

});
