window.onload = function () {
	document.body.style.width = (window.outerWidth) + "px";
	header = document.getElementById("ecs-header");
	header.style.width = (window.outerWidth) + "px";
	content = document.getElementById("ecs-content");
	content.style.width = (window.outerWidth - 30) + "px";
	encr = location.hash.replace("#","");
	if (encr != "" ) {
		//If URL has something to parse, it will parse.
		console.log("[ECS] Get text to parse.");
		content.innerHTML = "<h1>Parsing your link...</h1>";
		let elist = encr.split(":");
		console.log("[ECS] Encryption method: " + elist[1] + ".");
		console.log("[ECS] Encryption key: " + elist[0] + ".");
		console.log("[ECS] Encrypted text: " + elist[2] + ".");
		_import(":base64").main = function () {
			console.log("[ECS] Base64");
		};
		_import(":crypto").main = function () {
			console.log("[ECS] Crypto");
			b64 = new Base64();
			
		}
	}
	let txt = content.innerHTML.split("\n");
	let donum = 0;
	while (donum < txt.length) {
		if (txt[donum].split(":")[0] == "t1") {
			txt[donum] = "<h1>" + txt[donum].replace("t1:","") + "</h1>";
		} else if (txt[donum].split(":")[0] == "t2") {
			txt[donum] = "<h2>" + txt[donum].replace("t2:","") + "</h2>";
		} else if (txt[donum].split(":")[0] == "t3") {
			txt[donum] = "<h3>" + txt[donum].replace("t3:","") + "</h3>";
		} else {
			txt[donum] = "<p>" + txt[donum].replace("p:","") + "</p>";
		}
		donum ++;
	}
	donum = 0;
	let text = "";
	while (donum < txt.length) {
		text += txt[donum] + "\n";
		donum ++;
	}
	content.innerHTML = text;
}
