// ==UserScript==
// @name         Curator Links on Scratch
// @namespace    scratch.mit.edu/users/Hans5958
// @version      1
// @description  Creates a clickable link for the curator on the front page.
// @copyright    Hans5958
// @license      MIT
// @match        http*://scratch.mit.edu/
// @grant        none
// ==/UserScript==

var curator = document.getElementsByTagName("h4")[7].innerHTML.slice(20, 99);
document.getElementsByTagName("h4")[7].innerHTML = "Projects Curated by <a class=\"curator-links\" href=\"https://scratch.mit.edu/users/" + curator + "\">" + curator + "</a>";
document.getElementsByTagName("head")[0].innerHTML += "<style>a.curator-links {color: #6b6b6b; font-weight: bold;} a.curator-links:hover {text-decoration: underline;}</style>"
