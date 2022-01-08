import { getLetters } from "./dataAccess.js"

const convertRequestToListElement = (letters) => {
    return `
    <li>
        to: ${letters.recipient}
        ${letters.letter_body}
        <p class="topic">${letters.topic}</p>
        from: ${letters.author}, ${letters.emailAddress}
    </li>
    `
}

export const sentLetters = () => {
    const currentLetters = getLetters()

    let html = `
        <ul>
            ${currentLetters.map(convertRequestToListElement).join("")}
        </ul>
    `

    return html
}

/*
//take away delete letter option - instead add a *like/dislike* option?

const convertRequestToListElement = (request) => {
    return `
    <li>
        ${request.description}
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
    </li>
    `
}

export const sentLetters = () => {
    const requests = getLetters()

    let html = `
        <ul>
            ${requests.map(convertRequestToListElement).join("")}
        </ul>
    `

    return html
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})
*/