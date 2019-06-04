// ==UserScript==
// @name         Show all TribunNews pages
// @namespace    hans5958.github.io
// @version      1
// @description  Shows all TributNews pages.
// @copyright    Hans5958
// @license      MIT
// @match        http*://www.tribunnews.com/*
// @grant        none
// ==/UserScript==

var init = () => {
    $("body").html('<h1 style="font-size:42px">Detected pages. Redirecting!</h1>')
    document.title = "Redirecting!"
    window.location = window.location + "?page=all"
}
$(function(){if ($("#pagecurrent") && !location.search) init()})

