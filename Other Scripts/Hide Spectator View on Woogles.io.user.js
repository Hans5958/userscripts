// ==UserScript==
// @name         Hide Spectator Info on Woogles.io
// @namespace    Hans5958
// @version      1.0.0
// @description  Hides player-specific information from observer/spectator view. Good for stopping stream sniping when broadcasting live. Add "hidespec", "hidelive" or "hidestream" on the notepad to hide it.
// @author       Hans5958
// @license      MIT
// @match        https://woogles.io/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

const triggerWords = ["hidespec", "hidelive", "hidestream"]
let triggerWordUsed = ""

const styleEl = document.createElement("style")
styleEl.textContent = `#rack .tile p, .play p:nth-child(2), #pool .pool { display: none; }`

const hideCallback = event => {
	toggleHideSpec(event.target)
}

const getTriggerWordUsed = text => {
	return triggerWords.filter(word => text.includes(word))[0]
}

const toggleHideSpec = notepad => {
	const newTriggerWordUsed = getTriggerWordUsed(notepad.value)
	if (triggerWordUsed === newTriggerWordUsed) return
	triggerWordUsed = newTriggerWordUsed
	if (triggerWordUsed && !document.head.contains(styleEl)) {
		document.head.appendChild(styleEl)
	} else {
		document.head.removeChild(styleEl)
	}
}

const observerCallback = () => {
	const notepadEl = document.querySelector(".notepad")
	if (!notepadEl) return
	notepadEl.removeEventListener('input', hideCallback)
	notepadEl.addEventListener('input', hideCallback)
	if (triggerWordUsed && !getTriggerWordUsed(notepadEl.value)) notepadEl.value += triggerWordUsed
	toggleHideSpec(notepadEl)
}

const observer = new MutationObserver(observerCallback)
observer.observe(document.body, {
	childList: true,
	subtree: true
})
