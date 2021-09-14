import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { deleteStock } from '../kit/api/Stocks'
import { deleteReport } from '../kit/api/Reports'
import { DataContext } from '../context/DataContext'
import { closeModal } from '../kit/Functions'
import CheckMark from '../icons/checkmark.svg'
import Remove from '../icons/remove.svg'
import './Form.css'

export default function ContainerRemove(props) {

    const { setModalData, currentStock, setOverview, setCurrentStock } = useContext(DataContext)
    const history = useHistory()
    const removeItem = () => {

        if (props.type === 'stock') {

            deleteStock(currentStock._id)
            .then(res => res.text())
            .then(data => {
                setModalData(null)
                setOverview(null)
                setCurrentStock(null)
                history.push('/')
                closeModal()
            })

        } else {
            deleteReport(props.data)
            .then(res => res.text())
            .then(data => {
                setModalData(null)
                closeModal()
            })
        }

    }


    return (
        <div id='remove-container'>
            <div className='statement'>
                Are you sure u want to remove {props.type}?
            </div>
            <div id='choices'>
            <div className='confirm'>
                <img className='choice-icon' src={CheckMark} alt="Icon didn't load" onClick={removeItem}/>
            </div>
            <div className='cancel'>
                <img className='choice-icon' src={Remove} alt="Icon didn't load" onClick={closeModal}/>
            </div>
            </div>
            
        </div>
    )
}
