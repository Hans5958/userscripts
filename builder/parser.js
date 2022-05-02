// TODO create a npm module of it

/**
 * Parses the userscript string into an object.
 * @param {string} string 
 * @returns {object} The userscript object
 */
export function parseUserscript(string) {
	return {
		type: "userscript",
		...parseCustom(string, /\B(\/\/ ==UserScript==\r?\n([\S\s]*?)\r?\n\/\/ ==\/UserScript==)([\S\s]*)/)
	}
}

/**
 * Parses the userstyle string into an object.
 * @param {string} string 
 * @returns {object} The userstyle object
 */
export function parseUserstyle(string) {
	return {
		type: "userstyle",
		...parseCustom(string, /\B(\/\* ==UserStyle==\r?\n([\S\s]*?)\r?\n==\/UserStyle== \*\/)([\S\s]*)/)
	}
}

/**
 * Parses the .user.* string into an object with given RegEx.
 * @param {string} string
 * @param {RegExp} blocksReg 
 * @returns {object}
 */
function parseCustom(string, blocksReg) {

	var blocks = string.match(blocksReg)

	if (!blocks) {
		return null
	}

	var metablock = blocks[1]
	var metas = blocks[2]
	var code = blocks[3]

	var meta = {}
	metas.split('\n').forEach(line => {
		var parts = line.match(/@([\w-]+)\s+(.+)/)
		if (parts) {
			meta[parts[1]] = meta[parts[1]] || []
			meta[parts[1]].push(parts[2])
		}
	})

	Object.keys(meta).forEach(key => {
		if (meta[key].length === 1) meta[key] = meta[key][0]
	})

	return {
		meta: meta,
		content: code
	}

}

/**
 * Stringify the userscript object into a string.
 * @param {object} obj The userscript object
 * @returns The userscript string
 */
export function stringifyUserscript(obj, {
	alignKeys = true
} = {}) {
	let { meta, content } = obj
	const maxKeyLength = alignKeys ? Math.max.apply(null, Object.keys(meta).map(k => k.length)) : 0
	meta = Object.keys(meta).map(key => {
		return getLinesUserscript(key, meta[key], maxKeyLength)
	}).join('')
	return '// ==UserScript==\n' + meta + '// ==/UserScript==' + content
}

/**
 * Stringify the userstyle object into a string.
 * @param {object} obj The userstyle object
 * @returns The userstyle string
 */
export function stringifyUserstyle(obj, {
	alignKeys = true
} = {}) {
	let { meta, content } = obj
	const maxKeyLength = alignKeys ? Math.max.apply(null, Object.keys(meta).map(k => k.length)) : 0
	meta = Object.keys(meta).map(key => {
		return getLinesUserstyle(key, meta[key], maxKeyLength)
	}).join('')

	return '/* ==UserStyle==\n' + meta + '// ==/UserStyle==' + content
}

/**
 * 
 * @param {string} key 
 * @param {string} value 
 * @param {number} maxKeyLength 
 * @returns 
 */
function getLines(key, value, maxKeyLength) {
	// For field which has multiple values, like `match`
	if (Array.isArray(value)) {
		return value.map(value => {
			return getLines(key, value, maxKeyLength)[0]
		})
	}
	return ["@" + key.padEnd(maxKeyLength) + ' ' + value]
}

function getLinesUserscript(...args) {
	return getLines(...args).map(line => "// " + line).join("\n") + "\n"

}

function getLinesUserstyle(...args) {
	return getLines(...args).join("\n") + "\n"
}

