import React from 'react'

export default function List(props) {


    return (

        <div id={props.containerId} className={props.wrapperClassName}>
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
