import React, { useEffect, useContext } from 'react'
import './Modal.css'
import { DataContext } from '../context/DataContext'
import { closeModal  } from '../kit/Functions'
import Form from './Form'

export default function Modal() {

    const { setSuccess, setModalData, success, modalData } = useContext(DataContext)
    var modal, closeBtn

    useEffect(() => {

        closeBtn = document.getElementsByClassName('closeBtn')[0]

        if (closeBtn) closeBtn.addEventListener('click', () => {
            closeModal()
            setModalData(null)
        })

        modal = document.getElementById('simpleModal')

        // if (modal) window.addEventListener('click', outsideClick)

    }, [])

    useEffect(() => {
        unDrawFailure()
        unDrawSuccess()
        setSuccess(null)
    }, [modalData])

    useEffect(() => { }, [])

    useEffect(() => {

        if (success === 'success') {
            drawSuccess()
        } else if (success === 'failure') {
            drawFailure()
        }
    }, [success])

    // const outsideClick = (e) => {

    //     if (e.target === modal) {
    //         setModalData(null)
    //         closeModal()
    //     }
    // }

    const drawSuccess = () => {
        var canvas = document.getElementById('canvas-success');
        if (canvas) {
            canvas.style.display = 'block'
            if (canvas.getContext) {
                var ctx = canvas.getContext('2d')
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();

                ctx.lineWidth = 3;
                ctx.strokeStyle = '#fff';
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(canvas.width * 0.05, canvas.height * 0.4);
                ctx.lineTo(canvas.width * 0.3, canvas.height * 0.6);
                ctx.lineTo(canvas.width * 0.95, canvas.height * 0.2);
                ctx.lineWidth = 15;
                ctx.strokeStyle = '#fff';
                ctx.stroke();
            }
        }
    }

    const drawFailure = () => {
        var canvas = document.getElementById("canvas-failure")
        if (canvas) {
            canvas.style.display = 'block'
            var ctx = canvas.getContext("2d");
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 15;
            ctx.beginPath();
            ctx.moveTo(canvas.width * 0.05, canvas.height * 0.2);
            ctx.lineTo(canvas.width * 0.95, canvas.height * 0.7);
            ctx.stroke();
            ctx.lineWidth = 15;
            ctx.beginPath();
            ctx.moveTo(canvas.width * 0.95, canvas.height * 0.2);
            ctx.lineTo(canvas.width * 0.05, canvas.height * 0.7);
            ctx.stroke();
        }

    }

    const unDrawSuccess = () => document.getElementById('canvas-success').style.display = 'none'
    const unDrawFailure = () => document.getElementById('canvas-failure').style.display = 'none'

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
                        {modalData ?
                            <Form />
                            : null
                        }
                        <canvas id="canvas-success" width="200" height="250"></canvas>
                        <canvas id="canvas-failure" width="200" height="250"></canvas>
                    </div>
                </div>
            </div>
        </div>
    )
}
