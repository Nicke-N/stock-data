import React, { useContext, useEffect, useState } from 'react'
import { addStock, getStocks } from '../kit/api/Stocks'
import { getReports, addReport } from '../kit/api/Reports'
import { DataContext } from '../context/DataContext'
import { closeModal } from '../kit/Functions'
import './CrudStyle.css'
import SuccessMsg from './SuccessMsg'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormBtn from './FormBtn'
import Report from './Report'
import Stock from './Stock'

export default function ContainerAdd() {

    const { setStockList, modalData, currentStock, setReportList, type } = useContext(DataContext)

    var fail, success

    const submitForm = async (event) => {

        event.preventDefault()
        success = document.getElementById('add-stock-success')
        fail = document.getElementById('add-stock-failure')

        if (modalData === 'add-stock') {
            
            const details = {
                stockName: event.target[0].value,
                industry: event.target[1].value,
                dividend: event.target[2].value,
                risk: event.target[3].value
            }

            addStock(details)
                .then(res => res.text())
                .then(data => {
                    if (data === 'Stock was added!') {
                        success.style.display = 'block'
                    } else {
                        fail.style.display = 'block'
                    }
                })
            setTimeout(() => {
                getStocks()
                    .then(res => res.json())
                    .then(data => setStockList(data))
                closeModal()
            }, 3000);
        } else if ('add-report') {

            

        }


    }




    useEffect(() => { console.log(type) }, [type])
    return (
        <div className='crud-container'>

            <SuccessMsg />

            <form className='crud-content' id='form' onSubmit={submitForm}>

                {modalData === 'add-stock' ?

                    <Stock type='add' />
                    : modalData === 'add-report' ?
                        <Report type='add' />
                        : null
                }

            </form>
        </div>
    )
}
