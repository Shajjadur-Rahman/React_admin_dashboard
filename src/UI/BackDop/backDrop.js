import React from 'react'
import './backDrop.css'

const BackDrop = props => {
    return (
        props.show ? <div className='backdrop' style={{
            transform: props.show ? 'scale(1)' : 'scale(0)',
            opacity: props.show ? '1' : '0'}}></div> : null
    )
}

export default BackDrop
