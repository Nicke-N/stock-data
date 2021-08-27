import React, { useEffect } from 'react'

export default function FormSelect(props) {

    var select 

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
                : 
                <select name={props.label}  id={props.id}></select>
            }
        </div>
    )
}
