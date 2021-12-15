import React, { useRef } from 'react'
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

const click = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (even) => {
        if(toggle_ref.current && toggle_ref.current.contains(even.target)){
            content_ref.current.classList.toggle('active')
        }else{
            if(content_ref.current && !content_ref.current.contains(even.target)){
                content_ref.current.classList.remove('active')
            }
        }
    })
}



const ThemeMenu = ({
    mode,
    mode_id,
    color_id,
    setMode,
    setColor,
}) => {


    const menu_ref = useRef(null)
    const menu_toggle_ref = useRef(null)
    click(menu_ref, menu_toggle_ref)
    const setActiveMenu = () => menu_toggle_ref.current.classList.add('active')
    const setCloseMenu = () => menu_ref.current.classList.remove('active')
 

    return (
        <div>
            <button className='dropdown__toggle' ref={menu_toggle_ref} onClick={() => setActiveMenu()}>
                <i className='bx bx-dots-vertical-rounded bx-burst-hover'></i>
            </button>
            <div className= 'theme__menu' ref={menu_ref} style={{backgroundColor: mode === 'theme-mode-dark' ? '#2d2d2d' : ''}}>
                <h4>Theme settings</h4>
                <button className='theme__menu__close' onClick={() => setCloseMenu()}>
                    <i className='bx bx-x bx-burst-hover'></i>
                </button>
                <div className='theme__menu__select'>
                    <span>Choose mode</span>
                    <ul className='mode__list'>
                        {
                            mode_settings.map((item, index) => (
                                <li key={index} onClick={() => setMode(item)}>
                                    <div className={`mode__list__color ${item.background} ${item.id === mode_id ? 'active' : ''}`}>
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
                                <li key={index} onClick={() => setColor(item)}>
                                    <div className={`mode__list__color ${item.background} ${item.id === color_id ? 'active' : ''}`}>
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
    mode: state.ThemeReducer.mode,
    mode_id: state.ThemeReducer.mode_id,
    color_id: state.ThemeReducer.color_id,
})
export default connect(mapStateToProps, {setMode, setColor})(ThemeMenu)
