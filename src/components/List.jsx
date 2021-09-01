import React, { useContext, useEffect } from 'react'
import { DataContext } from '../context/DataContext'

export default function List(props) {

    const {setOverview, setCurrentStock} = useContext(DataContext)

    // useEffect(() => {
    //     setCurrentStock(null)
    //     setOverview(null)
    // }, [])

    return (

        <div id={props.containerId}>
            <div className={props.containerClassName}>
                <h2>{props.title}</h2>
                <img src={props.src} className={props.imgClassName} id={props.imgId} alt={props.alt} />
            </div>
            <div className={props.ulClassName}> 
                {props.data.length > 0 ?
                    props.data.map((element, index) => <span key={index} className={props.liClassName} >{element}</span>)
                    : null
                }
            </div>

        </div>

    )
}
