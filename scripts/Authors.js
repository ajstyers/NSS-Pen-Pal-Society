import { getPeople } from "./dataAccess.js"

const authors = getPeople()

const listAuthors = () => {
    
    let html = "<ul>"

    const listItems = authors.map(author => {
        return `<li>
            <option value="${author.id}" author-email="${author.email}"> ${author.name}</options>
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

export const Authors = () => {
    let html = `
    <div class="field">
            <label class="label" for="authors">Author</label>
            <select name="author-name" id="author-name">
            ${listAuthors()}
            </select>
        </div>
    `
    return html
}

/*
document.addEventListener("change", (event) => {
    if (event.target.name === "author-name") {
        setAuthor(parseInt(event.target.value))
    }
})
*/