// ==UserScript==
// @name         Remove Description Box on Scratch
// @namespace    scratch.mit.edu/users/Hans5958
// @version      1
// @description  Remove the instruction/notes box on Scratch
// @copyright    Hans5958
// @license      MIT
// @match        http*://scratch.mit.edu/projects/*
// @grant        none
// ==/UserScript==

document.getElementsByTagName("b")[0].innerHTML = "Instructions <a href=javascript:$('#description')[0].attributes.style='height:310px',$('.text-block')[0].remove()>❌</a>";
document.getElementsByTagName("b")[1].innerHTML = "Notes and Credits <a href=javascript:$('#instructions')[0].attributes.style='height:310px',$('.tooltip-target')[0].remove()>❌</a>";