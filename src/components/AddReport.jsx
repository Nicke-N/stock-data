import React, { useEffect, useContext, useState } from 'react'
import { DataContext } from '../context/DataContext'
import { getReports, addReport } from '../kit/api/Reports'
import SuccessMsg from './SuccessMsg'

export default function AddReport() {

    const { currentStock, setReportList } = useContext(DataContext)
    const [ type, setType ] = useState(null)
    var stockType, success, fail

    const submitForm = async (event) =>  {
        event.preventDefault()
        console.log('submit')
        const details = {
            stockName: event.target[0].value, 
            type: event.target[1].value,
            period: event.target[2].value,
            risk: event.target[3].value
        }

        addReport(details)
        .then(res => res.text())
        .then(data =>{
            if (data === 'Report was added!') {
                success.style.display = 'block'
            } else {
                fail.style.display = 'block'
            }
        })
        setTimeout(() => {
            getReports()
            .then(res => res.json())
            .then(data => setReportList(data))
        }, 3000);
        
    }
    const setStockType = () => {
        
    }
    useEffect(() => {
        stockType = document.getElementById('type')
        success = document.getElementById('add-stock-success')
        fail = document.getElementById('add-stock-failure')
        if (stockType) {

            fail.style.display = 'none'
            success.style.display = 'none'
        }
    }, [])

    return (
        <div className='crud-container'>
            <h2 className='crud-type'>
                Add report
            </h2>

            <SuccessMsg />

            <form className='crud-content' id='form' onSubmit={submitForm}>
                
                <div id='form-name' className='crud-pair'>
                    <label htmlFor='name'>Stock</label>
                    <input type='text' maxLength='50' name='name' id='stockName' value={currentStock.stockName} readOnly/>
                </div>
                
                <div id='form-type' className='crud-pair'>
                    <label htmlFor='type' >Type</label>
                    <select name='type'  id='type' onChange={setStockType} required>
                        <option value="annual">Annual</option>
                        <option value="quarter">Quarter</option>
                    </select>
                </div>
                
                <div id='form-period' className='crud-pair'> 
                    <label htmlFor='period'>period</label>
                    <input type='number' maxLength='5' name='period' id='period'/>
                </div>
                
                <div id='form-risk' className='crud-pair'>
                <   label htmlFor='risk'  >Risk level</label>
                    <select name='risk' id='risk'>
                        <option value='high'>High</option>
                        <option value='medium'>Medium</option>
                        <option value='low'>Low</option>
                        <option value='unknown'>Unknown</option>
                    </select>
                </div>
                
                <button id='form-btn'> Add stock </button>
            </form>
        </div>
    )
}
