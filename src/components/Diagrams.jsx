import React, { useContext, useEffect, useState } from 'react'
import Chart from './Chart.jsx'
import { DataContext } from '../context/DataContext'
import './Diagrams.css'

export default function Diagrams() {

    const { reportList, annual, setAnnual quarter, setQuarter, currentStock } = useContext(DataContext)

    const exceptions = [
        '__v',
        '_id',
        'stockName',
        'type',
        'employees',
        'property',
        'inventory'
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
        capitalAdequacy: []
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
        capitalAdequacy: []
    }

    useEffect(() => {
        if (reportList) { 
            fillData()
        } 
        

    }, [reportList])

    useEffect(() => {console.log(reportList);}, [quarter])

    const fillData = () => {
        reportList.map((value, index) => {
            Object.entries(value).map((element) => {

                if (value.type === 'annual') {
                    if (!exceptions.includes(element[0])) annuals[element[0]].push(element[1])

                } else {
                    if (!exceptions.includes(element[0])) quarters[element[0]].push(element[1])
                }
            })
        })

        setQuarter(quarters)
    }

    return (

        quarter ?
            <div id='report-container'>
                <div>
                    {quarter.revenue.length > 0 ?
                        <Chart data={{ title: 'Revenue', values: quarter.revenue, keys: quarter.period }} id='revenue-chart'/>
                        : <div> hehe </div>
                    }
                </div>
                <div>
                    {quarter.costs.length > 0 ?
                        <Chart data={{ title: 'Costs', values: quarter.costs, keys: quarter.period }} id='costs-chart' />
                        : <div> hehe </div>
                    }
                </div>
                <div>
                    {quarter.result.length > 0 ?
                        <Chart data={{ title: 'Result', values: quarter.result, keys: quarter.period }} id='result-chart'/>
                        : <div> hehe </div>
                    }
                </div>
                <div>
                    {quarter.shortTermDebt.length > 0 ?
                        <Chart data={{ title: 'Short Debts', values: quarter.shortTermDebt, keys: quarter.period }} id='short-debt-chart' />
                        : <div> hehe </div>
                    }
                </div>
                <div>
                    {quarter.longTermDebt.length > 0 ?
                        <Chart data={{ title: 'Long debts', values: quarter.longTermDebt, keys: quarter.period }} id='long-debt-chart' />
                        : <div> hehe </div>
                    }
                </div>
                <div>
                    {quarter.capital.length > 0 ?
                        <Chart data={{ title: 'Capital', values: quarter.capital, keys: quarter.period }} id='capital-chart' />
                        : <div> hehe </div>
                    }
                </div>
            </div> : null
    )
}
