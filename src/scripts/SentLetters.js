import { getLetters } from "./dataAccess.js"

const convertRequestToListElement = (letters) => {
    return `
    <li>
        to: ${letters.recipient}
        <p class="body">${letters.letter_body}</p>
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