import React, { useState } from 'react'

export const DataContext = React.createContext()

export const DataProvider = ({children}) => {

    const [ stockList, setStockList ] = useState(null)
    const [ currentStock, setCurrentStock ] = useState(null)

    const [ reportList, setReportList ] = useState(null)
    const [ currentReport, setCurrentReport ] = useState(null)

    const [ authorized, setAuthorized ] = useState(false)
    const [ modalData, setModalData ] = useState(null)

    const [ searchTerm, setSearchTerm ] = useState('')

    const [ quarter, setQuarter ] = useState(null)
    const [ annual, setAnnual ] = useState(null)

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
            authorized, 
            setAuthorized,
            modalData, 
            setModalData,
            searchTerm,
            setSearchTerm,
            quarter, 
            setQuarter,
            annual,
            setAnnual
        }}
        >
            {children}
        </DataContext.Provider>
    )
}