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
		content.innerHTML = "t1:Parsing your link...";
		_import(":base64").main = function () {
			console.log("[ECS] Base64");
			b64 = new Base64();
			b64.mode(2);
			elist = b64.decode(encr);
			elist = elist.split(":");
			console.log("[ECS] Encryption method: " + elist[1] + ".");
			console.log("[ECS] Encryption key: " + elist[0] + ".");
			ctt = elist[2];
			console.log("[ECS] Encrypted text: " + ctt + ".");
			enclist = ["base64","aes","des","rabbit"];
			if (elist[1].toLowerCase() == "base64") {
				console.log("[ECS]No need to decrypt");
				b64.mode(0);
				content.innerHTML = b64.decode(ctt);
			} else if (elist[1].toLowerCase()) {
				console.log("[ECS]Need to decrypt by " + elist[1].toUpperCase() + ".");
				_import(":crypto").main = function () {
					console.log("[ECS] Crypto");
				}
			} else {
				console.error("[ECS]Unknown encryption!");
				content.innerHTML += "t1:<span style=\"color: red\">Corrupted link!</span>";
			}
		};
	}
	txt = content.innerHTML.split("\n");
	donum = 0;
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
	text = "";
	while (donum < txt.length) {
		text += txt[donum] + "\n";
		donum ++;
	}
	content.innerHTML = text;
}
