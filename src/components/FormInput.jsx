import React from 'react'

export default function FormInput(props) {
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
                value={props.value}
                required
                />
                : props.readOnly ?
                <input 
                type={props.type} 
                maxLength={props.maxLength}
                name={props.label} 
                id={props.id}
                value={props.value}
                readOnly
                />
                : 
                <input 
                type={props.type} 
                maxLength={props.maxLength}
                name={props.label} 
                id={props.id}
                value={props.value}
                />
            }
            
        </div>
    )
}
