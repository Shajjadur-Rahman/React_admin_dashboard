import React, { useRef, useState, useEffect } from 'react'
import {setMode, setColor} from '../../sevices/Actions/ThemeActions'
import { connect } from 'react-redux'
import './thememenu.css'


const mode_settings = [
    {
        id: 'light',
        name: 'Light',
        background: 'light-background',
        class: 'theme-mode-light'
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'dark-background',
        class: 'theme-mode-dark'
    }
]


const color_settings = [

    {
        id: 'blue',
        name: 'Blue',
        background: 'blue-color',
        class: 'theme-color-blue'
    },
    {
        id: 'red',
        name: 'Red',
        background: 'red-color',
        class: 'theme-color-red'
    },
    {
        id: 'cyan',
        name: 'Cyan',
        background: 'cyan-color',
        class: 'theme-color-cyan'
    },
    {
        id: 'green',
        name: 'Green',
        background: 'green-color',
        class: 'theme-color-green'
    },
    {
        id: 'orange',
        name: 'Orange',
        background: 'orange-color',
        class: 'theme-color-orange'
    },
]



const ThemeMenu = ({
    setMode,
    setColor,
}) => {

    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const clickOutSide = event => {
            if(isOpen && ref.current && !ref.current.contains(event.target)){
                setIsOpen(false)
            }
           
        }
        document.addEventListener('click', clickOutSide)
        return () => {
            document.removeEventListener('click', clickOutSide)
        }
    }, [isOpen])


    const [currMode, setcurrMode] = useState('light')
    const [currColor, setcurrColor] = useState('blue')

    const set_mode = mode => {
        setcurrMode(mode.id)
        setMode(mode.class)
    }

    const set_color = color => {
        setcurrColor(color.id)
        setColor(color.class, color.background)
    }

    useEffect(() => {
        const themeClass = mode_settings.find(e => e.class === localStorage.getItem('themeMode', 'theme-mode-light'))

        const colorClass = color_settings.find(e => e.class === localStorage.getItem('colorMode', 'theme-color-blue'))

        if (themeClass !== undefined) setcurrMode(themeClass.id)

        if (colorClass !== undefined) setcurrColor(colorClass.id)
    }, [])
 

    return (
        <div  ref={ref}>
            <button className='dropdown__toggle' onClick={() => setIsOpen(true)}>
                <i className='bx bx-dots-vertical-rounded bx-burst-hover'></i>
            </button>
            <div className={isOpen ? 'theme__menu active' : 'theme__menu'}>
                <h4>Theme settings</h4>
                <button className='theme__menu__close' onClick={() => setIsOpen(false)}>
                    <i className='bx bx-x bx-burst-hover'></i>
                </button>
                <div className='theme__menu__select'>
                    <span>Choose mode</span>
                    <ul className='mode__list'>
                        {
                            mode_settings.map((item, index) => (
                                <li key={index} onClick={() => set_mode(item)}>
                                    <div className={`mode__list__color ${item.background} ${item.id === currMode ? 'active' : ''}`}>
                                        <i className='bx bx-check'></i>
                                    </div>
                                    <span>{item.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className='theme__menu__select'>
                    <span>Choose color</span>
                    <ul className='mode__list'>
                        {
                            color_settings.map((item, index) => (
                                <li key={index} onClick={() => set_color(item)}>
                                    <div className={`mode__list__color ${item.background} ${item.id === currColor ? 'active' : ''}`}>
                                        <i className='bx bx-check'></i>
                                    </div>
                                    <span>{item.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {setMode, setColor})(ThemeMenu)
