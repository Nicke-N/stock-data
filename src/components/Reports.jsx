import React, { useContext, useEffect, useState } from 'react'
import ChartRevenue from './ChartRevenue.jsx'
import ChartResult from './ChartResult.jsx'
import ChartCost from './ChartCost.jsx'
import ChartShortDebt from './ChartShortDebt.jsx'
import ChartLongDebt from './ChartLongDebt.jsx'
import ChartCapital from './ChartCapital.jsx'
import { DataContext } from '../context/DataContext'
import './Reports.css'

export default function Reports() {

    const { reportList, quarter, setQuarter } = useContext(DataContext)
   
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
        } else {
            
        }

    }, [reportList])

    useEffect(() => {}, [quarter])

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
                        <ChartRevenue data={{ title: 'Revenue', values: quarter.revenue, keys: quarter.period }} />
                        : <div> hehe </div>
                    }
                </div>
                <div>
                    {quarter.costs.length > 0 ?
                        <ChartCost data={{ title: 'Costs', values: quarter.costs, keys: quarter.period }} />
                        : <div> hehe </div>
                    }
                </div>
                <div>
                    {quarter.result.length > 0 ?
                        <ChartResult data={{ title: 'Result', values: quarter.result, keys: quarter.period }} />
                        : <div> hehe </div>
                    }
                </div>
                <div>
                    {quarter.shortTermDebt.length > 0 ?
                        <ChartShortDebt data={{ title: 'Short Debts', values: quarter.shortTermDebt, keys: quarter.period }} />
                        : <div> hehe </div>
                    }
                </div>
                <div>
                    {quarter.longTermDebt.length > 0 ?
                        <ChartLongDebt data={{ title: 'Long debts', values: quarter.longTermDebt, keys: quarter.period }} />
                        : <div> hehe </div>
                    }
                </div>
                <div>
                    {quarter.capital.length > 0 ?
                        <ChartCapital data={{ title: 'Capital', values: quarter.capital, keys: quarter.period }} />
                        : <div> hehe </div>
                    }
                </div>
            </div> : null
    )
}
