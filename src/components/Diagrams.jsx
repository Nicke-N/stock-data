import React, { useContext, useEffect, useState } from 'react'
import Chart from './Chart.jsx'
import { DataContext } from '../context/DataContext'
import './Diagrams.css'

export default function Diagrams() {

    const { reportList, annual, setAnnual, quarter, setQuarter, currentStock, diagramOption } = useContext(DataContext)

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

    useEffect(() => {}, [quarter])

    const fillData = () => {
        reportList.map(value => {
            Object.entries(value).map((element) => {
                
                if ((value.type).toLowerCase() === 'annual') {
                    console.log(value)
                console.log(element)
                    if (!exceptions.includes(element[0])) annuals[element[0]].push(element[1])

                } else {
                    if (!exceptions.includes(element[0])) quarters[element[0]].push(element[1])
                }
            })
        })
       
        setQuarter(quarters)
        setAnnual(annuals)

        console.log(annual)
    }

    return (

        diagramOption === 'quarter' && quarter ?
            <div id='report-container'>
                <div>
                    {quarter.revenue.length > 0 ?
                        <Chart data={{ title: 'Revenue', values: quarter.revenue, keys: quarter.period }} id='revenue-chart' />
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
                        <Chart data={{ title: 'Result', values: quarter.result, keys: quarter.period }} id='result-chart' />
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
                <div>
                    {quarter.capitalAdequacy.length > 0 ?
                        <Chart data={{ title: 'Capital Adequacy (%)', values: quarter.capitalAdequacy, keys: quarter.period }} id='capital-adequacy-chart' />
                        : <div> hehe </div>
                    }
                </div>
                <div>
                    {quarter.stockCount.length > 0 ?
                        <Chart data={{ title: 'Stock Count', values: quarter.stockCount, keys: quarter.period }} id='stock-count-chart' />
                        : <div> hehe </div>
                    }
                </div>
                <div>
                    {quarter.inventory && quarter.inventory.length > 0 ?
                        <Chart data={{ title: 'Inventory', values: quarter.inventory, keys: quarter.period }} id='inventory-chart' />
                        : <div> hehe </div>
                    }
                </div>
                <div>
                    {quarter.employees && quarter.employees.length > 0 ?
                        <Chart data={{ title: 'Employees', values: quarter.employees, keys: quarter.period }} id='employees-chart' />
                        : <div> hehe </div>
                    }
                </div>
                <div>
                    {quarter.property && quarter.property.length > 0 ?
                        <Chart data={{ title: 'Property', values: quarter.property, keys: quarter.period }} id='property-chart' />
                        : <div> hehe </div>
                    }
                </div>
            </div>
            : diagramOption === 'annual' && annual ?
                <div id='report-container'>
                    <div>
                        {annual.revenue.length > 0 ?
                            <Chart data={{ title: 'Revenue', values: annual.revenue, keys: annual.period }} id='revenue-chart' />
                            : <div> hehe </div>
                        }
                    </div>
                    <div>
                        {annual.costs.length > 0 ?
                            <Chart data={{ title: 'Costs', values: annual.costs, keys: annual.period }} id='costs-chart' />
                            : <div> hehe </div>
                        }
                    </div>
                    <div>
                        {annual.result.length > 0 ?
                            <Chart data={{ title: 'Result', values: annual.result, keys: annual.period }} id='result-chart' />
                            : <div> hehe </div>
                        }
                    </div>
                    <div>
                        {annual.shortTermDebt.length > 0 ?
                            <Chart data={{ title: 'Short Debts', values: annual.shortTermDebt, keys: annual.period }} id='short-debt-chart' />
                            : <div> hehe </div>
                        }
                    </div>
                    <div>
                        {annual.longTermDebt.length > 0 ?
                            <Chart data={{ title: 'Long debts', values: annual.longTermDebt, keys: annual.period }} id='long-debt-chart' />
                            : <div> hehe </div>
                        }
                    </div>
                    <div>
                        {annual.capital.length > 0 ?
                            <Chart data={{ title: 'Capital', values: annual.capital, keys: annual.period }} id='capital-chart' />
                            : <div> hehe </div>
                        }
                    </div>
                    <div>
                        {annual.capitalAdequacy.length > 0 ?
                            <Chart data={{ title: 'Capital Adequacy (%)', values: annual.capitalAdequacy, keys: annual.period }} id='capital-adequacy-chart' />
                            : <div> hehe </div>
                        }
                    </div>
                    <div>
                        {annual.stockCount.length > 0 ?
                            <Chart data={{ title: 'Stock Count', values: annual.stockCount, keys: annual.period }} id='stock-count-chart' />
                            : <div> hehe </div>
                        }
                    </div>
                    <div>
                        {annual.inventory && annual.inventory.length > 0 ?
                            <Chart data={{ title: 'Inventory', values: annual.inventory, keys: annual.period }} id='inventory-chart' />
                            : <div> hehe </div>
                        }
                    </div>
                    <div>
                        {annual.employees && annual.employees.length > 0 ?
                            <Chart data={{ title: 'Employees', values: annual.employees, keys: annual.period }} id='employees-chart' />
                            : <div> hehe </div>
                        }
                    </div>
                    <div>
                        {annual.property && annual.property.length > 0 ?
                            <Chart data={{ title: 'Property', values: annual.property, keys: annual.period }} id='property-chart' />
                            : <div> hehe </div>
                        }
                    </div>
                </div>
                : null
    )
}
