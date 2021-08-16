import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import DropdownSearch from './DropdownSearch'
import { DataContext } from '../context/DataContext'
import { getStocks } from '../kit/api/Stocks'

export default function NavPanel() {

    const { stockList, setStockList, currentStock } = useContext(DataContext)
    const panel = document.getElementById('nav-panel')
    useEffect(() => {
        if (!stockList) fetchStockList()
        console.log(stockList)
    }, [])

    useEffect(() => {
        console.log(currentStock)
        if (panel && currentStock) {
            // const overview = document.createElement('li')
            // const addAnnual = document.createElement('li')
            // const addQuarter = document.createElement('li')
            // const diagrams = document.createElemtnt('li')
            const navigation = {
                tabs: [
                    'Overview',
                    'Diagrams',
                    'Add report'
                    
                ],
                content: [
                    `/overview/${currentStock._id}`,
                    `/diagrams/${currentStock._id}`,
                    `/report/${currentStock._id}`
                ]
            }
            for(const index in navigation.tabs) {
                let panelItem = document.createElement('li')
                let link = document.createElement('a')
                link.textContent = navigation.tabs[index]
                link.setAttribute('href', navigation.content[index])
                panelItem.appendChild(link)
                panel.appendChild(panelItem)

            }
        }

    }, [currentStock])

    const fetchStockList = async () => {
        await getStocks()
        .then(res => res.json())
        .then(data => setStockList(data))
    }


    return (
        <div id='nav-container'>
            <ul id='nav-panel'>
                <li>
                    <DropdownSearch />
                </li>
                <li>
                    <a href="">
                        Add stock
                    </a>
                </li>

            </ul>
        </div>
    )
}
