export const authenticated = () => sessionStorage.getItem('token') ? true : false
