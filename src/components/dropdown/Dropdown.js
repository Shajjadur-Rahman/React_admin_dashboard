import React, {useRef, useState, useEffect} from 'react'
import './dropdown.css'
import {connect} from 'react-redux'



const Dropdown = props => {

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

    return (
        <div className='dropdown' ref={ref}>
            <button className='dropdown__toggle' onClick={() => setIsOpen(!isOpen)}>
                {
                    props.icon ? <i className={props.icon}></i> : ''
                }
                {
                    props.badge ? <span className={props.color ? `dropdown__toggle__badge ${props.color}` : 'dropdown__toggle__badge blue-color'}>{props.badge}</span> : ''
                }
                {
                    props.customToggle ? props.customToggle() : ''
                }
            </button>
            <div className={isOpen ? 'dropdown__content active' : 'dropdown__content'}>
                {
                    props.contentData && props.renderItems ? props.contentData.map((item, index) => props.renderItems(item, index)) : ''
                }
                {
                    props.renderFooter ? (
                        <div className='dropdown__footer'>
                            {props.renderFooter()}
                        </div>
                    ) : ''
                }
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    mode: state.ThemeReducer.mode,
    color: state.ThemeReducer.color
})
export default connect(mapStateToProps)(Dropdown)
