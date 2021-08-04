import React, { useEffect, useContext } from 'react'
import DropdownSearch from './DropdownSearch'
import { DataContext } from '../context/DataContext'
import { getStocks } from '../kit/api/Stocks'

export default function NavPanel() {

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
        <div id='nav-panel'>
            <ul>
                <li>
                    <DropdownSearch />
                </li>
                <li>
                    panel
                </li>
                <li>
                    panel
                </li>
                <li>
                    panel
                </li>
                <li>
                    panel
                </li>
            </ul>
        </div>
    )
}
