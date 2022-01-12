import { getTopics } from "./dataAccess.js"

export const Topics = () => {
    const topics = getTopics()
    let html = "<ul>"

    const listItems = topics.map(topic => {
        return `<li>
            <input type="radio" value="${topic.type}" name="topic-choice" id="${topic.id}"/> ${topic.type}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}