import React, { useEffect, useContext, useState } from 'react'
import { DataContext } from '../context/DataContext'
import { getReports, addReport } from '../kit/api/Reports'
import SuccessMsg from './SuccessMsg'

export default function AddReport() {

    const { currentStock, setReportList } = useContext(DataContext)
    const [ type, setType ] = useState('Annual')
    const [ years, setYears ] = useState(null)
    
    var stockType, success, fail
    const currDate = new Date(),
    year = currDate.getFullYear(),
    month = currDate.getMonth(),
    periods = [
        'jan - mar',
        'apr - jun',
        'jul - sep',
        'oct - dec'
    ]
    var yearsArray = []
    
    


    return (
        <div className='crud-container'>

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
                    <div className='period-year'>
                        <label htmlFor="year">Year</label>
                        <select name="year" id="year">
                            {years ?
                                years.map(element => <option key={element} value={element}>{element}</option>)
                                : null
                            }
                            
                        </select>
                    </div>
                    {type === 'quarter' ?
                        <div className='period-month'>
                            <label htmlFor="months">Period</label>
                            <select name="months" id="months">
                                {periods.map(element => <option key={element} value={element}>{element}</option>)}
                            </select>
                        </div>
                        : null
                    }
                </div>
                
                <div id='form-revenue' className='crud-pair'>
                    <label htmlFor='revenue'>Stock</label>
                    <input type='number' maxLength='20' name='name' id='revenue' />
                </div>
                
                <button id='form-btn'> Add stock </button>
            </form>
        </div>
    )
}
