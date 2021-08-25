import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import DropdownSearch from './DropdownSearch'
import { DataContext } from '../context/DataContext'
import { getStocks } from '../kit/api/Stocks'
import { getReports } from '../kit/api/Reports'
import { back, showModal } from '../kit/Functions'
import AddStock from '../pages/AddStock'

export default function NavPanel() {

    const { stockList, setStockList, currentStock, setReportList, setModalData } = useContext(DataContext)
    const [ overview, setOverview ] = useState(null)
    const [ diagrams, setDiagrams ] = useState(null)

    const fetchStockList = async () => {
        await getStocks()
        .then(res => res.json())
        .then(data => setStockList(data))
    }

    const addStockModal = () => {
        console.log('stock')
        setModalData('addStock')
        showModal()
    }

    const addReportModal = () => {
        console.log('report')
        setModalData('addReport')
        showModal()
    }

    useEffect(() => {
        if (!stockList) fetchStockList()
    }, [])

    useEffect(() => {
        
        if (currentStock) {
                       
            setOverview(`/overview/${currentStock._id}`)
            setDiagrams(`/diagrams/${currentStock._id}`)

            getReports(currentStock.stockName)
            .then(res => res.json())
            .then(data => setReportList(data))
            
            const addStock = document.getElementById('add-stock')
           

            addStock.removeEventListener('click', addStockModal)
            addStock.addEventListener('click', addStockModal)

            setTimeout(() => {
                const addReport = document.getElementById('add-report')
                addReport.removeEventListener('click', addReportModal)
                addReport.addEventListener('click', addReportModal)
            }, 2000)

                
            
            
                
        }

    }, [currentStock])

  

    return (
        <div id='nav-container'>
            <ul id='nav-panel'>
                <li className='nav-item'>
                    <DropdownSearch />
                </li>
                <li className='nav-item' id='add-stock'>
                   
                    Add stock
                   
                </li>
                
                {overview ?
                <>
                    <li className='nav-item' id='add-report'>
                        
                        Add report
                       
                    </li>
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
