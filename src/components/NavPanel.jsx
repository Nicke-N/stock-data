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
                <li className='nav-item'>
                    <DropdownSearch />
                </li>
                <li className='nav-item'>
                    <Link to="/addstock">
                        Add stock
                    </Link>
                </li>
                
                {overview ?
                <>
                    <li className='nav-item'>
                        <Link to={overview}>
                            Overview
                        </Link>
                    </li>
                    <li className='nav-item'> 
                        <Link to={diagrams}>
                            Diagrams
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={addReport}>
                            Add report
                        </Link>
                    </li>
                </>
                : null
            }



                <li className='nav-item'>
                    <Link onClick={back}>
                        Back
                    </Link>
                </li>
            </ul>
           
            
            
        </div>
    )
}
