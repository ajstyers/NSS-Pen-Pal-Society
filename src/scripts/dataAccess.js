const applicationState = {
    letters: [],
    people: [],
    topics: []
}

const mainContainer = document.querySelector("#container")

const API = "http://localhost:8088"

export const fetchLetters = () => {
    return fetch(`${API}/letters`)
        .then(response => response.json())
        .then(
            (data) => {
                // Store the external state in application state
                applicationState.letters = data
            }
        )
}


export const fetchTopics = () => {
    return fetch(`${API}/topics`)
        .then(response => response.json())
        .then(
            (topics) => {
                // Store the external state in application state
                applicationState.topics = topics
            }
        )
}

export const fetchPeople = () => {
    return fetch(`${API}/people`)
        .then(response => response.json())
        .then(
            (people) => {
                // Store the external state in application state
                applicationState.people = people
            }
        )
}


export const sendLetter = (userLetterInput) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userLetterInput)
    }


    return fetch(`${API}/letters`, fetchOptions)
        .then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"));
        })
}


// Getters:

export const getLetters = () => {
    return applicationState.letters.map(letter => ({...letter}))
}
export const getTopics = () => {
    return applicationState.topics.map(topic => ({...topic}))
}
export const getPeople = () => {
    return applicationState.people.map(people => ({...people}))
}