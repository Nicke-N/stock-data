import React, { useContext, useEffect } from 'react'
import Chart from './Chart.jsx'
import { DataContext } from '../context/DataContext'
import './Diagrams.css'

export default function Diagrams() {

    const { reportList, annual, setAnnual, quarter, setQuarter, diagramOption } = useContext(DataContext)
    const exceptions = [
        '__v',
        '_id',
        'stockName',
        'type',
    ]
    var annuals = {
        revenue: [],
        result: [],
        costs: [],
        period: [],
        shortTermDebt: [],
        longTermDebt: [],
        capital: [],
        stockSpecificData: [],
        stockCount: [],
        capitalAdequacy: [],
        employees: [],
        inventory: [],
        property: []
    }, quarters = {
        revenue: [],
        result: [],
        costs: [],
        period: [],
        shortTermDebt: [],
        longTermDebt: [],
        capital: [],
        stockSpecificData: [],
        stockCount: [],
        capitalAdequacy: [],
        employees: [],
        inventory: [],
        property: []
    }

    useEffect(() => {
        if (reportList) fillData()
    }, [reportList])

    const fillData = () => {
        reportList.map(value => {
            Object.entries(value).map((element) => {

                if ((value.type).toLowerCase() === 'annual') {

                    if (!exceptions.includes(element[0])) annuals[element[0]].push(element[1])

                } else {
                    if (!exceptions.includes(element[0])) quarters[element[0]].push(element[1])
                }
            })
        })

        setQuarter(quarters)
        setAnnual(annuals)

    }

    return (
        <div id='report-container'>
            {diagramOption === 'annual' && annual ?

                Object.entries(annual).map(element => <Chart key={element[0]} data={{ title: element[0], values: element[1], keys: annual.period }} id={diagramOption + '-' + element[0] + '-chart'} />)

                : diagramOption === 'quarter' && quarter ?

                    Object.entries(quarter).map(element => <Chart key={element[0]} data={{ title: element[0], values: element[1], keys: quarter.period }} id={diagramOption + '-' + element[0] + '-chart'} />)

                    : null}
        </div>

    )
}
