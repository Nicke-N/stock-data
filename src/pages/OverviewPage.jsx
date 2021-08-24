import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import { getStock } from '../kit/api/Stocks'
import { getReports, getReport } from '../kit/api/Reports'

export default function OverviewPage(props) {
    const { currentStock, setCurrentStock, reportList, setReportList } = useContext(DataContext)
    const stockID = props.match.params.id

    useEffect(() => {
        fetchStock()
    }, [])

    const fetchStock = async () => {

        await getStock(stockID)
            .then(res => res.json())
            .then(data => {

                setCurrentStock(data)
                const stock = data.stockName

                getReports(stock)
                .then(res => res.json())
                .then(results => setReportList(results)) 
            })

    }
    return (
        <div id='overview-page'>
            {currentStock ?
                <div id='overview-container'>

                    <div className='overview-description'>
                        {currentStock.stockName}
                    </div>
                    
                    <div className='overview-description'>
                        industry: {currentStock.industry}
                    </div>

                    <div className='overview-description' id='risk'>
                        <div className='overview-description'>Risk: </div>
                        <div className={currentStock.risk}>{currentStock.risk}</div>
                    </div>

                    <div id='risks-container'>
                        {currentStock.risks.length > 0 ?
                            currentStock.map(element => <div className='stock-risk'>{element}</div>)
                            : null
                        }
                    </div>

                    <div id='notes-container'>
                        {currentStock.notes.length > 0 ?
                            currentStock.map(element => <div className='stock-note'>{element}</div>)
                            : null
                        }
                    </div>
                </div>
               
                :
               'Loading...'
            }
            
        </div>
    )
}
