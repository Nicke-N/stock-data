import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import Report from './Report'
import Stock from './Stock'
import ContainerToArray from './ContainerToArray'
import { addReport, editReport, getReports } from '../kit/api/Reports'
import { addStock, editStock, getStocks } from '../kit/api/Stocks'
import { closeModal } from '../kit/Functions'

export default function Form() {

    const { 
        modalData, 
        setSuccess, 
        setModalData, 
        setStockList, 
        currentStock, 
        type, 
        setReportList, 
        setAnnualsCount, 
        setQuartersCount, 
        currentReport
    } = useContext(DataContext)

    const submitForm = async (event) => {

        event.preventDefault()

        if (modalData === 'add-stock' || modalData === 'edit-stock') {

            const stockName = document.getElementById('stockName').value
            const dividend = document.getElementById('dividend').value
            const industry = document.querySelector(`input[name=Industry]:checked`).title
            const risk = document.querySelector(`input[name=Risk]:checked`).title
            
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
                        closeModal()
                    })
            }
            setTimeout(() => {
                getStocks()
                    .then(res => res.json())
                    .then(data => setStockList(data))
                
            }, 3000);
        } else if (modalData === 'add-report' || modalData === 'edit-report') {

            var details = {}
            const values = Array.from(event.target)

            values.map((element, index) => type === 'Quarter' && element.name === 'year' ? details['period'] = `${values[index - 1].value} ${values[index].value}` : element.name !== 'months' && element.value !== '' ? details[element.name] = element.value : null)
            details.type = type

            if (modalData === 'add-report') {
                addReport(details)
                    .then(res => res.text())
                    .then(data => {
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
