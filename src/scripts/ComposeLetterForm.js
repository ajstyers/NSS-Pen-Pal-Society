import { sendLetter } from "./dataAccess.js"
import { Authors } from "./Authors.js"
import { letterBox } from "./LetterBox.js"
import { Topics } from "./Topics.js"
import { Recipients } from "./Recipients.js"

export const ComposeLetterForm = () => {
    return `
        <article class="letterForm">
            <section class="authors drop_down">
                <h2>Author</h2>
                ${Authors()}
            </section>
            <section class="letter type_box">
                <h2>Letter</h2>
                ${letterBox()}
            </section>
            <section class="topics radio_button">
                <h2>Topics</h2>
                ${Topics()}
            </section>
            <section class="recepients drop_down">
                <h2>Recipient</h2>
                ${Recipients()}
            </section>
        </article>

        <article>
            <button id="sendLetter">Send Letter</button>
        </article>
        `
}

const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "sendLetter") {
        // Get what the user typed into the form fields
        const userAuthor = document.querySelector("option[name='author-name']:checked").value
        const userLetter = document.querySelector("input[name='letter-text']").value
        const userTopic = document.querySelector("input[name='topic-choice']:checked").value
        const userRecipient = document.querySelector("option[name='recipient-name']:checked").value
        const useremail = document.querySelector("option[name='author-name']:checked").getAttribute('data-email')

        // Make an object out of the user input
        const dataToSendToAPI = {
            author: userAuthor,
            letter_body: userLetter,
            topic: userTopic,
            recipient: userRecipient,
            emailAddress: useremail
        }

        // Send the data to the API for permanent storage
        sendLetter(dataToSendToAPI)
    }
})