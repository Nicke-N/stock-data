import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import { getStock } from '../kit/api/Stocks'
import { getReports, getReport } from '../kit/api/Reports'
import { showModal } from '../kit/Functions'
import Add from '../icons/plus.svg'
import './Overview.css'

export default function OverviewPage(props) {
    const { currentStock, setCurrentStock, reportList, setReportList, setModalData } = useContext(DataContext)
    const stockID = props.match.params.id

    const addNote = document.getElementById('add-note')
    const addRisk = document.getElementById('add-risk')

    const notesModal = () => {
        setModalData('edit notes')
        showModal()
    }

    const risksModal = () => {
        setModalData('edit risks')
        showModal()
    }

    const addEventListeners = () => {

        addNote.removeEventListener('click', notesModal)
        addRisk.removeEventListener('click', risksModal)

        addNote.addEventListener('click', notesModal)
        addRisk.addEventListener('click', risksModal)
    }

    if (addNote) addEventListeners()

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
                        Industry: {currentStock.industry}
                    </div>

                    <div className='overview-description'>
                        Dividend: {currentStock.dividend}
                    </div>

                    <div className='overview-description' id='risk'>
                        <div className='overview-description'>Risk: </div>
                        <div className={currentStock.risk}>{currentStock.risk}</div>
                    </div>

                    <div id='risks-container'>
                        <div className='small-container'>
                            <h5>Risks</h5>
                            <img src={Add} className='overview-icon' id='add-risk' alt="Icon failed to load" />
                        </div>
                        
                        {currentStock.risks.length > 0 ?
                            currentStock.map(element => <div className='stock-risk'>{element}</div>)
                            : null
                        }
                    </div>

                    <div id='notes-container'>
                        <div className='small-container'>
                            <h5>Notes</h5>
                            <img src={Add} className='overview-icon' id='add-note' alt="Icon failed to load" />
                        </div>
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
