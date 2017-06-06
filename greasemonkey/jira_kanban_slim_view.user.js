// ==UserScript==
// @name     JIRA Kanban Slim View
// @author   George Christou
// @include  https://*.*/secure/RapidBoard.jspa?rapidView=*
// @grant    GM_addStyle
// ==/UserScript==

GM_addStyle(
  '.ghx-issue-content { min-height: 0px !important; padding: 10px 10px 10px 38px !important; }'
);
