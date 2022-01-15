import { ComposeLetterForm } from "./ComposeLetterForm.js"
import { sentLetters } from "./SentLetters.js"

export const PenPals = () => {
    return `
        <header class="headerMain">
            <h1 class="titleMain">Pen Pal Society</h1>
        </header>

        ${ComposeLetterForm()}

        <article class="sentLetters">
            <h2 class="smallLettersTitle">Letters</h2>
            <article class="indivLetters">
                ${sentLetters()}
            </article>
        </article>
    `
}