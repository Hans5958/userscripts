// ==UserScript==
// @name         YouTube Screenshot
// @namespace    https://github.com/gurumukhi/youtube-screenshot/blob/master/content_script.js
// @version      1.0.0
// @description  Adds a button to get a screenshot of YouTube videos. Based on https://github.com/gurumukhi/youtube-screenshot.
// @author       Hans5958, gurumkhi
// @license      MIT
// @match        https://www.youtube.com/*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

let loggingEnabled = false
let isInit = false

const screenshotButton = document.createElement("button")
screenshotButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="60%" style="padding: 23.75% 20% 25%;"><path d="M0 0h24v24H0z" fill="none"/><circle cx="12" cy="12" r="3.2"/><path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>'
screenshotButton.classList.add("ytp-button")
screenshotButton.classList.add("ytp-screenshot-button")
screenshotButton.style.width = "36"
screenshotButton.removeEventListener("click", captureScreenshot)
screenshotButton.addEventListener("click", captureScreenshot)

const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d")

const downloadAnchor = document.createElement("a")
downloadAnchor.style.display = "none"

// Take screenshot
function captureScreenshot() {
    _log("Capturing screenshot")
    const video = document.querySelector("video")
    const initialWidth = video.style.width
    const initialHeight = video.style.height
    const videoWidth = video.videoWidth
    const videoHeight = video.videoHeight
    video.style.width = videoWidth
    video.style.height = videoHeight
    canvas.width = parseInt(videoWidth)
    canvas.height = parseInt(videoHeight)
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
    video.style.width = initialWidth
    video.style.height = initialHeight
    downloadFile(canvas)
}

function downloadFile(canvas) {
    downloadAnchor.href = canvas.toDataURL("image/jpeg")
    downloadAnchor.download = getFileName()
    document.body.appendChild(downloadAnchor)
    downloadAnchor.click()
    document.body.removeChild(downloadAnchor)
}

function getFileName() {
    const time = document.querySelector('.ytp-time-current').textContent
    return `${window.document.title} - ${time.replace(":", "-")}.jpeg`

    // const seconds = document.getElementsByClassName("video-stream")[0].currentTime
    // const mins = seconds / 60
    // const secs = seconds % 60
    // const m = mins.toString()
    // const s = secs.toString()
    // const mm = m.split(".")[0]
    // let ss = s.split(".")[0]
    // if (ss.length == 1) {
    //     ss = "0" + ss
    // }
    // return `${window.document.title} - ${mm}-${ss}.jpeg`
}

function addButtonOnYoutubePlayer() {
    _log("Adding screenshot button")
    var youtubeRightButtonsDiv = document.querySelector(".ytp-right-controls")
    youtubeRightButtonsDiv.insertBefore(screenshotButton, youtubeRightButtonsDiv.querySelector('.ytp-subtitles-button'))
}

function _log(message) {
    if (loggingEnabled) {
        console.log(`Youtube Screenshot Addon: ${message}`)
    }
}

function init() {
    if (isInit) {
        _log("NOT SETTING")
        return
    }

    _log("SETTING")
    isInit = true
    // Initialization
    _log("Addon initializing!")
    addButtonOnYoutubePlayer()
    addEventListener()
}

if (document.location.pathname.startsWith("/watch")) {
    init()
} else {
    _log("listening yt-navigate-finish")
    window.addEventListener('yt-navigate-finish', event => {
        _log("yt-navigate-finishs triggered")
        if (document.location.pathname.startsWith("/watch")) {
            init()
        }
    })
}
