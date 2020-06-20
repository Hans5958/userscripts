// ==UserScript==
// @name         IndiHome Landing Page Skipper
// @namespace    hans5958.github.io
// @version      1
// @description  Bypasses the IndiHome landing page that appeares on HTTP destinations.
// @copyright    Hans5958
// @license      MIT
// @match        http://welcome.indihome.co.id
// @grant        none
// ==/UserScript==

function a() {
    var href = document.querySelector(".footer a").href
    console.log(href)
    if (!href) {a(); return}
    document.body.innerHTML="<h1>Skipping landing page...</h1>"
    window.title = "Skipping landing page..."
    document.location.replace(href)
}

a()
