import { ComposeLetterForm } from "./ComposeLetterForm.js"
import { fetchLetters } from "./SentLetters.js"

export const PenPals = () => {
    return `
        <header class="header">
            <h1 class="title">Pen Pal Society</h1>
        </header>

        ${ComposeLetterForm()}

        <article class="sentLetters">
            <h2 class="smallTitle">Letters</h2>
            ${fetchLetters()}
        </article>
    `
}

