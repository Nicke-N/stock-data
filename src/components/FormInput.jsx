import React, { useState } from 'react'

export default function FormInput(props) {

    const [ input, setInput ] = useState(props.value ? props.value : '')

    const change = (e) => setInput(e.target.value)

    return (
        <div  className={props.className}>
            <label htmlFor={props.label}>
                {props.label}
            </label>
            {props.required ? 
                <input 
                type={props.type} 
                maxLength={props.maxLength}
                name={props.label} 
                id={props.id}
                value={input}
                onChange={change}
                required
                />
                : props.readOnly ?
                <input 
                type={props.type} 
                maxLength={props.maxLength}
                name={props.label} 
                id={props.id}
                value={input}
                onChange={change}
                readOnly
                />
                : 
                <input 
                type={props.type} 
                maxLength={props.maxLength}
                name={props.label} 
                id={props.id}
                value={input}
                onChange={change}   
                />
            }
            
        </div>
    )
}
