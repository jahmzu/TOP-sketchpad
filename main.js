$(document).ready(function() {
	
	var createTable = function(numberTiles) {
			//first for loop creates rows for table
		for(var i = 1; i<=numberTiles; i++){
			$('.grid').append('<tr id="row_'+i+'"></tr>');
		
			//second for loop creates 16 divs per row
			for(var j=1; j<=numberTiles; j++) {
				$('#row_'+i).append('<td><div class="tile"></div></td>');
			}
		}
		
		//adjusts size of each tile.
		var sideLen = 800/numberTiles;
		$('.tile').css({'height': sideLen+'px', 'width':sideLen+'px'});
		$('td').css({'height': sideLen+'px', 'width':sideLen+'px'});
		console.log(sideLen);

	}

	var numTiles = prompt("How many tiles per side? ");
		
	//Ensures user's input is a number. Otherwise, prompts user. 
	while(isNaN(numTiles)) {
		numTiles = prompt("Please enter a number");
	}

	
	//Create a table in container div
	$('#container').append('<table></table>');
	$('#container').find('table').addClass('grid');
	$('#container').append('<button id="reset">Reset</button>');
	$('#container').append('<h1>TOP Sketchpad</h1>');
	
	createTable(numTiles);

	//when mouse enters the tile, highlights it. 
	$('.tile').mouseenter(function(){
		$(this).css('background-color', '#4d4d4d');
	});


	$('#reset').click(function() {
		$('.tile').css('background-color', '#b3b3b3');
		$('.grid').remove('table');
		numTiles = prompt("Ok, how many tiles now?");
		$('#container').prepend('<table></table>');
		$('#container').find('table').addClass('grid');
		createTable(numTiles);
		
		$('.tile').mouseenter(function(){
		$(this).css('background-color', '#4d4d4d');
		});

	});



});

