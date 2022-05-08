// ==UserScript==
// @name         Shorter Scratch Stats Links
// @namespace    scratch.mit.edu/users/Hans5958
// @version      1
// @description  Quick links on profiles to ScratchStats.com and my Scratch Stats. (Deprecated: Use Scratch Addons instead.)
// @author       Hans5958
// @license      MIT
// @match        https://scratch.mit.edu/users/*
// @grant        none
// ==/UserScript==

var u = $("h2").html(), t1 = $("span.location"), t2 = t1[0]
t1.addClass("group")
t1.css("display", "inline")
t2.outerHTML = `<br />${t2.outerHTML}<a class="group" href="https://scratchstats.com/${u}" target="_blank">ScratchStats.com</a><a href="https://hans5958.github.io/mini-htmls/scratch-stats#${u}" target="_blank">H's Scratch Stats</a>`