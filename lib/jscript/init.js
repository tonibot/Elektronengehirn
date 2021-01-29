$(document).ready(function(e){
	var target = initGame();
	var gameRound = 1;
	var selectedColours = [];	
	var activeCol = "#head" + gameRound;
	$(activeCol).css("color", "#E00000");
	
	
	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;
	  while (0 !== currentIndex) {
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }
	  return array;
	}
	
	function initGame() {
		drawBoard();
		drawSelector();
	
		var fullStack = ["1", "2", "3", "4", "5", "6", "7", "8"];
		shuffle(fullStack);
		for(i=0; i < 3; i++) {
			fullStack.pop();
		}

		return fullStack;
	}
	
	function randInt(min, max) { // min and max included 
	  return Math.floor(Math.random() * (max - min + 1) + min);
	}

	function drawBoard() {
		var col;
		var row;
		
		for (row = 1; row <= 5; row++) { 
			for (col = 1; col <= 15; col++) {
				var randPolygon = '<polygon points="' + randInt(1,2) + ',' + randInt(7,9) + ' ' + randInt(1,2) + ',' + randInt(12,14) + ' ' + randInt(3,4) + ',' + randInt(15,16) + ' ' + randInt(7,8) + ',' + randInt(18,19) + ' ' + randInt(12,13) + ',' + randInt(18,19) + ' ' + randInt(16,17) + ',' + randInt(15,16) + ' ' + randInt(19,20) + ',' + randInt(12,13) + ' ' + randInt(19,20) + ',' + randInt(7,8) + ' ' + randInt(16,17) + ',' + randInt(4,5) + ' ' + randInt(12,13) + ',' + randInt(1,2) + ' ' + randInt(7,8) + ',' + randInt(1,2) + ' ' + randInt(3,4) + ',' + randInt(4,5)	+ '" class="poly" />';
		
				var item= '#r' + row + 'c' + col;
				$(item).empty();
				$(item).append(randPolygon);
			}
		}
		
		for (count = 1; count <= 100; count++) {
			var item2= '#cell' + count;
			$(item2).html($(item2).html());
		}
	}

	function drawSelector() {
		var col;
		var row;
		var count = 1;
		
		for (row = 0; row <= 14; row=row+7) { 
			for (col = 0; col <= 14; col=col+7) {
				var randPolygon2 = '<polygon points="' + randInt(1,2) + ',' + randInt(7,9) + ' ' + randInt(1,2) + ',' + randInt(12,14) + ' ' + randInt(3,4) + ',' + randInt(15,16) + ' ' + randInt(7,8) + ',' + randInt(18,19) + ' ' + randInt(12,13) + ',' + randInt(18,19) + ' ' + randInt(16,17) + ',' + randInt(15,16) + ' ' + randInt(19,20) + ',' + randInt(12,13) + ' ' + randInt(19,20) + ',' + randInt(7,8) + ' ' + randInt(16,17) + ',' + randInt(4,5) + ' ' + randInt(12,13) + ',' + randInt(1,2) + ' ' + randInt(7,8) + ',' + randInt(1,2) + ' ' + randInt(3,4) + ',' + randInt(4,5)	+ '" class="sbox" id="sel' + count +'" />';
				var selc = '#selectorSVG'+count;
				$(selc).empty();
				$(selc).append(randPolygon2);
				count = count + 1;

			}
		}
		
		$("#selector").html($("#selector").html());
	}

	$(".poly").click(function(event) {		
		field = "#" + $(this).parent().attr('id');
		clickColumn = field.substring(field.indexOf('c')+1, field.length);
		if(clickColumn == gameRound) {
			var selected_color;
			$("#selector").css("top", event.pageY-50);
			$("#selector").css("left", event.pageX-50);
			$("#selector").show();
			$(".sbox").click(function() {
				selected_color = $(this).css('fill');
				selected_value = $(this).css('content');
				$(field).children().css("fill", selected_color );
				$(field).children().css("content", selected_value );
				$("#selector").hide();
			})
		}
	})
		
	$("#calculate").click(function() {
			var blue = 0;
			var red = 0;
			var exit;
			var blueString = "";
			var redString = "";

			var achievementCell = "#achievement"+gameRound;
			for(i = 1; i<=5; i++) {

				var baseCell = "#r" + i + "c" + gameRound;
				var guess = $(baseCell).children().css("content");

				if(guess[1] == 9 || guess[1] == "o") {
					exit = 1;
				}
				
					if(target.includes(guess[1])) {
						if(guess[1] == target[i-1]) {
							blue++;
							blueString = blueString + "&#x25CF;";
						} else {
							red++;
							redString = redString + "&#x25CF;";
						}
					}
			}
			if(exit == 1) {
				alert("Bitte für alle Felder eine Farbe wählen");

			} else {
	
				if(blue==5) {
					$("#won").show("slow")
					$("#rounds").html(gameRound);

				} else {
	
					selectedColours = [];	
					$(achievementCell).children(".exact").html(blueString);
					$(achievementCell).children(".near").html(redString);				
					
					gameRound++;
		
		
					if(gameRound>15) {
						$("#calculate").hide();
						$("#lost").show("slow")
					}
		
		
					var lastCol = "#head" + (gameRound-1);
					var activeCol = "#head" + gameRound;
					$(lastCol).css("color", "#999999");
					$(activeCol).css("color", "#E00000");
				}
			}
	})
	
	$(".restart").click(function() {
		location.reload();
	});


});