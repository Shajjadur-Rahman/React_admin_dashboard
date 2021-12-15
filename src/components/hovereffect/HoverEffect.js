import {useState} from 'react'

const HoverEffect = () => {

    const [hover, setHover] = useState({
        hoveritem: []
    })

    const setHoverEffect = index => {
        setHover({
            hoveritem: index
        })
    }

    const removeHoverEffect = () => {
        setHover({
            hoveritem: ''
        })
    }

    return {
        hover,
        setHoverEffect,
        removeHoverEffect
    }
}

export default HoverEffect
