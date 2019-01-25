// Register Service Worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js');
}

// Wait till page finished loading
document.onreadystatechange = function () {
	if (this.readyState.toLowerCase() == "interactive") {
		// Try to load some elements
		contentCards = Array.from(document.getElementsByClassName("content-card"))
		resizeElements();
	}
}

// If window resizes
window.onresize = function () {
	resizeElements();
}

// Resize elements
function resizeElements () {
	let heightArray = [];
	contentCards.forEach((e, i) => {
		if (innerWidth < 840) {
			e.style.width = (innerWidth - 52).toString() + "px";
		} else {
			e.style.width = (innerWidth / 2 - 42).toString() + "px";
		};
		heightArray.push(e.clientHeight);
	});
	contentCards.forEach((e, i) => {
		if (innerWidth >= 840) {
			let currentLine = Math.floor(i / 2);
			let currentHeight = Math.max(...heightArray.slice(currentLine, currentLine + 1));
			e.style.height = currentHeight.toString() + "px";
		}
	});
}