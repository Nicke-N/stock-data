import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import { getStock } from '../kit/api/Stocks'
import { getResults, getResult } from '../kit/api/Results'

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

                getResults(stock)
                .then(res => res.json())
                .then(results => setReportList(results)) 
            })

    }
    return (
        <div id='overview-page'>
            {currentStock ? 
                <div >
                    {currentStock.stockName}
                </div>
                :
               'Loading...'
            }
            
        </div>
    )
}
