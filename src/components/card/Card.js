import React from 'react'
import './card.css'

const Card = props => {
    return (
        <div className='status__card'>
            <div className='status__card_icon'>
                <i className={props.icon}></i>
            </div>
            <div className='status__card_info'>
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default Card
