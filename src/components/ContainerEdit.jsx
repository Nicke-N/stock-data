import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'
import ContainerToArray from './ContainerToArray'
import Report from './Report'
import Stock from './Stock'

export default function ContainerEdit(props) {

    const { modalData } = useContext(DataContext)
   
    useEffect(() => {}, [modalData])

    return (
        <div className='edit-field'>

            {modalData === 'notes' || modalData === 'risks' ?
               
                <ContainerToArray />
                
                : modalData === 'edit-report' ?

                <Report type='edit'/>

                : modalData === 'edit-stock' ?

                <Stock type='edit'/>

                : null

            }


        </div>
    )
}
