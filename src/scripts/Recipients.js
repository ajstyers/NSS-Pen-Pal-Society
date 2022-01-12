import { getPeople } from "./dataAccess.js"

const listRecipients = () => {
    const recipients = getPeople()
    
    let html = ""

    const listItems = recipients.map(recipient => {
        return `<option id="${recipient.id}" name="recipient-name" value="${recipient.name}"> ${recipient.name}</options>`
    })

    html += listItems.join("")

    return html
}

export const Recipients = () => {
    let html = `
    <div class="field">
            <select name="recipients" id="recipient-name">
            ${listRecipients()}
            </select>
        </div>
    `
    return html
}