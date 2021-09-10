import React from 'react'
import FormBtn from './FormBtn'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import './Form.css'
import FormSelectCustom from './FormSelectCustom'

export default function Stock(props) {

    const industries = [
        'Aerospace',
        'Agriculture',
        'Construction',
        'Education',
        'Electronics',
        'Energy',
        'Entertainment',
        'Finances',
        'Food',
        'Healthcare',
        'Hospitality',
        'IT',
        'Manufacturing',
        'Mining',
        'Music',
        'News media',
        'Pharamceutical',
        'Property management',
        'Telecommunication',
        'Transport',
        'World wide web'
    ], riskLevels = [
        'High',
        'Medium',
        'Low',
        'Unknown'
    ]

    return (
        props.type === 'add' ?
            <>
                <FormInput
                    className='crud-pair stock'
                    label='Name'
                    maxLength='50'
                    id='stockName'
                    type='text'
                    required
                />

                <FormSelectCustom
                    label='Industry'
                    summaryId='industries-summary'
                    listId='industries'
                    options={industries}
                />

                {/* <FormSelect
                    className='crud-pair stock'
                    label='Industry'
                    id='industry'
                    options={industries}
                    required
                /> */}

                <FormInput
                    className='crud-pair stock'
                    id='dividend'
                    label='Dividend'
                    maxLength='10'
                    type='tele'
                />

                <FormSelectCustom
                    summaryId='risks-summary'
                    listId='risks'
                    options={riskLevels}
                    label='Risk'
                />

                <FormBtn
                    className='form-btn stock-btn'
                    text='Add stock'
                />
            </>
            : props.type === 'edit' ?
                <>
                    <FormInput
                        className='crud-pair stock'
                        label='Name'
                        maxLength='50'
                        id='stockName'
                        type='text'
                        required
                    />

                    <FormSelectCustom
                        label='Industry'
                        summaryId='industries-summary'
                        listId='industries'
                        options={industries}
                    />

                    {/* <FormSelect
                        className='crud-pair stock'
                        label='Industry'
                        id='industry'
                        options={industries}
                        required
                    /> */}

                    <FormInput
                        className='crud-pair stock'
                        id='dividend'
                        label='Dividend'
                        maxLength='10'
                        type='tele'
                    />

                    <FormSelectCustom
                        summaryId='risks-summary'
                        listId='risks'
                        options={riskLevels}
                        label='Risk'
                    />


                    {/* <FormSelect
                        className='crud-pair stock'
                        label='Risk'
                        id='risk'
                        options={riskLevels}
                    /> */}

                    <FormBtn
                        className='form-btn stock-btn'
                        text='Add stock'
                    />
                </>
                : null

    )
}
