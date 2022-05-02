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
let section1Text = ""

Object.entries(scripts).forEach(([categoryId, value]) => {
	const {
		entries: categoryEntries,
		name: categoryName,
		description: categoryDescription
	} = value

	section1Text += `#### ${categoryName}\n\n${categoryDescription}\n\n<table>
<tr>
	<th>Name</th>
	<th>Version</th>
	<th>License</th>
	<th>Install</th>
</tr>`

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

		section1Text += `
<tr>
	<td>${meta.name + (deprecated ? " 👎" : "")}</td>
	<td>${meta.version}</td>
	<td>${meta.license}</td>
	<td><a href=${meta.updateURL}>Install</a></td>
</tr>
<tr>
	<td colspan="4">${meta.description}</td>
</tr>\n`
	})

	section1Text += "\n</table>\n\n"
})

readmeText = readmeText.replace(/<!-- USERSCRIPTS START -->.+<!-- USERSCRIPTS END -->/s, "<!-- USERSCRIPTS START -->\n" + section1Text.trim() + "\n<!-- USERSCRIPTS END -->")


let section2Text = ""

Object.entries(styles).forEach(([categoryId, value]) => {
	const {
		entries: categoryEntries,
		name: categoryName,
		description: categoryDescription
	} = value

	section2Text += `#### ${categoryName}\n\n${categoryDescription}\n\n<table>
<tr>
	<th>Name</th>
	<th>Version</th>
	<th>License</th>
	<th>Install</th>
</tr>`

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

		section2Text += `
<tr>
	<td>${meta.name + (deprecated ? " 👎" : "")}</td>
	<td>${meta.version}</td>
	<td>${meta.license}</td>
	<td><a href=${meta.updateURL}>Install</a></td>
</tr>
<tr>
	<td colspan="4">${meta.description}</td>
</tr>\n`
	})

	section2Text += "\n</table>\n\n"
})

readmeText = readmeText.replace(/<!-- USERSTYLES START -->.+<!-- USERSTYLES END -->/s, "<!-- USERSTYLES START -->\n" + section2Text.trim() + "\n<!-- USERSTYLES END -->")

fs.outputFileSync("README.md", readmeText)

fs.copyFileSync("builder/redirect.html", "dist/index.html")