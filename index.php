<?php
	include_once("./lib/main.inc.php");
    common_header();

	print'<div id="gameset">';
	print'<table>';
	print'<tbody>';
	print'<tr>';
	for($col=1; $col <= 15; $col++) {
		print'<td id="head'.$col.'" class="head">';
		print $col;
		print'</td>';
	}
	print'</tr>';

	$count = 0;
	for($row=1; $row <= 5; $row++) {
		print"<tr>";
			for($col=1; $col <= 15; $col++) {
				$count++;
				print'<td class="cell" id="cell'.$count.'">';
				print'<svg id="r'. $row .'c'. $col .'" viewBox="0 0 21 21"></svg>';
				print'</td>';
			}
		print'</tr>';
	}
	print'<tr>';
	for($col=1; $col <= 15; $col++) {
		print'<td class="achievement" id="achievement'.$col.'">';
		print'<div class="exact">&nbsp;</div>';
		print'<div class="near">&nbsp;</div>';		
		print'</td>';
	}	
	print'</tr>';
	print'</tbody>';
	print'</table>';
	print'<button id="calculate">Kalkulieren</button>';
	print'</div>';
	
	print'<div id="selector">';
	print'<table>';
	print'<tbody>';
	$count = 0;
	for($row=1; $row <= 3; $row++) {
		print"<tr>";
			for($col=1; $col <= 3; $col++) {
				$count++;
				print'<td>';
				print'<svg id="selectorSVG'. $count .'" viewBox="0 0 21 21"></svg>';
				print'</td>';
			}
		print'</tr>';
	}
	print'</tbody>';
	print'</table>';	
	print'</div>';

	print'<div id="won">';
	print'<div class="centeredText"><img src="./img/robot-won.png" alt="Roboter" />Gewonnen<br />in <span id="rounds"></span> Runden<br /><button class="restart">Nochmal</button></div>';
	print'</div>';

	print'<div id="lost">';
	print'<div class="centeredText"><img src="./img/robot-lost.png" alt="Roboter" />Verloren<br/><button class="restart">Nochmal</button></div>';
	print'</div>';


    common_footer();
?>