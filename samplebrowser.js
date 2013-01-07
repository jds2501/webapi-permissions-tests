function getScreenshot() {
	var browser = document.getElementById('browser');
	var result = browser.getScreenshot(300, 400);
	
	result.onsuccess = function(obj) {
		alert("I got a screenshot");
	};

	result.onerror = function(err) {
		alert("I fail miserably!");
	};
}

window.addEventListener("DOMContentLoaded", function() {
	document.getElementById('browsertest').onclick = getScreenshot;
});