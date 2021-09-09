import React, { useEffect, useContext } from 'react'
import { DataContext } from '../context/DataContext'
import './Form.css'

export default function FormSelectCustom(props) {

    const { setType, type } = useContext(DataContext)

    const setStockType = event => setType(event.target.value)

    const click = (event) => {
        const newCheck = event.target.classList[1]
        const valueContainer = document.getElementById(newCheck)
        valueContainer.checked = true
    }

    const populate = () => {
        const container = document.getElementById('radios')
        const list = document.getElementById('list')
        props.options.map(element => {
            const input = document.createElement('input')
            input.setAttribute('type', 'radio')
            input.setAttribute('name', props.name)
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

    useEffect(() => {
        if (document.getElementById('list').children.length === 0) populate()
    }, [])
    return (
        <div>
            {props.onChange ?

                <details className="custom-select">
                    <summary className="radios" id='radios'>
                        <input type="radio" name={props.name} id="default" title={props.label} checked />
                        {/* <input  type="radio" name="item" id="item1" title="Item 1" />
            <input  type="radio" name="item" id="item2" title="Item 2" />
                <input  type="radio" name="item" id="item3" title="Item 3" />
                    <input  type="radio" name="item" id="item4" title="Item 4" />
                        <input  type="radio" name="item" id="item5" title="Item 5" /> */}
                    </summary>
                    <ul className="list" id='list'>
                        {/* <li className='li item1' for='item1' onClick={click}>
                                Item 1
                            </li>
                            <li className='li item2' onClick={click}>
                                Item 2
                            </li>
                            <li className='li item3' onClick={click}>
                                Item 3
                            </li>
                            <li className='li item4' onClick={click}>
                                Item 4
                            </li>
                            <li className='li item5' onClick={click}>
                                Item 5
                            </li> */}
                    </ul>
                </details>

                :

                <details className="custom-select">
                    <summary className="radios" id='radios'>
                        <input type="radio" name={props.name} id="default" title={props.label} checked />
                        {/* <input  type="radio" name="item" id="item1" title="Item 1" />
                            <input  type="radio" name="item" id="item2" title="Item 2" />
                                <input  type="radio" name="item" id="item3" title="Item 3" />
                                    <input  type="radio" name="item" id="item4" title="Item 4" />
                                        <input  type="radio" name="item" id="item5" title="Item 5" /> */}
                    </summary>
                    <ul className="list" id='list'>
                        {/* <li className='li item1' for='item1' onClick={click}>
                                                Item 1
                                            </li>
                                            <li className='li item2' onClick={click}>
                                                Item 2
                                            </li>
                                            <li className='li item3' onClick={click}>
                                                Item 3
                                            </li>
                                            <li className='li item4' onClick={click}>
                                                Item 4
                                            </li>
                                            <li className='li item5' onClick={click}>
                                                Item 5
                                            </li> */}
                    </ul>
                </details>

            }

        </div>
    )
}
