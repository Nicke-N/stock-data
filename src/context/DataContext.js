import React, { useState } from 'react'

export const DataContext = React.createContext()

export const DataProvider = ({children}) => {
    const [ stockList, setStockList ] = useState(null)
    const [ currentStock, setCurrentStock ] = useState(null)
    const [ authorized, setAuthorized ] = useState(false)
    const [ modalData, setModalData ] = useState(null)

    return (
        <DataContext.Provider
        value={{
            stockList, 
            setStockList,
            currentStock, 
            setCurrentStock,
            authorized, 
            setAuthorized,
            modalData, 
            setModalData
        }}
        >
            {children}
        </DataContext.Provider>
    )
}