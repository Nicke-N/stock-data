import React, { useState } from 'react'

export const DataContext = React.createContext()

export const DataProvider = ({children}) => {

    const [ stockList, setStockList ] = useState(null)
    const [ currentStock, setCurrentStock ] = useState(null)

    const [ reportList, setReportList ] = useState(null)
    const [ currentReport, setCurrentReport ] = useState(null)

    const [ searchTerm, setSearchTerm ] = useState('')
    const [ diagramOption, setDiagramOption ] = useState(null)
    const [ type, setType ] = useState('Annual')

    const [ quarter, setQuarter ] = useState(null)
    const [ annual, setAnnual ] = useState(null)

    const [ remove, setRemove ] = useState(null)
    const [ modalData, setModalData ] = useState(null) 

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
            remove, 
            setRemove,
            type, 
            setType
        }}
        >
            {children}
        </DataContext.Provider>
    )
}