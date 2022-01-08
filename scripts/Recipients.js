import { getPeople } from "./database.js"

const recipients = getPeople()

const listRecipients = () => {
    
    let html = "<ul>"

    const listItems = recipients.map(recipient => {
        return `<li>
            <option value="${recipient.id}"> ${recipient.name}</options>
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

export const Recipients = () => {
    let html = `
    <div class="field">
            <label class="label" for="recipient">Recipient</label>
            <select name="recipient-name" id="recipient-name">
            ${listRecipients()}
            </select>
        </div>
    `
    return html
}

/*
document.addEventListener("change", (event) => {
    if (event.target.name === "recipient-name") {
        setRecipient(parseInt(event.target.value))
    }
})
*/