import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import { getStock } from '../kit/api/Stocks'
import { getResults, getResult } from '../kit/api/Results'
import StockDetails from '../components/StockDetails'
import './StockPage.css'
import Reports from '../components/Reports'

export default function StockPage(props) {

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
        <div id='detail-page'>
            <StockDetails />

            {/* {reportList ?
                Object.entries(reportList).map((report) => {
                    return Object.entries(report[1]).map((element) => {
                  
                        return (
                            <div key={element[0] + report[0]}>
                                {element[0]} : {element[1]}
                            </div>
                        )
                    })
                })
                : null
            } */}
            <Reports />
        </div>
    )
}
