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

export default function ContainerAdd() {

    const { setStockList, modalData, currentStock, setReportList, type } = useContext(DataContext)

    const [years, setYears] = useState(null)

    var stockType, success, fail
    const currDate = new Date(),
        year = currDate.getFullYear(),
        periods = [
            'jan - mar',
            'apr - jun',
            'jul - sep',
            'oct - dec'
        ],
        typeOptions = [
            'Annual',
            'Quarter'
        ],
        industries = [
            'Aerospace',
            'Agriculture',
            'Construction',
            'Education',
            'Electronics',
            'Energy',
            'Entertainment',
            'Finances',
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

    var yearsArray = []
    var fail, success

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

    useEffect(() => { console.log(type) }, [type])
    return (
        <div className='crud-container'>

            <SuccessMsg />

            <form className='crud-content' id='form' onSubmit={submitForm}>

                {modalData === 'add-stock' ?

                    <>
                        <FormInput
                            className='crud-pair stock'
                            label='Name'
                            maxLength='50'
                            id='stockName'
                            type='text'
                            required
                        />

                        <FormSelect
                            className='crud-pair stock'
                            label='Industry'
                            id='industry'
                            options={industries}
                            required
                        />

                        <FormInput
                            className='crud-pair stock'
                            id='dividend'
                            label='Dividend'
                            maxLength='10'
                            type='tele'
                        />

                        <FormSelect
                            className='crud-pair stock'
                            label='Risk'
                            id='risk'
                            options={riskLevels}
                        />

                        <FormBtn
                            className='form-btn stock-btn'
                            text='Add stock'
                        />
                    </>
                    : modalData === 'add-report' ?
                        <>
                            <FormInput
                                className='crud-pair report'
                                id='stockName'
                                label='Name'
                                maxLength='50'
                                type='text'
                                value={currentStock.stockName}
                                readOnly
                            />

                            <FormSelect
                                className='crud-pair report'
                                id='type'
                                label='Type'
                                onChange='type'
                                options={typeOptions}
                            />

                            {type === 'Quarter' ?
                                <FormSelect
                                    className='crud-pair report'
                                    id='period'
                                    label='Period'
                                    options={periods}
                                />
                                :
                                null
                            }
                            
                            <FormInput
                                className='crud-pair report'
                                id='revenue'
                                label='Revenue'
                                maxLength='20'
                                type='number'
                                required
                            />

                            <FormInput
                                className='crud-pair report'
                                id='costs'
                                label='Costs'
                                maxLength='20'
                                type='number'
                                required
                            />

                            <FormInput
                                className='crud-pair report'
                                id='result'
                                label='Result'
                                maxLength='20'
                                type='number'
                                required
                            />

                            <FormInput
                                className='crud-pair report'
                                id='short-debt'
                                label='ShortDebt'
                                maxLength='20'
                                type='number'
                            />

                            <FormInput
                                className='crud-pair report'
                                id='long-debt'
                                label='LongDebt'
                                maxLength='20'
                                type='number'
                            />

                            <FormInput
                                className='crud-pair report'
                                id='capital'
                                label='Capital'
                                maxLength='20'
                                type='number'
                            />

                            <FormInput
                                className='crud-pair report'
                                id='capital-adequacy'
                                label='CapitalAdequacy'
                                maxLength='2'
                                type='number'
                            />

                            <FormInput
                                className='crud-pair report'
                                id='stock-count'
                                label='Stocks'
                                maxLength='20'
                                type='number'
                            />

                            <FormInput
                                className='crud-pair report'
                                id='inventory'
                                label='Inventory'
                                maxLength='20'
                                type='number'
                            />

                            <FormInput
                                className='crud-pair report'
                                id='employees'
                                label='Employees'
                                maxLength='10'
                                type='number'
                            />

                            <FormInput
                                className='crud-pair report'
                                id='property'
                                label='Property'
                                maxLength='20'
                                type='number'
                            />
                            
                            <FormBtn
                            className='form-btn report'
                            text='Add report'
                            />

                        </>
                        : null
                }

            </form>
        </div>
    )
}
