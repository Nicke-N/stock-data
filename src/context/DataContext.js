import React, { useEffect, useState } from 'react'
import { getStock, getStocks } from '../kit/api/Stocks'
import { getReports } from '../kit/api/Reports'

export const DataContext = React.createContext()

export const DataProvider = ({children}) => {

    const [ stockList, setStockList ] = useState(null)
    const [ currentStock, setCurrentStock ] = useState(null)

    const [ reportList, setReportList ] = useState(null)
    const [ currentReport, setCurrentReport ] = useState(null)
    const [ quartersCount, setQuartersCount ] = useState(null)
    const [ annualsCount, setAnnualsCount ] = useState(null)

    const [ searchTerm, setSearchTerm ] = useState('')
    
    const [ overview, setOverview ] = useState(null)

    const [ quarter, setQuarter ] = useState(null)
    const [ annual, setAnnual ] = useState(null)

    const [ success, setSuccess ] = useState(null)
    const [ modalData, setModalData ] = useState(null)

    const [ type, setType ] = useState('Annual')
    const [ diagramOption, setDiagramOption ] = useState('annual')

    const stock = {
        name: localStorage.getItem('stockName'),
        id: localStorage.getItem('id')
    }

    const fetchStock = async (id) => {

        await getStock(id)
            .then(res => res.json())
            .then(data => setCurrentStock(data))

    }

    const setReports = (stockName) => {

        getReports(stockName)
            .then(res => res.json())
            .then(data => setReportList(data))        
    }


    useEffect(() => {
        if (stock.id) fetchStock(stock.id)
        if (stock.name) setReports(stock.name)
    }, [])


    return (
        <DataContext.Provider
        value={{
            stockList, 
            setStockList,
            currentStock, 
            setCurrentStock,
            reportList, 
            setReportList,
            currentReport, 
            setCurrentReport,
            modalData, 
            setModalData,
            searchTerm,
            setSearchTerm,
            quarter, 
            setQuarter,
            annual,
            setAnnual,
            diagramOption, 
            setDiagramOption,
            success, 
            setSuccess,
            type, 
            setType,
            overview,
            setOverview,
            quartersCount, 
            setQuartersCount,
            annualsCount, 
            setAnnualsCount,
            
        }}
        >
            {children}
        </DataContext.Provider>
    )
}