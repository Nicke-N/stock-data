import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import DropdownSearch from './DropdownSearch'
import { DataContext } from '../context/DataContext'
import { getStocks } from '../kit/api/Stocks'
import { getReports } from '../kit/api/Reports'
import { back } from '../kit/Functions'

export default function NavPanel() {

    const { stockList, setStockList, currentStock, setReportList } = useContext(DataContext)
    const [ overview, setOverview ] = useState(null)
    const [ diagrams, setDiagrams ] = useState(null)
    const [ addReport, setAddReport ] = useState(null)

    useEffect(() => {
        if (!stockList) fetchStockList()
        console.log(stockList)
    }, [])

    useEffect(() => {
        
        if ( currentStock) {
           
            // panel.textContent = ''
            // const navigation = {
            //     tabs: [
            //         'Overview',
            //         'Diagrams',
            //         'Add report'
                    
            //     ],
            //     content: [
            //         `/overview/${currentStock._id}`,
            //         `/diagrams/${currentStock._id}`,
            //         `/report/${currentStock._id}`
            //     ]
            // }
            // for(const index in navigation.tabs) {
            //     let panelItem = document.createElement('li')
            //     let link = document.createElement('a')
            //     link.textContent = navigation.tabs[index]
            //     link.setAttribute('href', navigation.content[index])
            //     panelItem.appendChild(link)
            //     panel.appendChild(panelItem)

            // }
            
            setOverview(`/overview/${currentStock._id}`)
            setDiagrams(`/diagrams/${currentStock._id}`)
            setAddReport(`/report/${currentStock._id}`)


            getReports(currentStock.stockName)
            .then(res => res.json())
            .then(data => setReportList(data))
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
                    <Link to="/addstock">
                        Add stock
                    </Link>
                </li>
                
                {overview ?
                <>
                    <li>
                        <Link to={overview}>
                            Overview
                        </Link>
                    </li>
                    <li>
                        <Link to={diagrams}>
                            Diagrams
                        </Link>
                    </li>
                    <li>
                        <Link to={addReport}>
                            Add report
                        </Link>
                    </li>
                </>
                : null
            }



                <li>
                    <Link onClick={back}>
                        Back
                    </Link>
                </li>
            </ul>
           
            
            
        </div>
    )
}
