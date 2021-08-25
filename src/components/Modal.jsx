import React, { useEffect, useContext } from 'react'
import './Modal.css'
import { DataContext } from '../context/DataContext'
import { closeModal, showModal } from '../kit/Functions'
import EditContainer from './EditContainer'

export default function Modal(props) {

    const { setRemove, setModalData, remove, modalData } = useContext(DataContext)
    var modal, closeBtn, modalBtn

    useEffect(() => {
        modalBtn = document.getElementById('tradeHistory')
        if (modalBtn)
            modalBtn.addEventListener('click', showModal);

        closeBtn = document.getElementsByClassName('closeBtn')[0]
        if (closeBtn)
            closeBtn.addEventListener('click', () => { modal.style.display = 'none' })

        modal = document.getElementById('simpleModal')

        if (modal) window.addEventListener('click', outsideClick)

    }, [])

    const outsideClick = (e) => {

        if (e.target === modal) {
            setRemove(false)
            setModalData(null)
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
                            {modalData && modalData === 'notes' ?
                                'Edit notes'
                                : modalData && modalData === 'risks' ?
                                    'Edit risks'
                                    : null
                            }
                        </h2>
                    </div>
                    <div className="modal-body">
                        {modalData && (modalData === 'notes' || modalData === 'risks' )?
                            <EditContainer />
                            : null

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
