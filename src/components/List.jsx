import React from 'react'
export default function List(props) {

    return (

        <div id={props.containerId}>
            <div className={props.containerClassName}>
                <h5>{props.title}</h5>
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
