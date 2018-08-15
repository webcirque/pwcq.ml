window.onload = function () {
	header = document.getElementById("ecs-header");
	header.style.width = (window.outerWidth) + "px";
	content = document.getElementById("ecs-content");
	content.style.width = (window.outerWidth - 30) + "px";
	encr = location.hash.replace("#","");
	if (encr != "" ) {
		//If URL has something to parse, it will parse.
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
