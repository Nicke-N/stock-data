import React, { useEffect } from 'react'
import './Form.css'

export default function FormSelectCustom() {


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
                        <input type="radio" name="item" id="item1" title="Item 1" />
                            <input type="radio" name="item" id="item2" title="Item 2" />
                                <input type="radio" name="item" id="item3" title="Item 3" />
                                    <input type="radio" name="item" id="item4" title="Item 4" />
                                        <input type="radio" name="item" id="item5" title="Item 5" />
                                        </summary>
                                        <ul className="list">
                                            <li className='li' for='item1'>
                                                <label for="item1">Item 1</label>
                                            </li>
                                            <li className='li'>
                                                <label for="item2">Item 2</label>
                                            </li>
                                            <li className='li'>
                                                <label for="item3">Item 3</label>
                                            </li>
                                            <li className='li'>
                                                <label for="item4">Item 4</label>
                                            </li>
                                            <li className='li'>
                                                <label for="item5">Item 5</label>
                                            </li>
                                        </ul>
            </details>
    </div>
    )
}
