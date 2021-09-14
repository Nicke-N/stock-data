import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import './DropDownSearch.css'
import { DataContext } from '../context/DataContext'

export default function DropDownSearchCustom() {

    const { setSearchTerm, stockList, searchTerm, setCurrentStock } = useContext(DataContext)
    const history = useHistory()
    const setValue = (e) => setSearchTerm(e.target.value.toLowerCase())
    const selectOption = (e) => setSearchTerm(e.target.textContent.toLowerCase())

    useEffect(() => {
        setSearchTerm([])
    }, [])

    if (stockList) {

        stockList.map(element => {

            if (searchTerm === (element.stockName).toLowerCase()) {
                setCurrentStock(element)
                return setTimeout(() => {
                    history.push(`/overview/${element._id}`)
                }, 1500)
            }
        })
    }

    return (
    
            <div id='search-container'>
                <input type="text" maxLength='50' id='options-filter' onChange={setValue} />
                <div id='options-container'>
                    {stockList ? stockList.map((element, index) => {
                        if (searchTerm === '') {
                            return <div key={element.stockName + index} className='dropdown-option' onClick={selectOption}>
                                {element.stockName}
                            </div>

                        } else if ((element.stockName).toLowerCase().includes(searchTerm)) {
                            return <div key={element.stockName + index} className='dropdown-option' onClick={selectOption}>
                                {element.stockName}
                            </div>
                        }

                    })
                        : null

                    }

                </div>
            </div>
    )
}
