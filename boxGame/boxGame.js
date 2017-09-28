$(document).ready(function() {
	var block = $("#box");
	var playAgain = $('#playAgain');
	var score = $('#score');
	var lost = $('#lost');
	var interval = 0;
	var number = 0;

	block.mouseenter(function() {
		interval = setInterval(function () {
			score.text("Score: " + number++);  
		}, 100);
	});
	block.mouseleave(function() {
		clearInterval(interval);
		lost.show();
		playAgain.show();
		$('#lost').text("You lost...Final Score: " + (number-1));
	});

	playAgain.click(function() {
		lost.hide();
		playAgain.hide();
		score.text("Score: 0");
		number = 0;

	});

	$('#easyMode').click(function() {
		block.height(100);
		block.width(100);
	});
	$('#intermediateMode').click(function() {
		block.height(75);
		block.width(75);
	});
	$('#hardMode').click(function() {
		block.height(50);
		block.width(50);
	});
});
