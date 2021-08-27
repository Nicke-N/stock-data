import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContext'
import { getStock } from '../kit/api/Stocks'
import { getReports, getReport } from '../kit/api/Reports'
import { showModal } from '../kit/Functions'
import Add from '../icons/plus.svg'
import './Overview.css'

export default function OverviewPage(props) {

    const { currentStock, setCurrentStock, reportList, setReportList, setModalData } = useContext(DataContext)
    const [ quarter, setQuarter ] = useState(null)
    const [ annual, setAnnual ] = useState(null)

    const stockID = props.match.params.id

    const addNote = document.getElementById('add-note')
    const addRisk = document.getElementById('add-risk')
    var annuals = 0, quarters = 0

    const notesModal = () => {
        setModalData('notes')
        showModal()
    }

    const risksModal = () => {
        setModalData('risks')
        showModal()
    }

    const addEventListeners = () => {

        addNote.removeEventListener('click', notesModal)
        addRisk.removeEventListener('click', risksModal)

        addNote.addEventListener('click', notesModal)
        addRisk.addEventListener('click', risksModal)
    }

    const fetchStock = async () => {

        await getStock(stockID)
            .then(res => res.json())
            .then(data => {

                setCurrentStock(data)
                const stock = data.stockName

                getReports(stock)
                .then(res => res.json())
                .then(data => {
                    setReportList(data)
                    data.map(element => element.type === 'annual' ? annuals++ : quarters++)

                    setAnnual(annuals)
                    setQuarter(quarters)
                }) 
                
            })

    }
    if (addNote) addEventListeners()

    useEffect(() => {
        fetchStock()
    }, [])


  

    return (
        <div id='overview-page'>
            {currentStock ?
                <div id='overview-container'>

                    <div className='overview-description'>
                        <h2>{currentStock.stockName}</h2>
                    </div>
                    
                    <div className='overview-description'>
                        Industry: {currentStock.industry}
                    </div>

                    <div className='overview-description'>
                        Dividend: {currentStock.dividend}
                    </div>

                    <div className='overview-description'>
                        Annuals: {annual}
                    </div>
                    <div className='overview-description'>
                        Quarters: {quarter}
                    </div>

                    <div className='overview-description' id='risk-level'>
                        <div className={currentStock.risk} >Risk: {currentStock.risk} </div>
                    </div>


                    <div id='risks-container'>
                        <div className='small-container'>
                            <h5>Risks</h5>
                            <img src={Add} className='overview-icon' id='add-risk' alt="Icon failed to load" />
                        </div>
                        <ul>
                        {currentStock.risks.length > 0 ?
                            currentStock.risks.map((element, index)=> <li key={index} className='stock-risk'>{element}</li>)
                            : null
                        }
                        </ul>
                        
                    </div>

                    <div id='notes-container'>
                        <div className='small-container'>
                            <h5>Notes</h5>
                            <img src={Add} className='overview-icon' id='add-note' alt="Icon failed to load" />
                        </div>
                        <ul>
                        {currentStock.notes.length > 0 ?
                            currentStock.notes.map((element, index) => <li key={index} className='stock-note'>{element}</li>)
                            : null
                        }
                        </ul>
                    </div>
                </div>
               
                :
               'Loading...'
            }
            
        </div>
    )
}
