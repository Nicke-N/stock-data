import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import './StockDetails.css'

export default function StockDetails() {

    const { currentStock, quarter } = useContext(DataContext)
    const exceptions = [
        '__v',
        '_id',
        'notes',
        'inventory',
        'property',
        'employees',
        'stockCount'
    ]
    useEffect(() => {}, [currentStock, quarter])



    return (
        <div id='detail-wrapper'>
           {currentStock && Object.entries(currentStock).map((element) => {
                    if (!exceptions.includes(element[0])) {
                        return (
                            <div key={element[0]} className={`detail-container ${element[0]}`}>
                               <span className='detail-prop'>
                                    {element[0]}
                               </span>
                               <span className='detail-value'>
                                    {element[1]} {element[0] === 'dividend' ? '%' : null}
                               </span>
                            </div>
                        )
                    }
                })
            }
            <div id='reports' className='detail-container'>
                <button className='detail-prop modal-ref report-nav'>
                    Annuals: 
                </button>
                <button className='detail-value modal-ref report-nav'>
                    Quarters: {quarter ? quarter.period.length : null}
                </button>
            </div>
            <div id='note-container'>
                {currentStock && (currentStock.notes).map((note, index) => {
                    <div className='note' key={`note${index}`}>
                        {note}
                    </div>
                })
                }
            </div>
        </div>
    )
}
