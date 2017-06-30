$(document).ready(function() {
	var displayTarget = function(e) {
		var left = e.pageX - 50;
		var top = e.pageY - 50;

		$("#target").css({
       left:  left,
       top:   top,
    });
	};

	$("img").on("mouseover", function(e) {
		displayTarget(e);
	});

	$("#container").hover(
		function() {
			$("#target").removeClass("hidden");
		},
		function() {
			$("#target").addClass("hidden");
		});
});