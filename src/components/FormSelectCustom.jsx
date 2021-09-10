import React, { useEffect, useContext, useState } from 'react'
import { DataContext } from '../context/DataContext'
import './Form.css'

export default function FormSelectCustom(props) {

    const {
        type,
        setType
    } = useContext(DataContext)

    const setStockType = event => setType(event.target.value)

    const click = (event) => {
        const newCheck = event.target.classList[1]
        const valueContainer = document.getElementById(newCheck)
        valueContainer.checked = true
        document.getElementById(props.detailId).removeAttribute('open')
        if (props.label === 'Type') setType(newCheck)
    }

    const populate = () => {
        const container = document.getElementById(props.summaryId)
        const list = document.getElementById(props.listId)

        if (container && container.children.length === 1 && props.options) {
            props.options.map(element => {
                const input = document.createElement('input')
                input.setAttribute('type', 'radio')
                input.setAttribute('name', props.label)
                input.setAttribute('title', element)
                input.id = element

                if (props.label === 'Type') {
                    console.log()
                    if (type === element) input.checked = true
                }

                container.appendChild(input)

                const listItem = document.createElement('li')
                listItem.className = `li ${element}`
                listItem.textContent = element
                listItem.addEventListener('click', click)

                list.appendChild(listItem)
            })

            

        }


    }

    useEffect(() => {    
        populate()
    }, [props.options])

    return (
        <div>
            <details className="custom-select" id={props.detailId}>
                <summary className="radios" id={props.summaryId}>
                    <input type="radio" name={props.label} id="default" title={props.label} defaultChecked />
                </summary>
                <ul className="list" id={props.listId}>
                </ul>
            </details>
        </div>
    )
}
