import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import { getStock } from '../kit/api/Stocks'
import { getReports } from '../kit/api/Reports'
import { showModal } from '../kit/Functions'
import Add from '../icons/plus.svg'
import './Overview.css'
import List from '../components/List'

export default function OverviewPage(props) {

    const { currentStock, setCurrentStock, setReportList, setModalData, quartersCount, setQuartersCount, annualsCount, setAnnualsCount } = useContext(DataContext)
    
    const stockID = props.match.params.id

    const addNote = document.getElementById('add-note')
    const addRisk = document.getElementById('add-risk')

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
                setReports(data.stockName)
            })

    }

    const setReports = (stockName) => {

        getReports(stockName)
            .then(res => res.json())
            .then(data => {

                var annuals = 0, quarters = 0
                setReportList(data)
                data.map(element => (element.type).toLowerCase() === 'annual' ? annuals++ : quarters++)

                setAnnualsCount(annuals)
                setQuartersCount(quarters)
            })
    }

    const removeStock = () => {
        setModalData('remove-stock')
        showModal()
    }

    if (addNote) addEventListeners()

    useEffect(() => {
        fetchStock()
    }, [])

    useEffect(() => {
        if (currentStock) setReports(currentStock.stockName)
    }, [currentStock])

    return (

        currentStock ?
            <div id='overview-page'>
                <div id='overview-container'>

                    <div className='overview-description'>
                        <h1>{currentStock.stockName}</h1>
                    </div>

                    <div className='overview-description'>
                        Industry: {currentStock.industry}
                    </div>

                    <div className='overview-description'>
                        Dividend: {currentStock.dividend}%
                    </div>

                    <div className='overview-description'>
                        Annuals: {annualsCount}
                    </div>
                    <div className='overview-description'>
                        Quarters: {quartersCount}
                    </div>

                    <div className='overview-description' id='risk-level'>
                        <div className={currentStock.risk} >Risk: {currentStock.risk} </div>
                    </div>

                    <div id='remove-stock' onClick={removeStock}>
                        X
                    </div>
                </div>

                <List 
                    containerId='risks-container'
                    containerClassName='small-container'
                    title='Risks'
                    src={Add}
                    imgId='add-risk'
                    imgClassName='overview-icon'
                    alt='Icon failed to load'
                    data={currentStock.risks}
                    ulClassName='list-container'
                    liClassName='stock-risk'
                    modalData='remove-risk'
                />

                <List
                    containerId='notes-container'
                    containerClassName='small-container'
                    title='Notes'
                    src={Add}
                    imgId={'add-note'}
                    imgClassName='overview-icon'
                    alt='Icon failed to load'
                    data={currentStock.notes}
                    ulClassName='list-container'
                    liClassName='stock-note'
                    modalData='remove-note'
                />
            </div>
            :
            'Loading...'
    )
}
