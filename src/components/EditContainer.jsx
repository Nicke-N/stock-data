import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import { editStock, getStock, getStocks } from '../kit/api/Stocks'
import { closeModal } from '../kit/Functions'

export default function EditContainer() {
    
    const { currentStock, setCurrentStock, setStockList, modalData, setModalData } = useContext(DataContext)
    var entryContainer, newEntry
    
    const addToList = () => {
        entryContainer = document.getElementById('entry-container')
        newEntry = document.getElementById('new-entry')

        if (entryContainer && newEntry.value !== '') {
            var listItem = document.createElement('li')
            listItem.textContent = newEntry.value
            listItem.addEventListener('click', removeFromList)
            entryContainer.appendChild(listItem)
            
            newEntry.value = ''
        }
        
    }

    const removeFromList = (event) => {
        const target = event.target
        console.log(event.target)
        entryContainer = document.getElementById('entry-container')
        const parent = Array.from(entryContainer.children)
        var newArray = parent.filter(element => element !== target)

        entryContainer.textContent = ''
        newArray.map(element => entryContainer.appendChild(element))
        console.log(newArray)
    }

    const saveChanges = () => {

        var obj = currentStock,
            list = []
        entryContainer = document.getElementById('entry-container')

            console.log(entryContainer.children)
        for (let li = 0; li < entryContainer.children.length; li++) {
            list.push(entryContainer.children[li].textContent)
        }

        obj[modalData] = list
        console.log(list)
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
                {currentStock ? 
                    currentStock[modalData].map((element, index) => <li key={index} onClick={removeFromList} >{element}</li>)
                    : null
                }
            </ul>
            <button id='save-changes' onClick={saveChanges}>
                Save changes
            </button>
        </div>
    )
}
