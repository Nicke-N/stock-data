import React, { useEffect, useContext } from 'react'
import { DataContext } from '../context/DataContext'

export default function FormSelect(props) {

    const { setType, type } = useContext(DataContext)
    var select

    const setStockType = event => setType(event.target.value)
  
    const setOptions = () => {
        select = document.getElementById(props.id)

        if (select) {

            select.textContent = ''
            if (props.options) {
                props.options.map(element => {
                    let option = document.createElement('option')
                    option.setAttribute('value', element)
                    option.textContent = element
                   
                    select.appendChild(option)
                })
            }
        }
    }

    useEffect(() => {
        setOptions()
    }, [])

    useEffect(() => {
       setOptions()
    }, [props.options])

    return (
        <div className={props.className}>
            <label htmlFor={props.label} >{props.label}</label>
            {props.required ? 
                <select name={props.id}  id={props.id} required></select>
                : props.onChange === 'type' ?
                <select name={props.id}  id={props.id} onChange={setStockType}></select>
                    : <select name={props.id} id={props.id}></select>
            }
        </div>
    )
}
