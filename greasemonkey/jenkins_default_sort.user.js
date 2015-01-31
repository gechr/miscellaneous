// ==UserScript==
// @name     Jenkins Default Sort
// @author   George Christou
// @include  http*://jenkins.gechr.io/view/*
// ==/UserScript==

(function () {
	var sorter = {
		get_by_xpath  : function (path) {
			return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		},
		ready_element : '//*[@id="projectstatus"]/tbody/tr[1]/th[4]/a/span',
		attempts      : 0,
		max_attempts  : 10,
		timeout       : 333,
		sort          : function() {
			if (sorter.attempts >= sorter.max_attempts) return;
			var ready_arrow = sorter.get_by_xpath(sorter.ready_element);
			if (ready_arrow) {
				var arrow = ready_arrow.innerText;
				console.log(arrow);
				var sort_header = sorter.get_by_xpath('//*[@id="projectstatus"]/tbody/tr[1]/th[4]/a');
				if (arrow.indexOf('↑') > -1) { return; }
				if (arrow.indexOf('↓') > -1) { sort_header.click(); return; }
				sort_header.click(); return;
			}
			sorter.attempts++;
			setTimeout(sorter.sort, sorter.timeout);
		}
	}
	sorter.sort();
})();

