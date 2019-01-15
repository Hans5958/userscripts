// ==UserScript==
// @name         Scratch Notifier Shortcut
// @namespace    scratch.mit.edu/users/Hans5958
// @version      1
// @description  Creates a ScratchNotifier.com and my Scratch Notifier shortcut link on Scratch.
// @copyright    Hans5958
// @license      MIT
// @match        http*://scratch.mit.edu/users/*
// @grant        none
// ==/UserScript==

var css = ".header-text .profile-details .group{border-right:1px solid #ccc;margin:0 5px;padding:0}"
if("undefined"!=typeof GM_addStyle)GM_addStyle(css);else if("undefined"!=typeof PRO_addStyle)PRO_addStyle(css);else if("undefined"!=typeof addStyle)addStyle(css);else{var node=document.createElement("style");node.type="text/css",node.appendChild(document.createTextNode(css));var heads=document.getElementsByTagName("head");0<heads.length?heads[0].appendChild(node):document.documentElement.appendChild(node)}

var x = $(".profile-details")
var y = x.children()
var a = y[0].innerHTML.match(/\w+/g)[0]
var b = y[1].outerHTML
var c = y[2].innerHTML
var d = $("h2").html()
x.html(a + "<span class=\"group\"><\/span>Joined " + b + " ago<span class=\"group\"><\/span>" + c + "<br><a href=\"https:\/\/scratchstats.com#" + d + "\">ScratchStats.com<\/a><span class=\"group\"><\/span><a href=\"https:\/\/hans5958.github.io\/mini-htmls\/scratch-stats#" + d + "\">My Scratch Stats<\/a>")
