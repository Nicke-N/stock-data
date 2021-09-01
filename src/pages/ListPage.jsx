import React, { useEffect, useContext } from 'react'
import ListItem from '../components/ListItem'
import { DataContext } from '../context/DataContext'
import { getStocks } from '../kit/api/Stocks'

import './ListPage.css'

export default function ListPage() {

    const { stockList, searchTerm, setStockList, setOverview } = useContext(DataContext)

    useEffect(() => {
        fetchAllStocks()
        setOverview(null)
    }, [])

    const fetchAllStocks = async () => {

        getStocks()
        .then(res => res.json())
        .then(data => setStockList(data))
    }

    return (
        <div>
            <div id='stock-list'>
            { stockList ?
                    Object.entries(stockList).map(element => searchTerm === '' ? <ListItem key={element[0]} data={element[1]}/> : (element[1].stockName.toLowerCase()).includes(searchTerm) ? <ListItem key={element[0]} data={element[1]}/> : null )
                : null
            }
            </div>
         
        </div>
    )
}
