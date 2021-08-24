export const getReports = async (stockName) => {

    const get = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'stockName': stockName ? stockName : null
        }
    }

    return await fetch(`http://localhost:5000/reports`, get)
}

export const getReport = async (id) => {

    const get = {
        method: 'GET',
        headers: {
            'Content-type': 'application/json'
        }
    }

    return await fetch(`http://localhost:5000/reports/${id}`, get)
}

export const addReport = async (data) => {
    const post = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            'token': sessionStorage.getItem('token')
        },
        body: JSON.stringify(data)
    }

    return await fetch(`http://localhost:5000/reports/`, post)
}

export const editReport = async (id, data) => {
    const patch = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            'token': sessionStorage.getItem('token')
        },
        body: JSON.stringify(data)
    }

    return await fetch(`http://localhost:5000/reports/${id}`, patch)
}

export const deleteReport = async (id) => {
    const remove = {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'token': sessionStorage.getItem('token')
        }
    }

    return await fetch(`http://localhost:5000/reports/${id}`, remove)
}