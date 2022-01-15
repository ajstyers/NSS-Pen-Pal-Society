import { getLetters } from "./dataAccess.js"

const convertRequestToListElement = (letters) => {
    return `
    <div class="letterFromUser">
        <p class="userLetter" id="letTo">to: ${letters.recipient}</p>
        <p class="userLetter" id="letBody">${letters.letter_body}</p>
        <p class="userLetter" id="letTopic">${letters.topic}</p>
        <p class="userLetter" id="letFrom">from: ${letters.author}, ${letters.emailAddress}</p>
    </div>
    `
}

export const sentLetters = () => {
    const currentLetters = getLetters()

    let html = `
            ${currentLetters.map(convertRequestToListElement).join("")}
    `
    return html
}