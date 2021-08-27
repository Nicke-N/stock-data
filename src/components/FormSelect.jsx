import React, { useEffect, useContext } from 'react'
import { DataContext } from '../context/DataContext'

export default function FormSelect(props) {

    const { type, setType } = useContext(DataContext)
    var select

    const setStockType = event => setType(event.target.value)

    useEffect(() => {
        select = document.getElementById(props.id)

        if (select) {

            select.textContent = ''
    
            props.options.map(element => {
                let option = document.createElement('option')
                option.setAttribute('value', element)
                option.textContent = element
               
                select.appendChild(option)
            })
        }
    }, [])

    return (
        <div className={props.className}>
            <label htmlFor={props.label} >{props.label}</label>
            {props.required ? 
                <select name={props.label}  id={props.id} required></select>
                : props.onChange === 'type' ?
                <select name={props.label}  id={props.id} onChange={setStockType}></select>
                    : <select name={props.label}  id={props.id}></select>
            }
        </div>
    )
}
