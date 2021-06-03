function resetMessage() {
	$("#result").removeClass().text("");
	$("#card_result").removeClass("visible").addClass("invisible");
	$("#card_progress_bar").attr("style", "width: 0%")
}

function showError(text) {
	resetMessage();
	$("#result").addClass("alert alert-danger").text(text);
}

$(window).on('unload', function () {
	// executed if the user clicks "Reload this Page"
	// $("#imageSize").val('square');
	$("#imageSize").val('wide');


});
$(function () {

$('#chart_generator').click(function (event) {
	event.preventDefault();
	resetMessage();
	var image_dimension = $("#imageSize option:selected")[0].getAttribute("value");
	// if (image_dimension === "default") {
	// 	showError("Please select hypnogram dimensions from the Drop-Down");
	// 	return;
	// }
	if (image_dimension === "square") {

		var canvas = document.getElementsByTagName('canvas')[0];
		canvas.width = 320;
		canvas.height = 320;
		squareChartGenerator(image_dimension);
	}
	if (image_dimension === "wide") {

		var canvas = document.getElementsByTagName('canvas')[0];
		canvas.width = 320;
		canvas.height = 160;
		wideChartGenerator(image_dimension);
	}
	if (image_dimension === "tall") {

		var canvas = document.getElementsByTagName('canvas')[0];
		canvas.width = 160;
		canvas.height = 320;
		tallChartGenerator(image_dimension);
	}
	
	

	$('#btn_download_main_div').removeClass('invisible').addClass('visible');
	var count = $("#photoCount_card").val();
	$('#card_main').removeClass('invisible').addClass('visible');
	$("#card_generation").empty();
	cardGeneration(image_dimension, count);
});

$('#btn_download_main, #btn_download_card').click(function (event) {
	event.preventDefault();
	downloadAsZip();
});

});
