import React, { useEffect, useContext } from 'react'
import './Modal.css'
import { DataContext } from '../context/DataContext'
import { closeModal, showModal } from '../kit/Functions'
import ContainerAdd from './ContainerAdd'
import ContainerRemove from './ContainerRemove'
import ContainerEdit from './ContainerEdit'

export default function Modal() {

    const { setSuccess, setModalData, success, modalData } = useContext(DataContext)
    var modal, closeBtn, modalBtn
    console.log(modalData)

    useEffect(() => {


        closeBtn = document.getElementsByClassName('closeBtn')[0]
        if (closeBtn)
            closeBtn.addEventListener('click', () => { modal.style.display = 'none' })

        modal = document.getElementById('simpleModal')

        if (modal) window.addEventListener('click', outsideClick)

    }, [])

    const outsideClick = (e) => {

        if (e.target === modal) {
            setModalData(null)
            closeModal()
        }
    }

    const drawSuccess = () => {
        var canvas = document.getElementById('canvas-success');
        if (canvas) {
            canvas.style.display = 'block'
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d')
                ctx.beginPath();

                ctx.lineWidth = 3;
                ctx.strokeStyle = '#fff';
                ctx.stroke();

                //draw tick
                ctx.beginPath();
                ctx.moveTo(50, 75);
                ctx.lineTo(80, 120);
                ctx.lineTo(165, 70);
                ctx.lineWidth = 15;
                ctx.strokeStyle = '#fff';
                ctx.stroke();
            }
        }
    }

    useEffect(() => {
        document.getElementById('canvas-success').style.display = 'none'
        document.getElementById('canvas-failure').style.display = 'none'
    }, [modalData])

    useEffect(() => {
        
    }, [])

    useEffect(() => {
        if (success) {
            drawSuccess()
        }
    }, [success])

    return (
        <div>
            <div id="simpleModal" className="modal-overlay">
                <div className="modal-content">
                    <div className="modal-header">
                        <span></span>
                        <h3 className="modal-title">
                            {modalData && modalData === 'notes' ?
                                'Edit notes'
                                : modalData && modalData === 'risks' ?
                                    'Edit risks'
                                    : modalData && modalData === 'add-stock' ?
                                        'Add a new stock'
                                        : modalData && modalData === 'add-report' ?
                                            'Add a new report'
                                            : modalData && modalData === 'remove-stock' ?
                                                'Remove stock'
                                                : modalData && modalData === 'remove-report' ?
                                                    'Remove report'
                                                    : modalData && modalData === 'edit-report' ?
                                                        'Edit report'
                                                        : null
                            }
                        </h3>
                        <span className="closeBtn"> x </span>
                    </div>
                    <div className="modal-body">
                        {modalData && (modalData === 'notes' || modalData === 'risks') ?
                            <ContainerEdit />
                            : modalData && (modalData === 'add-stock' || modalData === 'add-report') ?
                                <ContainerAdd />
                                : modalData && modalData === 'remove-stock' ?
                                    <ContainerRemove type='stock' />
                                    : modalData && modalData === 'remove-report' ?
                                        <ContainerRemove type='report' />
                                        : modalData && modalData === 'edit-report' ? 
                                            <ContainerEdit />
                                            : modalData && modalData === 'edit-stock' ?
                                                <ContainerEdit />
                                                : null
                        }
                         <canvas id="canvas-success" width="200" height="200"></canvas>
                         <canvas id="canvas-failure" width="200" height="200"></canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}
