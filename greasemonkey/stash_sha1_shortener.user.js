// ==UserScript==
// @name     Stash SHA1 Shortener
// @author   George Christou
// @include  http*://stash.gechr.io/projects/*
// ==/UserScript==

// Trim all SHA-1 sums to 11 characters
function replace_links() {
	var a = document.getElementsByTagName("a");
	for (var i = 0; i < a.length; i++) {
		a[i].href = a[i].href.replace(/(\/commits\/[a-zA-Z0-9]{11})[^/#]*/, "$1");
	}
}
// Replace links on initial page load
replace_links();
// Replace links on subsequent DOMNodeInserted events (to handle dynamically inserted elements)
document.addEventListener('DOMNodeInserted', replace_links, false);
