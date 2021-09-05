import React, { useEffect } from 'react'

export default function SuccessMsg() {

    var success, fail

    useEffect(() => {
        
        success = document.getElementById('add-stock-success')
        fail = document.getElementById('add-stock-failure')
        
        fail.style.display = 'none'
        success.style.display = 'none'
    }, [])

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
