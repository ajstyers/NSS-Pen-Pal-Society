import { getTopics } from "./dataAccess.js"

const topics = getTopics()

export const Topics = () => {
    let html = "<ul>"

    const listItems = topics.map(topic => {
        return `<li>
            <input type="radio" name="topic-choice" value="${topic.id}" /> ${topic.type}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

/*
document.addEventListener("change", (event) => {
    if (event.target.name === "topic-choice") {
        setTopic(parseInt(event.target.value))
    }
})
*/