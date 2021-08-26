import React, { useContext, useEffect } from 'react'
import { addStock, getStocks } from '../kit/api/Stocks'
import { DataContext } from '../context/DataContext'
import './CrudStyle.css'
import SuccessMsg from './SuccessMsg'

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
        industry = document.getElementById('industry')
        success = document.getElementById('add-stock-success')
        fail = document.getElementById('add-stock-failure')
        if (industry) {

            fail.style.display = 'none'
            success.style.display = 'none'
            industry.textContent = ''
    
            industries.map(element => {
                let option = document.createElement('option')
                option.setAttribute('value', element)
                option.textContent = element
    
                industry.appendChild(option)
            })  
        }
    }, [])
    
    return (
        <div className='crud-container'>
            <h2 className='crud-type'>
                Add stock
            </h2>

            <SuccessMsg />
            
            <form className='crud-content' id='form' onSubmit={submitForm}>
                
                <div id='form-name' className='crud-pair'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' maxLength='50' name='name' id='stockName' required/>
                </div>
                
                <div id='form-industry' className='crud-pair'>
                    <label htmlFor='industry' >Industry</label>
                    <select name='industry'  id='industry' required></select>
                </div>
                
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
