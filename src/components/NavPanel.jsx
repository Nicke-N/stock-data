import React, { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import DropdownSearch from './DropdownSearch'
import { DataContext } from '../context/DataContext'
import { getStocks } from '../kit/api/Stocks'
import { getReports } from '../kit/api/Reports'
import { back, showModal } from '../kit/Functions'
import DropDownSearchCustom from './DropDownSearchCustom'

export default function NavPanel() {

    const { 
        stockList, 
        setStockList, 
        currentStock, 
        setReportList, 
        setModalData, 
        overview, 
        setOverview
    } = useContext(DataContext)
    
    const [ diagrams, setDiagrams ] = useState(null)
    const [ reports, setReports] = useState(null)

    const fetchStockList = async () => {
        await getStocks()
        .then(res => res.json())
        .then(data => setStockList(data))
    }

    const addStockModal = () => {

        setModalData('add-stock')
        showModal()
    }

    const addReportModal = () => {

        setModalData('add-report')
        showModal()
    }

    useEffect(() => {
        if (!stockList) fetchStockList()

        const addStock = document.getElementById('add-stock')
        if (addStock) {
            addStock.removeEventListener('click', addStockModal)
            addStock.addEventListener('click', addStockModal)
        }
        
    }, [])

    useEffect(() => {
        
        if (currentStock) {
                       
            setOverview(`/overview/${currentStock._id}`)
            setDiagrams(`/diagrams/${currentStock._id}`)
            setReports(`/reports/${currentStock.stockName}`)

            getReports(currentStock.stockName)
            .then(res => res.json())
            .then(data => setReportList(data))
            
            setTimeout(() => {
                const addReport = document.getElementById('add-report')
                if (addReport) {
                    addReport.removeEventListener('click', addReportModal)
                    addReport.addEventListener('click', addReportModal)
                }
                
            }, 2000)                
        }

    }, [currentStock])

    return (
        <div id='nav-container'>
            <ul id='nav-panel'>
                <li>
                    {/* <DropdownSearch /> */}
                    <DropDownSearchCustom />
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
                    <li className='nav-item'> 
                        <Link to={reports}>
                            Reports
                        </Link>
                    </li>
                </>
                : null
            }
                <li className='nav-item'>
                    <a href='#' onClick={back}>
                        Back
                    </a>
                </li>
                <li>
                    <strong>Known issues:</strong>
                </li>
                <li>
                    This project is on hold, until I've solved how to read custom fields from PDF files
                </li>
            </ul>
           
            
            
        </div>
    )
}
