
$( document ).ready(function() {

	// while (true) {
 //  	console.log("HELLO");
	// 	setTimeout(function(){
	// 		console.log("THIS IS");
	// 	}, 2000);
	
	// 	console.log("DOG");	console.log("Hello, world");
	// }

	
});


$( window ).on( "load", function() {

	animation_loop();

});

function animation_loop() {
  
  var target_words = ["Analysts", "Scientists", "Developers", "Evangelists", "Programmers"];
  var words_count = target_words.length;
  var counter = 0;
  var word_index = 0;
	var $target = $('#target');
  var zero_or_one = 0;

  window.setInterval(function () {
      
      // alternate between 0 and 1
      zero_or_one = (zero_or_one + 1) % 2;

      // index for looping through list of words
      word_index = (counter) % 3;
      counter += 1;

			if (zero_or_one) {
      	$target.removeClass('animated bounceInLeft');
      	$target.addClass('animated bounceOutRight');


			} else {
      	$target.html(target_words[word_index]);
      	$target.removeClass('animated bounceOutRight');
				$target.addClass('animated bounceInLeft');
			}


  }, 1000); // repeat forever, polling every 3 seconds
}