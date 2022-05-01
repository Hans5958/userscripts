// ==UserScript==
// @name         Akinator Progression Visualizer
// @namespace    Hans5958
// @version      1.0.0
// @description  A userscript to visualize Akinator's progression (or certainity/probability). Inspired by the moving vertical background of the app's old version.
// @author       Hans5958
// @match        https://*.akinator.com/game
// @grant        none
// ==/UserScript==

let lastData = ""
let sliderElement = document.createElement('div')
let sidebarElement = document.querySelector('div.col-md-2:nth-child(3)')

sliderElement.innerHTML = `<div style="position: absolute;height: 100%;"><div style="height: 100%;display: flex;flex-direction: row-reverse;"><div style="width: 2rem;border: black solid 0.125rem;z-index: 200;display: flex;flex-direction: column-reverse;height: 100%;z-index: 10;"><div id="progression-slider" style="background-color: black; display: flex; height: 0%;"></div><div id="progression-text" style="position: relative; text-align: right; right: 11rem; margin-bottom: -14px; width: 10rem;bottom: 0%;">0%</div></div></div></div>`
sliderElement = sliderElement.firstChild
sidebarElement.parentElement.style.display = "flex"
sidebarElement.innerHTML = ""
sidebarElement.appendChild(sliderElement)
sidebarElement.style.display = "flex"
sidebarElement.style.flexDirection = "row-reverse"

setInterval(() => {
    let gameData = $.elokWrapperStorage.get("gameData")
    let currentProgression = gameData.progression || 0
    let currentStep = gameData.step || 0
    let currentData = JSON.stringify(gameData)
    if (currentData === lastData) return
    lastData = currentData
    //console.info(`Step: ${currentStep}\nProgression: ${currentProgression}%`)
    sliderElement.querySelector('#progression-slider').style.height = currentProgression + "%"
//  sliderElement.querySelector('#progression-text').style.bottom = currentProgression + "%"
    sliderElement.querySelector('#progression-text').textContent = currentProgression + "%"
//  if (gameData.nom) sliderElement.querySelector('#progression-text').textContent = "✓ " + sliderElement.querySelector('#progression-text').textContent
}, 100)