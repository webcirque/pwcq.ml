// Register Service Worker
if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js');
}

// Wait till page finished loading
document.onreadystatechange = function () {
	if (this.readyState.toLowerCase() == "interactive") {
		// Try to load some elements
		contentCards = Array.from(document.getElementsByClassName("content-card"));
		navTabs = Array.from(document.querySelectorAll("ul.nav-tabs li"));
		resizeElements();
	} else if (this.readyState.toLowerCase() == "complete") {
		resizeElements();
	};
};

// If window resizes
window.onresize = function () {
	resizeElements();
}

// Resize elements
function resizeElements () {
	// Resizing cards
	let heightArray = [];
	contentCards.forEach((e, i) => {
		e.style.height = "";
		if (innerWidth <= 360) {
			e.style.width = (innerWidth - 52).toString() + "px";
		} else if (innerWidth <= 840) {
			e.style.width = (innerWidth - 34).toString() + "px";
		} else {
			e.style.width = (innerWidth / 2 - 34).toString() + "px";
		};
		heightArray.push(parseInt(getComputedStyle(e).height));
	});
	contentCards.forEach((e, i) => {
		if (innerWidth >= 840) {
			let currentLine = Math.floor(i / 2);
			let currentHeight = Math.max(...heightArray.slice(currentLine, currentLine + 1));
			e.style.height = currentHeight.toString() + "px";
		}
	});
	// Resizing tabs
	navTabs.forEach((e) => {
		if (innerWidth <= 840) {
			e.style.width = (innerWidth - 34).toString() + "px";
		} else {
			e.style.width = "";
		}
	});
	// Change background behaviour
	if ((innerWidth / innerHeight) < 0.75) {
		document.body.style.backgroundSize = "auto";
	} else {
		document.body.style.backgroundSize = "";
	}
}