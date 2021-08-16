import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import './DropDownSearch.css'
import { DataContext } from '../context/DataContext'
export default function DropdownSearch() {

    const { setSearchTerm, stockList, searchTerm } = useContext(DataContext)
    const history = useHistory()
    const setValue = (e) => setSearchTerm(e.target.value.toLowerCase())
    const list = document.getElementById('stock-list')
    
    useEffect(() => {
        setSearchTerm([])
    }, [])
    
    if (stockList)
    stockList.map(element => searchTerm === (element.stockName).toLowerCase() ? history.push(`/overview/${element._id}`) : null)



    if (list && stockList) {
        
        if (list.childNodes.length !== stockList.length) {
            list.textContent = ''
            stockList.map((element) => {
               
                var option = document.createElement('option')
                option.textContent = element.stockName
                option.setAttribute('data-value', element._id)
                list.appendChild(option)
            })
        }
    }

    return (

        <div>
            <datalist id='stock-list'></datalist>
            <input autoComplete='on' list='stock-list' onChange={setValue} />
        </div>

    )
}
