export const getStocks = async () => {

    const get = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }

    return await fetch(`https://nameless-brook-58186.herokuapp.com/stocks`, get)
}

export const getStock = async (id) => {

    const get = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }

    return await fetch(`https://nameless-brook-58186.herokuapp.com/stocks/${id}`, get)
}

export const addStock = async (data) => {
    const post = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    return await fetch(`https://nameless-brook-58186.herokuapp.com/stocks/`, post)
}

export const editStock = async (id, data) => {
    const patch = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    return await fetch(`https://nameless-brook-58186.herokuapp.com/stocks/${id}`, patch)
}

export const deleteStock = async (id) => {
    const remove = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    }

    return await fetch(`https://nameless-brook-58186.herokuapp.com/stocks/${id}`, remove)
}