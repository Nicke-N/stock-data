import React, { useEffect, useState } from 'react'
import './Form.css'

export default function FormSelectCustom() {

    const [ selectedValue, setSelectedValue ] = useState(null)

    const click = (event) => {
        console.log(event.target.classList[1])
        const newCheck = event.target.classList[1]
        const valueContainer = document.getElementById(newCheck)
        valueContainer.checked =true
        setSelectedValue(valueContainer.value)
    }
    return (
       <div>
            {/* <details>
                <summary>Test Dropdown</summary>
                <ul className='list'>
                    <li className='li'>Item 1</li>
                    <li className='li'>Item 2</li>
                    <li className='li'>Item 3</li>
                    <li className='li'>Item 4</li>
                    <li className='li'>Item 5</li>
                    <li className='li'>Item 1</li>
                    <li className='li'>Item 2</li>
                    <li className='li'>Item 3</li>
                    <li className='li'>Item 4</li>
                    <li className='li'>Item 5</li>
                </ul>
            </details> */}

            <details className="custom-select">
                <summary className="radios">
                    <input type="radio" name="item" id="default" title="Choose" checked />
                        <input type="radio" name="item" id="item1" value="Item 1" />
                            <input type="radio" name="item" id="item2" value="Item 2" />
                                <input type="radio" name="item" id="item3" value="Item 3" />
                                    <input type="radio" name="item" id="item4" value="Item 4" />
                                        <input type="radio" name="item" id="item5" value="Item 5" />
                                        </summary>
                                        <ul className="list">
                                            <li className='li item1' for='item1' onClick={click}>
                                                <label for="item1">Item 1</label>
                                            </li>
                                            <li className='li item2' onClick={click}>
                                                <label for="item2" >Item 2</label>
                                            </li>
                                            <li className='li item3' onClick={click}>
                                                <label for="item3" >Item 3</label>
                                            </li>
                                            <li className='li item4' onClick={click}>
                                                <label for="item4" >Item 4</label>
                                            </li>
                                            <li className='li item5' onClick={click}>
                                                <label for="item5">Item 5</label>
                                            </li>
                                        </ul>
            </details>
    </div>
    )
}
