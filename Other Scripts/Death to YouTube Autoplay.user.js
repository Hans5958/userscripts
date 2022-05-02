// ==UserScript==
// @name          Death to YouTube Autoplay!
// @include       https://www.youtube.com/*
// @description   Forcefully disable and hide autoplay on YouTube, at all, like nothing happened before. Improved from https://greasyfork.org/en/scripts/32159-youtube-disable-suggested-autoplay/
// @version       1.0.0
// @author        Hans5958, wOxxOm
// @license       MIT
// @run-at        document-start
// ==/UserScript==

let next, cancel, toggle;

document.addEventListener('DOMContentLoaded', processPage)
window.addEventListener('yt-navigate-finish', processPage)
window.addEventListener('spfdone', processPage)

function processPage(e) {
    next = document.querySelector('.ytp-upnext')
    cancel = document.querySelector('.ytp-upnext-cancel-button')
    toggle = document.querySelector('div.ytp-autonav-toggle-button')
    if (next) {
        if (getComputedStyle(next).display != 'none') cancelNext()
        else new MutationObserver((_, ob) => {
            cancelNext()
            ob.disconnect()
        }).observe(next, {attributes: true, attributeFilter: ['style']})
    }
    if (toggle) {
        if (toggle.getAttribute('aria-checked') !== 'false') cancelToggle()
        else new MutationObserver((_, ob) => {
            cancelToggle()
            ob.disconnect()
        }).observe(toggle, {attributes: true, attributeFilter: ['aria-checked']})
    }
}

function cancelNext() {
    if (cancel) cancel.click()
    next.remove()
    // console.log('Canceled suggested video autoplay')
}

function cancelToggle() {
    if (toggle) {
        toggle.click()
        toggle.parentElement.parentElement.style.display = "none"
    }
    // console.log('Canceled autoplay');
    setTimeout(_ => {
        if (toggle.getAttribute('aria-checked') !== 'false') cancelToggle()
    }, 100)
}
