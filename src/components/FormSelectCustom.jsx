import React, { useEffect, useContext, useState } from 'react'
import { DataContext } from '../context/DataContext'
import './Form.css'

export default function FormSelectCustom(props) {

    const {
        setType
    } = useContext(DataContext)

    const setStockType = event => setType(event.target.value)

    const click = (event) => {
        const newCheck = event.target.classList[1]
        const valueContainer = document.getElementById(newCheck)
        
        valueContainer.checked = true

    }

    const populate = () => {
        const container = document.getElementById(props.summaryId)
        const list = document.getElementById(props.listId)

        if (container && container.children.length === 1) {
            props.options.map(element => {
                const input = document.createElement('input')
                input.setAttribute('type', 'radio')
                input.setAttribute('name', props.label)
                input.setAttribute('title', element)
                input.id = element

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
    }, [])



    return (
        <div>
            {props.onChange ?

                <details className="custom-select">
                    <summary className="radios" id={props.summaryId}>
                        <input type="radio" name={props.label} id="default" title={props.label} checked />

                    </summary>
                    <ul className="list" id={props.listId}>
                    </ul>
                </details>

                :

                <details className="custom-select">
                    <summary className="radios" id={props.summaryId}>
                        <input type="radio" name={props.label} id="default" title={props.label} checked />
                    </summary>
                    <ul className="list" id={props.listId}>
                    </ul>
                </details>

            }

        </div>
    )
}
