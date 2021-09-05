export const back = () => window.history.back()
export const showModal = () => document.getElementById('simpleModal').style.display = 'flex'
export const closeModal = () => document.getElementById('simpleModal').style.display = 'none'
export const unDrawSuccess = () => document.getElementById('canvas-success').style.display = 'none'
export const unDrawFailure = () => document.getElementById('canvas-failure').style.display = 'none'