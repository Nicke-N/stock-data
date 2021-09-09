import React, { useEffect, useState } from 'react'
import './Form.css'

export default function FormSelectCustom() {

    const [ selectedValue, setSelectedValue ] = useState(null)

    const click = (event) => {
        console.log(event.target.classList[1])
        const newCheck = event.target.classList[1]
        const valueContainer = document.getElementById(newCheck)
        valueContainer.checked =true
        console.log(valueContainer.title)
    }
    return (
       <div>

            <details className="custom-select">
                <summary className="radios">
                    <input  type="radio" name="item" id="default" title="Choose" checked  />
                        <input  type="radio" name="item" id="item1" title="Item 1" />
                            <input  type="radio" name="item" id="item2" title="Item 2" />
                                <input  type="radio" name="item" id="item3" title="Item 3" />
                                    <input  type="radio" name="item" id="item4" title="Item 4" />
                                        <input  type="radio" name="item" id="item5" title="Item 5" />
                                        </summary>
                                        <ul className="list">
                                            <li className='li item1' for='item1' onClick={click}>
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
                                            </li>
                                        </ul>
            </details>
    </div>
    )
}
