import React from 'react'

export default function SuccessMsg() {
    return (
        <div className='outcome'>
            <div id='add-stock-success'>
                The stock was added successfully!
            </div>
            <div id='add-stock-failure'>
                An unknown error occured, try again later!
            </div>
        </div>
    )
}
