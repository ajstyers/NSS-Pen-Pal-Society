import { getPeople } from "./dataAccess.js"

const listAuthors = () => {
    const authors = getPeople()
    
    let html = ""

    const listItems = authors.map(author => {
        return `<option id="${author.id}" data-email="${author.email}" name="author-name" value="${author.name}"> ${author.name}</options>`
    })
    //  take off li elements, make select boxes render properly, google how to get selection from drop down

    html += listItems.join("")

    return html
}

export const Authors = () => {
    let html = `
    <div class="field">
            <select name="authors" id="author-name">
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