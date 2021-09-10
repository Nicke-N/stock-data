export const back = () => window.history.back()
export const showModal = () => document.getElementById('simpleModal').style.display = 'flex'
export const closeModal = () => document.getElementById('simpleModal').style.display = 'none'
export const DOMvalue = (id) => document.getElementById(id).value