import React from 'react'
import { Link } from 'react-router-dom'
import './ListItem.css'

export default function ListItem(props) {
    return (
        <Link to={`/overview/${props.data._id}`}>
            <div className='list-item'>
                <h3>{props.data.stockName}</h3>
                <div>{props.data.industry}</div>
            </div>
        </Link>
        
    )
}
