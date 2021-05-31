import React, { useEffect, useContext } from 'react'
import { closeModal, showModal } from '../kit/Functions'
import { DataContext } from '../context/DataContext'
import './Modal.css'

export default function Modal() {
    var modal, closeBtn, modalBtn

    const { setModalData, modalData } = useContext(DataContext)

    useEffect(() => {
        modalBtn = document.getElementById('tradeHistory')
        if (modalBtn)
            modalBtn.addEventListener('click', showModal)

        closeBtn = document.getElementsByClassName('closeBtn')[0]
        if (closeBtn)
            closeBtn.addEventListener('click', () => { modal.style.display = 'none'; setModalData(null) })

        modal = document.getElementById('simpleModal')
        if (modal)
            window.addEventListener('click', outsideClick)

    }, [])

    const outsideClick = (e) => {

        if (e.target === modal) {
            
            closeModal()
        }
    }
    return (
        <div>
            <div id="simpleModal" className="modal-overlay">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="closeBtn"> x </span>
                        <h2 className="modal-title">
                           
                        </h2>
                    </div>
                    <div className="modal-body">
                      

                    </div>
                </div>
            </div>
        </div>
    )
}