// ==UserScript==
// @name         Akinator Progression Visualizer
// @namespace    Hans5958
// @version      1.0.2
// @description  Adds visualization of Akinator's progression (aka. certainity, probability). Inspired by the moving vertical background of the app's old version.
// @author       Hans5958
// @match        https://*.akinator.com/game
// @grant        none
// @license      MIT
// ==/UserScript==

let lastData = {}
const sliderElement = document.createElement('div')
const sidebarElement = document.querySelector('div.col-md-2:nth-child(3), div.col-md-2:nth-child(4)')

sliderElement.innerHTML = `<div style="position: absolute; height: 100%; ">
<div style="height: 100%; display: flex; flex-direction: row-reverse; ">
<div style="width: 2rem; border: black solid 0.125rem; z-index: 200; display: flex; flex-direction: column-reverse; height: 100%; z-index: 10; ">
<div id="progression-slider" style="background-color: black; display: flex; height: 0%; transition: height 0.25s ease-in-out; "></div>
<div id="progression-text" style="position: relative; text-align: right; right: 11rem; margin-bottom: -14px; width: 10rem; bottom: 0%;">0%</div>
</div>
</div>
</div>`
sliderElement = sliderElement.firstChild
sidebarElement.parentElement.style.display = "flex"
sidebarElement.innerHTML = ""
sidebarElement.appendChild(sliderElement)
sidebarElement.style.display = "flex"
sidebarElement.style.flexDirection = "row-reverse"

setInterval(() => {
    const currentData = $.elokWrapperStorage.get("gameData")
    if (currentData.step === lastData.step && currentData.progression === lastData.progression) return
    lastData = currentData
    const currentProgression = currentData.progression || 0
    const currentStep = currentData.step || 0
//  console.info(`Step: ${currentStep}\nProgression: ${currentProgression}%`)
    sliderElement.querySelector('#progression-slider').style.height = currentProgression + "%"
//  sliderElement.querySelector('#progression-text').style.bottom = currentProgression + "%"
    sliderElement.querySelector('#progression-text').textContent = currentProgression + "%"
//  if (gameData.nom) sliderElement.querySelector('#progression-text').textContent = "✓ " + sliderElement.querySelector('#progression-text').textContent
}, 100)