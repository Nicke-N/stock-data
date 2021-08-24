import React, { useEffect, useContext } from 'react'
import './Modal.css'
import { DataContext } from '../context/DataContext'
import { closeModal, showModal } from '../kit/Functions'

export default function Modal(props) {

    const { setRemove, setModalData, remove } = useContext(DataContext)
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
                            {props.data && props.data === 'edit notes' ?
                                'Edit book details'
                                : props.data && props.data === 'edit risks' ?
                                    'Edit user details'
                                    : null
                            }
                        </h2>
                    </div>
                    <div className="modal-body">
                        {/* {remove && props.data.username ?
                            <RemoveUser />
                            : remove && props.data.title ?
                                <RemoveBook />
                                : props.data && props.data.title ?
                                    <EditBook data={props.data} />
                                    : props.data && props.data.email ?
                                        <EditProfile />
                                        : props.data && props.data === 'addNewBook' ?
                                            <AddBook />
                                            : props.data && props.data === 'login' ?
                                                <Login />
                                                : props.data && props.data === 'register' ?
                                                    <Register />
                                                    : null
                        } */}

                    </div>
                </div>
            </div>
        </div>
    )
}
