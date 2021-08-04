import React, { useEffect, useContext } from 'react'
import ListItem from '../components/ListItem'
import { DataContext } from '../context/DataContext'
import { getStocks } from '../kit/api/Stocks'

import './ListPage.css'

export default function ListPage() {
    const { stockList, setStockList } = useContext(DataContext)

    useEffect(() => {
        if (!stockList) fetchStockList()
        console.log(stockList)
    }, [])

    const fetchStockList = async () => {
        await getStocks()
        .then(res => res.json())
        .then(data => setStockList(data))
    }

    return (
        <div>
            <div id='stock-list'>
            {stockList ?
                Object.entries(stockList).map(element => <ListItem key={element[0]} data={element[1]}/> ) : null
            }
            </div>
         
        </div>
    )
}
