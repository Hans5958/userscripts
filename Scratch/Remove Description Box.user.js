// ==UserScript==
// @name         Remove Description Box on Scratch
// @namespace    scratch.mit.edu/users/Hans5958
// @version      3
// @description  Remove the instruction/notes box on Scratch
// @copyright    Hans5958
// @license      MIT
// @match        http*://scratch.mit.edu/projects/*
// @grant        none
// ==/UserScript==

window.onload = function() {
    var r = document.getElementsByClassName("project-textlabel")
    r[0].innerHTML += " <a class='remove' onclick='var e=e=>document.getElementsByClassName(e),r=e(\"project-textlabel\"),d=e(\"description-block\");d[1].remove(),e(\"remove\")[0].hidden=!0;'>❌</a>"
    r[1].innerHTML += " <a class='remove' onclick='var e=e=>document.getElementsByClassName(e),r=e(\"project-textlabel\"),d=e(\"description-block\");d[2].remove(),e(\"remove\")[0].hidden=!0;'>❌</a>"
}