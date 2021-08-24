import React, { useEffect, useContext } from 'react'
import { DataContext } from '../context/DataContext'
import './StockOverview.css'

export default function StockOverview() {

    const { currentStock, quarter } = useContext(DataContext)

    useEffect(() => {}, [currentStock])

    return (
        <div id='stock-overview-page'>
            
            <h2> {currentStock.stockName} </h2>
            <div id='stock-details'>
                <div id='industry-niche'>
                    <div>
                        {currentStock.industry}
                    </div>
                    <div>
                        {currentStock.niche}
                    </div>
                </div>
                <div id='risks'>
                    <div id='risk-level'>
                        {currentStock.risk}
                    </div>
                    <div id='risks-container'>
                        {currentStock.risks ? (currentStock.risks).map(elem => <div>{elem}</div>) : null}
                    </div>
                </div>
                <div id='reports-count'>
                    <div>
                        Not coded yet
                    </div>
                    <div>
                        {quarter ? quarter.length : 0}
                    </div>
                </div>
            </div>
            <div id='stock-notes'>
                {currentStock.notes ? (currentStock.notes).map(elem => <div>{elem}</div>) : 'Notes have not been added.'}
            </div>

        </div>
    )
}
