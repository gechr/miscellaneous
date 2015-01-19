// ==UserScript==
// @name     GitWeb SHA1 Shortener
// @author   George Christou
// @include  http*://gitweb.gechr.io/?p=*.git*
// ==/UserScript==

// Trim all SHA-1 sums to 7 characters
var a = document.getElementsByTagName("a");
for (var i = 0; i < a.length; i++) {
	a[i].href = a[i].href.replace(/(;h(b|p|pb)?=[a-zA-Z0-9]{7})[^;]*/g, "$1");
}
