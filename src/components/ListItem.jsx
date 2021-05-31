import React from 'react'
import { Link } from 'react-router-dom'
import './ListItem.css'

export default function ListItem(props) {
    return (
        <Link to={`/stocks/${props.data._id}`}>
            <div className='list-item'>
                {props.data.stockName}
            </div>
        </Link>
        
    )
}
