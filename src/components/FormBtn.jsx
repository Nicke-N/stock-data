import React from 'react'

export default function FormBtn(props) {
    return (
        <button className={props.className}> 
            {props.text}
        </button>
    )
}
