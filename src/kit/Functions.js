export const back = () => window.history.back()
export const showModal = () => document.getElementById('simpleModal').style.display = 'flex'
export const closeModal = () => document.getElementById('simpleModal').style.display = 'none'
export const IDvalue = (id) => document.getElementById(id).value
export const NAMEvalue = (name) => document.querySelector(`input[name=${name}]:checked`).title