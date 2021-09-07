import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import { editStock, getStock, getStocks } from '../kit/api/Stocks'
import { closeModal, unDrawSuccess } from '../kit/Functions'
import './CrudStyle.css'

export default function ContainerToArray() {

    const { modalData, setModalData, currentStock, setCurrentStock, setStockList, setSuccess } = useContext(DataContext)
    var entryContainer, newEntry

    const saveChanges = async () => {

        var obj = currentStock,
            list = []
        entryContainer = document.getElementById('entry-container')
        const inputs = Array.from(entryContainer.children)
        console.log(inputs)
        inputs.map(element => element ? list.push(element.textContent) : null)

        obj[modalData] = list

        editStock(currentStock._id, obj)
            .then(res => res.text())
            .then(data => {
                setModalData(null)
                entryContainer.textContent = ''
                console.log(data)
                if (data === 'Stock was updated!') {
                    
                    setSuccess('success')

                    setTimeout(() => {
                        closeModal()
                    }, 2500)

                } else {
                    setModalData(null)
                    .then(setSuccess('failure'))
                    .then(closeModal())
                }
            })
            setTimeout(() => {
                getStock(currentStock._id)
                .then(res => res.json())
                .then(data => setCurrentStock(data))
            }, 3000);
            
            setTimeout(() => {
                getStocks()
                .then(res => res.json())
                .then(data => setStockList(data))
            }, 4000);

            

    }

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
        if (target) {
            entryContainer = document.getElementById('entry-container')
            const parent = Array.from(entryContainer.children)
            var newArray = parent.filter(element => element !== target)

            entryContainer.textContent = ''
            newArray.map(element => entryContainer.appendChild(element))
        }

    }

    return (

        <>
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
           
        </>

    )
}
