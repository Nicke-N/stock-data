export const getResults = async () => {

    const get = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }

    return await fetch(`http://localhost:5000/results`, get)
}

export const getResult = async (id) => {

    const get = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }

    return await fetch(`http://localhost:5000/results/${id}`, get)
}

export const addResult = async (data) => {
    const post = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'token': sessionStorage.getItem('token')
        },
        body: JSON.stringify(data)
    }

    return await fetch(`http://localhost:5000/results/`, post)
}

export const editResult = async (id, data) => {
    const patch = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'token': sessionStorage.getItem('token')
        },
        body: JSON.stringify(data)
    }

    return await fetch(`http://localhost:5000/results/${id}`, patch)
}

export const deleteResult = async (id) => {
    const remove = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'token': sessionStorage.getItem('token')
        }
    }

    return await fetch(`http://localhost:5000/results/${id}`, remove)
}