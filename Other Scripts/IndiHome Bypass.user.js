// ==UserScript==
// @name         IndiHome Bypass
// @namespace    hans5958.github.io
// @version      1
// @description  Bypasses the IndiHome landing page that appeares on HTTP destinations.
// @copyright    Hans5958
// @license      MIT
// @match        http://welcome.indihome.co.id/landing-page
// @grant        none
// ==/UserScript==

function a() {
    if (typeof document.getElementsByClassName("button-lanjut") !== "undefined") {
        window.title = "Bypassing landing page..."
        window.location = document.getElementsByClassName("button-lanjut")[0].parentElement.href
    } else {
        a()
    }
}

a()

