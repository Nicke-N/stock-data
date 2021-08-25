import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import { editStock, getStock, getStocks } from '../kit/api/Stocks'
import { closeModal } from '../kit/Functions'

export default function EditContainer() {
    
    const { currentStock, setCurrentStock, setStockList, modalData, setModalData } = useContext(DataContext)
    var entryContainer, newEntry
    
    const addToList = () => {
        if (entryContainer && newEntry.value !== '') {
            var listItem = document.createElement('li')
            listItem.textContent = newEntry.value
            entryContainer.appendChild(listItem)
            newEntry.value = ''
        }
        
    }

    const saveChanges = () => {

        var obj = currentStock,
            list = []
        for (let li = 0; li < entryContainer.children.length; li++) {
            list.push(entryContainer.children[li].textContent)
        }

        if(modalData === 'notes') obj.notes = list
        if(modalData === 'risks') obj.risks = list

        editStock(currentStock._id, obj)
        .then(res => res.text())
        .then(data => {

            if(data === 'Stock was updated!') {
                getStock(currentStock._id)
                .then(res => res.json())
                .then(data => setCurrentStock(data))

                getStocks()
                .then(res => res.json())
                .then(data => {
                    setStockList(data)
                    setModalData(null)
                    entryContainer.textContent = ''
                    closeModal()
                })
                

            }
        })
        
    }
    // useEffect(() => {console.log('it')}, [currentStock])
    useEffect(() => {
        console.log(modalData)
        entryContainer = document.getElementById('entry-container')
        newEntry = document.getElementById('new-entry')
        entryContainer.textContent = ''
        newEntry.value = ''
        
        currentStock[modalData].map(element => {
            const listItem = document.createElement('li')
            listItem.textContent = element
            entryContainer.appendChild(listItem)
        })


    }, [currentStock])

    return (
        <div className='edit-field'>
            <textarea name="note" id="new-entry" cols="30" rows="5" maxLength='300' ></textarea>
            <button id='add-to-list' onClick={addToList}>
                {modalData === 'notes' ?
                    'Add note to list'
                    : modalData === 'risks' ?
                    'Add risk to list'
                    : null
                }
            </button>

            <ul id='entry-container'>

            </ul>
            <button id='save-changes' onClick={saveChanges}>
                Save changes
            </button>
        </div>
    )
}
