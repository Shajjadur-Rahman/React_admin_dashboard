import React, {useRef} from 'react'
import './dropdown.css'
import {connect} from 'react-redux'

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


const Dropdown = props => {

    const dropdown_toggle_btn = useRef(null)
    const dropdown_content_element = useRef(null)
    click(dropdown_content_element, dropdown_toggle_btn)


    return (
        <div className='dropdown'>
            <button ref={dropdown_toggle_btn} className='dropdown__toggle'>
                {
                    props.icon ? <i className={props.icon} style={{color: props.mode === 'theme-mode-dark' ? '#fff' : ''}}></i> : ''
                }
                {
                    props.badge ? <span className={props.color ? `dropdown__toggle__badge ${props.color}` : 'dropdown__toggle__badge blue-color'}>{props.badge}</span> : ''
                }
                {
                    props.customToggle ? props.customToggle() : ''
                }
            </button>
            <div ref={dropdown_content_element} className='dropdown__content'style={{color: props.mode === 'theme-mode-dark' ? '#fff' : '', background: props.mode === 'theme-mode-dark' ? 'rgb(45, 45, 45)' : ''}}>
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
