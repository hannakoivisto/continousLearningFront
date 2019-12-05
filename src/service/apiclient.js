const url = 'http://localhost:8080/api/topics';

export const getAllTopics = () => {
    return fetch(url)
        .then(resp => resp.json())
}

export const getSingleTopic = (id) => {
    return fetch(`${url}/${id}`)
        .then(response => response.json());
}

export const createTopic = (topic) => {
    return fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(topic)
    })
}

export const updateTopic = (topic) => {
    return fetch(url, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(topic)
    })
}

export const deleteSingleTopic = (id) => {
    return fetch(`${url}/${id}`, {
        method: 'DELETE'
    })
}