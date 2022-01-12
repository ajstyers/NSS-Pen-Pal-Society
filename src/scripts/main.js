import { PenPals } from "./PenPals.js"
import { fetchPeople, fetchLetters, fetchTopics } from "./dataAccess.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchPeople().then(fetchLetters().then(fetchTopics().then(
        () => {
            mainContainer.innerHTML = PenPals()
        }
    )))
}

render()

//

mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)