import React from 'react'

export default function AddStock(props) {

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
    const industry = document.getElementById('industry')

    if (industry) {
        industry.textContent = ''

        industries.map(element => {
            let option = document.createElement('option')
            option.setAttribute('value', element)
            option.textContent = element

            industry.appendChild(option)
        })
    }
    
    return (
        <div className='crud-container'>
        <h5 className='crud-type'>
            {props.type} stock
        </h5>
        <div className='crud-content'>

            <form action="">
                <label htmlFor="name">Name</label>
                <input type="text" maxLength='50' name='name' id='name' />
         

           
                <label htmlFor="industry">Industry</label>
                <select name="industry" id="industry"></select>
         
            
           
                <label htmlFor="dividend">Dividend</label>
                <input type="number" maxLength='5'id='dividend' name='dividend' />
           

           
                <label htmlFor="risk">Risk level</label>
                <select name="industry" id="industry">
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                    <option value="unknown">Unknown</option>
                </select>
        

                <label htmlFor="dividend">Dividend</label>
                <input type="number" maxLength='5' name='dividend' />

                <button> Add stock </button>
            </form>
             
        </div>
    </div>
    )
}
