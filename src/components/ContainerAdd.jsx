import React, { useContext, useEffect, useState } from 'react'
import { addStock, getStocks } from '../kit/api/Stocks'
import { getReports, addReport } from '../kit/api/Reports'
import { DataContext } from '../context/DataContext'
import { closeModal } from '../kit/Functions'
import './CrudStyle.css'
import SuccessMsg from './SuccessMsg'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormBtn from './FormBtn'
import Report from './Report'
import Stock from './Stock'

export default function ContainerAdd() {

    const { setStockList, modalData, currentStock, setReportList, type, setModalData, setSuccess, setAnnualsCount, setQuartersCount } = useContext(DataContext)

    var fail, success

    const submitForm = async (event) => {

        event.preventDefault()

        if (modalData === 'add-stock') {
            
            const details = {
                stockName: event.target[0].value,
                industry: event.target[1].value,
                dividend: event.target[2].value,
                risk: event.target[3].value
            }

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
            setTimeout(() => {
                getStocks()
                    .then(res => res.json())
                    .then(data => setStockList(data))
                closeModal()
            }, 3000);
        } else if (modalData === 'add-report') {

            var details = {}
            const values = Array.from(event.target)

            values.map((element, index )=> type === 'Quarter' && element.name === 'year' ? details['period'] = `${values[index-1].value} ${values[index].value}` : element.name !== 'months' && element.value !== '' ? details[element.name] = element.value : null)
            
            addReport(details)
            .then(res => res.text())
            .then(data => {
                if (data === 'Report was added!') {
                    setSuccess('success')
                } else {
                    setSuccess('failure')
                }
            })
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

    useEffect(() => { console.log(type) }, [type])

    return (
        <div className='crud-container'>

            <form className='crud-content' id='form' onSubmit={submitForm}>

                {modalData === 'add-stock' ?

                    <Stock type='add' />
                    : modalData === 'add-report' ?
                        <Report type='add' />
                        : null
                }

            </form>
        </div>
    )
}
