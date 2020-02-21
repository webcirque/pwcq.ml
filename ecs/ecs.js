document.body.style.width = (window.outerWidth) + "px";
header = document.getElementById("ecs-header");
header.style.width = (window.outerWidth) + "px";
content = document.getElementById("ecs-content");
content.style.width = (window.outerWidth - 30) + "px";
function styler() {
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
styler();
encr = location.hash.replace("#","");
if (encr != "" ) {
	//If URL has something to parse, it will parse.
	console.log("[ECS] Get text to parse.");
	content.innerHTML = "t1:Parsing your link...";
	_import(":base64").main = function () {
try{
		console.log("[ECS] Base64");
		b64 = new Base64();
		b64.mode(2);
		elist = b64.decode(encr);
		elist = elist.split(":");
		b64.mode(0);
		console.log("[ECS] Encryption method: " + elist[1] + ".");
		console.log("[ECS] Encryption key: " + elist[0] + ".");
		ctt = elist[2];
		console.log("[ECS] Encrypted text: " + ctt + ".");
		enclist = ["base64","aes","des","rabbit"];
		if (elist[1].toLowerCase() == "base64") {
			console.log("[ECS] No need to decrypt");
			context = b64.decode(ctt);
			console.log("[ECS] Decrypted!");
			content.innerHTML = context;
			styler();
		} else if (elist[1].toLowerCase() == "sem") {
			console.log("[ECS]Need to decrypt by " + elist[1].toUpperCase() + ".");
			
		} else if (enclist.indexOf(elist[1].toLowerCase()) != -1) {
			console.log("[ECS]Need to decrypt by " + elist[1].toUpperCase() + ".");
			_import(":crypto").main = function () {
				console.log("[ECS] Crypto");
			}
			styler();
		} else {
			console.error("[ECS]Unknown encryption!");
			content.innerHTML += "t1:<span style=\"color: red\">Corrupted link!</span>";
			styler();
		}
} catch (e) {alert(e.stack)};
	}
} else {
	elist = ["0","LLL",""];
}
window.onload = function () {
	// Onload
}
