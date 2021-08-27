import React, { useContext, useEffect } from 'react'
import { addStock, getStocks } from '../kit/api/Stocks'
import { DataContext } from '../context/DataContext'
import './CrudStyle.css'
import SuccessMsg from './SuccessMsg'
import FormInput from './FormInput'
import FormSelect from './FormSelect'

export default function AddStock() {

    const { setStockList } = useContext(DataContext)

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
        'Telecommunication',
        'Transport',
        'World wide web'
    ]

    var industry, success, fail

    const submitForm = async (event) =>  {
        event.preventDefault()
        console.log('submit')
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
        }, 3000);
        
    }
    useEffect(() => {
        
        success = document.getElementById('add-stock-success')
        fail = document.getElementById('add-stock-failure')
        
        fail.style.display = 'none'
        success.style.display = 'none'
    }, [])
    
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
                
                <div id='form-dividend' className='crud-pair'> 
                    <label htmlFor='dividend'  >Dividend</label>
                    <input type='number' maxLength='5' name='dividend' id='dividend'/>
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
