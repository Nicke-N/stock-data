import React, { useContext, useEffect, useState } from 'react'
import FormBtn from './FormBtn'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import { DataContext } from '../context/DataContext'

export default function Report(props) {

    const { setStockList, modalData, currentStock, setReportList, currentReport, type } = useContext(DataContext)
    const [years, setYears] = useState(null)

    var success, fail, yearsArray = []
    const currDate = new Date(),
        year = currDate.getFullYear(),
        periods = [
            'jan - mar',
            'apr - jun',
            'jul - sep',
            'oct - dec'
        ],
        typeOptions = [
            'Annual',
            'Quarter'
        ]

    useEffect(() => {

        success = document.getElementById('add-stock-success')
        fail = document.getElementById('add-stock-failure')

        if (success) {

            fail.style.display = 'none'
            success.style.display = 'none'
        }

        for (let i = 2005; i <= year; i++) {
            yearsArray.push(i)
        }
        setYears(yearsArray)

    }, [])


    return (
        props.type === 'add' ?
            <>
                <FormInput
                    className='crud-pair report'
                    id='stockName'
                    label='Name'
                    maxLength='50'
                    type='text'
                    value={currentStock.stockName}
                    readOnly
                />

                <FormSelect
                    className='crud-pair report'
                    id='type'
                    label='Type'
                    onChange='type'
                    options={typeOptions}
                />

                {
                    type === 'Annual' ?
                        <FormSelect
                            className='crud-pair report'
                            id='period'
                            label='Period'
                            options={years}
                        />
                        :
                        <>
                            <FormSelect
                                className='crud-pair report'
                                id='months'
                                label='Period'
                                options={periods}
                            />

                            <FormSelect
                                className='crud-pair report'
                                id='year'
                                label='Year'
                                options={years}
                            />
                        </>
                }

                <FormInput
                    className='crud-pair report'
                    id='revenue'
                    label='Revenue'
                    maxLength='20'
                    type='number'
                    required
                />

                <FormInput
                    className='crud-pair report'
                    id='costs'
                    label='Costs'
                    maxLength='20'
                    type='number'
                    required
                />

                <FormInput
                    className='crud-pair report'
                    id='result'
                    label='Result'
                    maxLength='20'
                    type='number'
                    required
                />

                <FormInput
                    className='crud-pair report'
                    id='shortTermDebt'
                    label='ShortDebt'
                    maxLength='20'
                    type='number'
                />

                <FormInput
                    className='crud-pair report'
                    id='longTermDebt'
                    label='LongDebt'
                    maxLength='20'
                    type='number'
                />

                <FormInput
                    className='crud-pair report'
                    id='capital'
                    label='Capital'
                    maxLength='20'
                    type='number'
                />

                <FormInput
                    className='crud-pair report'
                    id='capitalAdequacy'
                    label='CapitalAdequacy'
                    maxLength='2'
                    type='number'
                />

                <FormInput
                    className='crud-pair report'
                    id='stockCount'
                    label='Stocks'
                    maxLength='20'
                    type='number'
                />

                <FormInput
                    className='crud-pair report'
                    id='inventory'
                    label='Inventory'
                    maxLength='20'
                    type='number'
                />

                <FormInput
                    className='crud-pair report'
                    id='employees'
                    label='Employees'
                    maxLength='10'
                    type='number'
                />

                <FormInput
                    className='crud-pair report'
                    id='property'
                    label='Property'
                    maxLength='20'
                    type='number'
                />

                <FormBtn
                    className='form-btn report'
                    text='Add report'
                />

            </>
            : props.type === 'edit' ?

                <>
                    <FormInput
                        className='crud-pair report'
                        id='stockName'
                        label='Name'
                        maxLength='50'
                        type='text'
                        value={currentStock.stockName}

                    />

                    <FormSelect
                        className='crud-pair report'
                        id='type'
                        label='Type'
                        onChange='type'
                        options={typeOptions}
                    />

                    {
                        type === 'Annual' ?
                            <FormSelect
                                className='crud-pair report'
                                id='period'
                                label='Period'
                                options={years}
                            />
                            :
                            <>
                                <FormSelect
                                    className='crud-pair report'
                                    id='months'
                                    label='Period'
                                    options={periods}
                                />

                                <FormSelect
                                    className='crud-pair report'
                                    id='year'
                                    label='Year'
                                    options={years}
                                />
                            </>
                    }

                    <FormInput
                        className='crud-pair report'
                        id='revenue'
                        label='Revenue'
                        maxLength='20'
                        type='number'
                        value={currentReport.revenue}
                        required
                    />

                    <FormInput
                        className='crud-pair report'
                        id='costs'
                        label='Costs'
                        maxLength='20'
                        type='number'
                        value={currentReport.costs}
                        required
                    />

                    <FormInput
                        className='crud-pair report'
                        id='result'
                        label='Result'
                        maxLength='20'
                        type='number'
                        value={currentReport.result}
                        required
                    />

                    <FormInput
                        className='crud-pair report'
                        id='shortTermDebt'
                        label='ShortDebt'
                        maxLength='20'
                        type='number'
                        value={currentReport.shortTermDebt}
                    />

                    <FormInput
                        className='crud-pair report'
                        id='longTermDebt'
                        label='LongDebt'
                        maxLength='20'
                        type='number'
                        value={currentReport.longTermDebt}
                    />

                    <FormInput
                        className='crud-pair report'
                        id='capital'
                        label='Capital'
                        maxLength='20'
                        type='number'
                        value={currentReport.capital}
                    />

                    <FormInput
                        className='crud-pair report'
                        id='capitalAdequacy'
                        label='CapitalAdequacy'
                        maxLength='2'
                        type='number'
                        value={currentReport.capitalAdequacy}
                    />

                    <FormInput
                        className='crud-pair report'
                        id='stockCount'
                        label='Stocks'
                        maxLength='20'
                        type='number'
                        value={currentReport.stockCount}
                    />

                    <FormInput
                        className='crud-pair report'
                        id='inventory'
                        label='Inventory'
                        maxLength='20'
                        type='number'
                        value={currentReport.inventory}
                    />

                    <FormInput
                        className='crud-pair report'
                        id='employees'
                        label='Employees'
                        maxLength='10'
                        type='number'
                        value={currentReport.employees}
                    />

                    <FormInput
                        className='crud-pair report'
                        id='property'
                        label='Property'
                        maxLength='20'
                        type='number'
                        value={currentReport.property}
                    />

                    <FormBtn
                        className='form-btn report'
                        text='Edit report'
                    />

                </>

                : null
    )
}
