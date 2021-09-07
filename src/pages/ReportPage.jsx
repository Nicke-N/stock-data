import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import { getReport, getReports } from '../kit/api/Reports'
import { showModal } from '../kit/Functions'
import { getStock } from '../kit/api/Stocks'

export default function ReportPage() {
    
    const { setCurrentReport, reportList, setReportList, setModalData, currentStock, setCurrentStock,  } = useContext(DataContext)
    const stock = {
        name: localStorage.getItem('stockName'),
        id: localStorage.getItem('id')
    }
    const setReport = (event) => {
        
        const id = event.target.id

        getReport(id)
        .then(res => res.json())
        .then(data => {
            setCurrentReport(data)
            setModalData('edit-report')
            showModal()
        })
    }

    const fetchStock = async () => {

        await getStock(stock.id)
            .then(res => res.json())
            .then(data => {

                setCurrentStock(data)
                
            })

    }

    const setReports = (stockName) => {

        getReports(stockName)
            .then(res => res.json())
            .then(data => setReportList(data))        
    }

    useEffect(() => {
      if (!currentStock) fetchStock()
      if (!reportList) setReports(stock.name)
    }, [])
   
    return (
        <div id='report-list-page'>
            <div id='annuals-container'>
                <h3>Annual reports</h3>
                {reportList && reportList.length > 0 ? reportList.map(element =>( element.type.toLowerCase()) === 'annual' ? <div className='a-report' id={element._id} key={element._id} onClick={setReport}>{element.period}</div> : null) : null}
            </div>
            <div id='quarter-container'>
                <h3>Quarter reports</h3>
            {reportList && reportList.length > 0 ? reportList.map(element =>( element.type.toLowerCase()) === 'quarter' ? <div className='a-report' id={element._id} key={element._id} onClick={setReport}>{element.period}</div> : null) : null}
            </div>
        </div>
    )
}
