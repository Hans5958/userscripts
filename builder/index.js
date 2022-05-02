import fs from "fs-extra"
import { parseUserscript, parseUserstyle, stringifyUserscript, stringifyUserstyle } from "./parser.js"

const distFolder = "dist/"
const baseUrl = "https://hans5958.github.io/userscripts/"
const homepageUrl = "https://github.com/Hans5958/userscripts"
const supportUrl = "https://github.com/Hans5958/userscripts/issues"

fs.removeSync(distFolder)
fs.ensureDir(distFolder)

let readmeText = fs.readFileSync("README.md", "utf-8")

const { scripts, styles } = fs.readJsonSync('builder/db.json')
let sectionText = ""

Object.entries(scripts).forEach(([categoryId, value]) => {
	const {
		entries: categoryEntries,
		name: categoryName,
		description: categoryDescription
	} = value

	sectionText += `#### ${categoryName}\n\n${categoryDescription}\n\n| Name | Version | License | Install |\n| - | - | - | - |\n`

	Object.entries(categoryEntries).forEach(([id, options]) => {
		let exportName = `js/${id}.user.js`
		const { fileName, license, deprecated } = options
		const userscript = parseUserscript(fs.readFileSync(fileName, 'utf-8'))
		const meta = userscript.meta
		meta.namespace = "Hans5958"
		meta.license = license || "MIT"
		meta.updateURL = baseUrl + exportName
		meta.downloadURL = meta.updateURL
		meta.homepageURL = homepageUrl
		meta.supportURL = supportUrl
		fs.outputFileSync(distFolder + exportName, stringifyUserscript(userscript))
	
		sectionText += `| ${meta.name + (deprecated ? " 👎" : "")} | ${meta.version} | ${meta.license} | [Install](${meta.updateURL}) |` + "\n"
	})

	sectionText += "\n"
})

readmeText = readmeText.replace(/<!-- USERSCRIPTS START -->.+<!-- USERSCRIPTS END -->/s, "<!-- USERSCRIPTS START -->\n" + sectionText.trim() + "\n<!-- USERSCRIPTS END -->")

sectionText = ""

Object.entries(styles).forEach(([categoryId, value]) => {
	const {
		entries: categoryEntries,
		name: categoryName,
		description: categoryDescription
	} = value

	sectionText += `#### ${categoryName}\n\n${categoryDescription}\n\n| Name | Version | License | Install |\n| - | - | - | - |\n`

	Object.entries(categoryEntries).forEach(([id, options]) => {
		let exportName = `css/${id}.user.css`
		const { fileName, license, deprecated } = options
		const userscript = parseUserstyle(fs.readFileSync(fileName, 'utf-8'))
		const meta = userscript.meta
		meta.namespace = "Hans5958"
		meta.license = license || "MIT"
		meta.updateURL = baseUrl + exportName
		meta.homepageURL = homepageUrl
		meta.supportURL = supportUrl
		fs.outputFileSync(distFolder + exportName, stringifyUserstyle(userscript))
	
		sectionText += `| ${meta.name + (deprecated ? " 👎" : "")} | ${meta.version} | ${meta.license} | [Install](${meta.updateURL}) |` + "\n"
	})

	sectionText += "\n"
})

readmeText = readmeText.replace(/<!-- USERSTYLES START -->.+<!-- USERSTYLES END -->/s, "<!-- USERSTYLES START -->\n" + sectionText.trim() + "\n<!-- USERSTYLES END -->")

fs.outputFileSync("README.md", readmeText)