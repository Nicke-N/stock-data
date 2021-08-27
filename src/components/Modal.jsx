import React, { useEffect, useContext } from 'react'
import './Modal.css'
import { DataContext } from '../context/DataContext'
import { closeModal, showModal } from '../kit/Functions'
import EditContainer from './EditContainer'
import AddStock from './AddStock'
import AddReport from './AddReport'

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
                                    : modalData && modalData === 'add-stock' ?
                                        'Add a new stock'
                                        : modalData && modalData === 'add-report' ?
                                            'Add a new report'
                                            : null
                            }
                        </h2>
                    </div>
                    <div className="modal-body">
                        {modalData && (modalData === 'notes' || modalData === 'risks' )?
                            <EditContainer />
                            : modalData && modalData === 'add-stock' ?
                                <AddStock />
                                : modalData && modalData === 'add-report' ?
                                    <AddReport />
                                    : null

                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
