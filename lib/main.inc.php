<?php
function common_header() {?>
<!DOCTYPE html>
<html lang="de">
<head>
  <title>Elektronengehirn</title>
  <meta charset="utf-8">
  <meta name="author" content="Tobias Lamers" />
  <meta name = "apple-mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="viewport" content = "width=device-width, height=device-height, initial-scale=0.8" />
  <link rel="apple-touch-icon" href="./img/logo.png"/>
  <link rel="shortcut icon" href="./img/logo.png" type="image/x-icon">
  <link rel="stylesheet" type="text/css" href="./lib/css/default.css">
  <link rel="manifest" href="./manifest.json">
</head>

<body>
	<header>
		<div id="hrobot">
			<img src="./img/robot-main.png" alt="robot" id="robot-main" />
		</div>
		<div id="headline">
			Elektronengehirn
		</div>
    	<div id="info">
	    	<div>
	    	<span style="color:#0086D7">&#x25CF;</span> richtig<br />
	    	<span style="color:#E00000">&#x25CF;</span> nah dran
	    	</div>
	    </div>
	</header>
    <main>
<?php
}

function common_footer() {?>
    </main>
  <script src="./lib/jscript/jquery-latest.js"></script>
  <script src="./lib/jscript/init.js"></script>

</body>
</html>

<?php } ?>