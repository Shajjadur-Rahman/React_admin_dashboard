import React, {useRef} from 'react'
import './dropdown.css'
import {connect} from 'react-redux'

const clickOutSide = (content_ref, toggle_ref) => {
    document.addEventListener('click', (even) => {
        if(toggle_ref.current && toggle_ref.current.contains(even.target)){
            content_ref.current.classList.toggle('active')
        }else{
            if(content_ref.current && !content_ref.current.contains(even.target)){
                content_ref.current.classList.remove('active')
            }
        }
    })
}


const Dropdown = props => {

    const dropdown_toggle_btn = useRef(null)
    const dropdown_content_element = useRef(null)
    clickOutSide(dropdown_content_element, dropdown_toggle_btn)

    return (
        <div className='dropdown'>
            <button ref={dropdown_toggle_btn} className='dropdown__toggle'>
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
            <div ref={dropdown_content_element} className='dropdown__content'>
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
