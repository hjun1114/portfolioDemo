
$(document).ready(function(){
  console.log("hello world");
});

$(document).ready(function(){
	$(".main").onepage_scroll({
	   sectionContainer: "section",
	   easing: "cubic-bezier(0.8, 0.08, 0.26, 0.81)",
	   animationTime: 1200,
	   pagination: true,
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

// $(window).load(function() {
//
// 	init();
//
// });
