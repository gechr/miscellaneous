// ==UserScript==
// @name     Jenkins Release Tweaks
// @author   George Christou
// @include  http*://jenkins.gechr.io/view/*
// ==/UserScript==

(function () {
	var versionParser = {
		set_version : function() {
			var release_version = document.getElementsByName("releaseVersion")[0].value;
			var development_version = document.getElementsByName("nextVersion")[0].value;
			if (release_version == development_version) {
				var major_minor = development_version.split(".");
				var patch_suffix = major_minor[major_minor.length - 1].split(/\-(.+)?/);
				major_minor.pop();
				var next_version = major_minor.join(".") + "." + (++patch_suffix[0]) + "-" + patch_suffix[1] + "-SNAPSHOT";
				document.getElementsByName("nextVersion")[0].value = next_version;
			}
		}
	}
	versionParser.set_version();

	var vcsParser = {
		element_id   : 'cb3',
		attempts     : 0,
		max_attempts : 10,
		timeout      : 333,
		hide_element : function() {
			if (vcsParser.attempts >= vcsParser.max_attempts) return;
			var ready = document.getElementById(vcsParser.element_id);
			if (ready) {
				updateOptionalBlock(vcsParser.element_id, true);
				document.getElementById(vcsParser.element_id).checked = false;
				return;
			}
			vcsParser.attempts++;
			setTimeout(vcsParser.hide_element, vcsParser.timeout);
		}
	}
	vcsParser.hide_element();
})();

