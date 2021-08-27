import React, { useContext, useEffect } from 'react'
import { addStock, getStocks } from '../kit/api/Stocks'
import { DataContext } from '../context/DataContext'
import { closeModal } from '../kit/Functions'
import './CrudStyle.css'
import SuccessMsg from './SuccessMsg'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormBtn from './FormBtn'

export default function AddStock() {

    const { setStockList } = useContext(DataContext)
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

    const submitForm = async (event) =>  {
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
        .then(data =>{
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
   
    
    return (
        <div className='crud-container'>

            <SuccessMsg />
            
            <form className='crud-content' id='form' onSubmit={submitForm}>
                
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
            </form>
        </div>
    )
}
