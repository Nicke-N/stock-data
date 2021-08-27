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

export default function AddContainer() {

    const { setStockList, modalData, currentStock, setReportList } = useContext(DataContext)
    const [type, setType] = useState('Annual')
    const [years, setYears] = useState(null)

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
    var fail, success

    const industries = [
        'Aerospace',
        'Agriculture',
        'Construction',
        'Education',
        'Electronics',
        'Energy',
        'Entertainment',
        'Food',
        'Healthcare',
        'Hospitality',
        'IT',
        'Manufacturing',
        'Mining',
        'Music',
        'News media',
        'Pharamceutical',
        'Property management',
        'Telecommunication',
        'Transport',
        'World wide web'
    ], riskLevels = [
        'High',
        'Medium',
        'Low',
        'Unknown'
    ]

    const submitForm = async (event) => {
        event.preventDefault()
        success = document.getElementById('add-stock-success')
        fail = document.getElementById('add-stock-failure')
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

    }
    const setStockType = event => setType(event.target.value)

    useEffect(() => {

        stockType = document.getElementById('type')
        success = document.getElementById('add-stock-success')
        fail = document.getElementById('add-stock-failure')

        if (stockType) {

            fail.style.display = 'none'
            success.style.display = 'none'
        }

        for (let i = 2005; i <= year; i++) {
            yearsArray.push(i)
        }
        setYears(yearsArray)

    }, [])

    return (
        <div className='crud-container'>

            <SuccessMsg />

            <form className='crud-content' id='form' onSubmit={submitForm}>

                {modalData === 'add-stock' ?

                    <>
                        <FormInput
                            className='crud-pair'
                            label='Name'
                            maxLength='50'
                            id='stockName'
                            type='text'
                            required
                        />

                        <FormSelect
                            className='crud-pair'
                            label='Industry'
                            id='industry'
                            options={industries}
                            required
                        />

                        <FormInput
                            className='crud-pair'
                            id='dividend'
                            label='Dividend'
                            maxLength='10'
                            type='tele'
                        />

                        <FormSelect
                            className='crud-pair'
                            label='Risk'
                            id='risk'
                            options={riskLevels}
                        />

                        <FormBtn
                            id='form-btn'
                            text='Add stock'
                        />
                    </>
                    : modalData === 'add-report' ?
                        <>
                            <FormInput
                                className='crud-pair'
                                id='stockName'
                                label='Name'
                                maxLength='50'
                                type='text'
                                value={currentStock.stockName}
                                readOnly
                            />
                            
                            <FormSelect
                                className='crud-pair'
                                id='type'
                                label='Type'
                                onChange={setStockType}
                            />

                            <div id='form-type' className='crud-pair'>
                                <label htmlFor='type' >Type</label>
                                <select name='type' id='type' onChange={setStockType} required>
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
                        </>
                        : null
                }

            </form>
        </div>
    )
}
