// ==UserScript==
// @name         viewvc tag search
// @author       George Christou
// @description  adds an input box to viewvc for faster tag/branch selection
// @version      1.0
// @require      http://code.jquery.com/jquery-1.9.1.js
// @require      http://code.jquery.com/ui/1.10.3/jquery-ui.js
// @resource     jquery_css http://code.jquery.com/ui/1.10.3/themes/smoothness/jquery-ui.css
// @include      https://viewvc.gechr.io/cgi-bin/viewvc.cgi/*
// @grant        GM_addStyle
// @grant        GM_getResourceText
// ==/UserScript==

function do_submit(value) {
	if ($.inArray(value, revisions) != -1) {
		$(revision_dropdown).val(value)
		$("form:first").submit();
	}
}

var revision_dropdown = $("select[name=pathrev]:first");

revisions = [];
$("optgroup").each(function(i, group) {
	$(group).find("option").each(function(j, option) {
		revisions.push($(option).val());
	});
});
revisions.sort();

var input = $("<input type='text' id='revision_input' />")
var rows = $("table.auto:first tr td:contains('Sticky Tag')").next('td');
rows.append(input);

rev_input = $("#revision_input");
rev_input.autocomplete({
	source: revisions,
	select: function(event, ui) {
		do_submit(ui.item.value);
	}
});

$(rev_input).keypress(function(e) {
	if(e.which == 13) {
		do_submit($(rev_input).val());
	}
});

var css = GM_getResourceText("jquery_css");
GM_addStyle(css);
