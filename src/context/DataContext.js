import React, { useState } from 'react'

export const DataContext = React.createContext()

export const DataProvider = ({children}) => {
    // All stocks
    const [ stockList, setStockList ] = useState(null)
    const [ currentStock, setCurrentStock ] = useState(null)
    // All reports for a specific stock
    const [ reportList, setReportList ] = useState(null)
    const [ currentReport, setCurrentReport ] = useState(null)

    const [ authorized, setAuthorized ] = useState(false)
    const [ modalData, setModalData ] = useState(null)

    const [ searchValue, setSearchValue ] = useState('')

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
            searchValue,
            setSearchValue
        }}
        >
            {children}
        </DataContext.Provider>
    )
}