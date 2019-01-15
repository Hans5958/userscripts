// ==UserScript==
// @name         Remove Description Box on Scratch
// @namespace    scratch.mit.edu/users/Hans5958
// @version      2
// @description  Remove the instruction/notes box on Scratch
// @copyright    Hans5958
// @license      MIT
// @match        http*://scratch.mit.edu/projects/*
// @grant        none
// ==/UserScript==

var remove = document.getElementsByClassName("project-textlabel")
var desbox = document.getElementsByClassName("description-block")
remove[0].innerHTML += " <a class='remove' href=javascript:cleany(0)>❌</a>"
remove[1].innerHTML += " <a class='remove' href=javascript:cleany(1)>❌</a>"
function cleany(x) {desbox[x].remove(),document.getElementsByClassName("remove")[0].hidden=true}
