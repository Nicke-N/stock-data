export const authenticated = () => sessionStorage.getItem('token') ? true : false
export const back = () => window.history.back()