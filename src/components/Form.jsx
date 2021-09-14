import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import Report from './Report'
import Stock from './Stock'
import ContainerToArray from './ContainerToArray'
import { addReport, editReport, getReports } from '../kit/api/Reports'
import { addStock, editStock, getStocks } from '../kit/api/Stocks'
import { closeModal, IDvalue, NAMEvalue } from '../kit/Functions'

export default function Form() {

    const { 
        modalData, 
        setSuccess, 
        setModalData, 
        setStockList, 
        currentStock, 
        setReportList, 
        setAnnualsCount, 
        setQuartersCount, 
        currentReport
    } = useContext(DataContext)

    const submitForm = async (event) => {

        event.preventDefault()

        if (modalData === 'add-stock' || modalData === 'edit-stock') {

            const stockName = IDvalue('stockName')
            const dividend = IDvalue('dividend')
            const industry = NAMEvalue('Industry')
            const risk = NAMEvalue('Risk')
            
            const details = {
                stockName: stockName,
                industry: industry,
                dividend:dividend,
                risk: risk
            }
            console.log(details)
            if (modalData === 'add-stock') {
                addStock(details)
                    .then(res => res.text())
                    .then(data => {
                        setModalData(null)
                        if (data === 'Stock was added!') {
                            setSuccess('success')
                        } else {
                            setSuccess('failure')
                        }
                    })
            } else if (modalData === 'edit-stock') {
                editStock(currentStock._id, details)
                    .then(res => res.text())
                    .then(data => {
                        setModalData(null)
                        if (data === 'Stock was updated!') {
                            setSuccess('success')
                        } else {
                            setSuccess('failure')
                        }
                        
                    })
            }
            closeModal()
            setTimeout(() => {
                getStocks()
                    .then(res => res.json())
                    .then(data => setStockList(data))
                
            }, 3000);
        } else if (modalData === 'add-report' || modalData === 'edit-report') {

            const stockName = IDvalue('stockName')
            const type = NAMEvalue('Type')
            const period = type === 'Annual' ? NAMEvalue('Year') : `${NAMEvalue('Period')} ${NAMEvalue('Year')}` 
            const revenue = IDvalue('revenue')
            const costs = IDvalue('costs')
            const result = IDvalue('result')
            const shortDebt = IDvalue('shortTermDebt')
            const longDebt = IDvalue('longTermDebt')
            const capital = IDvalue('capital')
            const capitalAdequacy = IDvalue('capitalAdequacy')
            const stockCount = IDvalue('stockCount')
            const inventory = IDvalue('inventory')
            const employees = IDvalue('employees')
            const property = IDvalue('property')
            

            const details = {
                stockName: stockName,
                type: type,
                period: period,
                revenue: revenue,
                costs: costs,
                result: result,
                shortTermDebt: shortDebt,
                longTermDebt: longDebt,
                capital: capital,
                capitalAdequacy: capitalAdequacy,
                stockCount: stockCount,
                inventory: inventory,
                employees: employees,
                property: property
            }

            if (modalData === 'add-report') {
                addReport(details)
                    .then(res => res.text())
                    .then(data => {
                        setModalData(null)
                        if (data === 'Report was added!') {
                            setSuccess('success')
                        } else {
                            setSuccess('failure')
                        }
                    })
            } else if (modalData === 'edit-report') {
                editReport(currentReport._id, details)
                    .then(res => res.text())
                    .then(data => {
                        setModalData(null)
                        if (data === 'Report was updated!') {
                            setSuccess('success')
                        } else {
                            setSuccess('failure')
                        }
                        closeModal()
                    })
            }


            setTimeout(() => {
                getReports(currentStock.stockName)
                    .then(res => res.json())
                    .then(data => {

                        var annuals = 0, quarters = 0
                        setReportList(data)
                        data.map(element => (element.type).toLowerCase() === 'annual' ? annuals++ : quarters++)

                        setAnnualsCount(annuals)
                        setQuartersCount(quarters)
                        closeModal()
                    })
            }, 3000);
        }


    }
    return (
        <form className='crud-content' id='form' onSubmit={submitForm}>

            {modalData === 'add-report' ?
                <Report type='add' />
                : modalData === 'edit-report' ?
                    <Report type='edit' />
                    : modalData === 'add-stock' ?
                        <Stock type='add' />
                        : modalData === 'edit-stock' ?
                            <Stock type='edit' />
                            : modalData === 'notes' || modalData === 'risks' ?
                                <ContainerToArray />
                                : null
            }   

        </form>
    )
}
