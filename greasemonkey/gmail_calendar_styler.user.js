// ==UserScript==
// @name     Gmail Calendar Styler
// @author   George Christou
// @include  http*://calendar.google.com/calendar/mgadget*
// ==/UserScript==

GM_addStyle('\
  .dp-cell { color: #000 !important; }\
  .gadget-header { background-color: #f5f5f5 !important; }\
  .details-container { color: #444 !important; background-color: #fff !important; }\
  .date-label { color: #fff; background-color: #555 !important; }\
  .day { color: #444; background-color: #f5f5f5 !important; }\
  .menu-link { color: #5BA9FF; font-weight: bold; text-decoration: none; }\
');
