// ==UserScript==
// @name         Remove Description Box on Scratch
// @namespace    scratch.mit.edu/users/Hans5958
// @version      4
// @description  Remove the instruction/notes box on Scratch
// @copyright    Hans5958
// @license      MIT
// @match        http*://scratch.mit.edu/projects/*
// @grant        none
// ==/UserScript==

window.onload = function() {
    var r = document.getElementsByClassName("project-textlabel")
    var x = y => " <a class='remove' onclick='var e=e=>document.getElementsByClassName(e),r=e(\"project-textlabel\"),d=e(\"description-block\");d[" + y + "].remove(),e(\"remove\")[0].hidden=!0;'>❌</a>"
    r[0].innerHTML += x(0)
    r[1].innerHTML += x(1)
}