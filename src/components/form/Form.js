import React from 'react'
import {connect} from 'react-redux'
import './form.css'

const Form = props => {
    return (
        <>
            <div className='form__header'>
                <h2>{props.title}</h2>
               <button className="hide__btn" onClick={() => props.hide(false)}><i className="bx bx-x bx-burst-hover" style={{color: "rgb(255, 255, 255)"}}></i></button>
            </div>
            <form className={props.mode === 'theme-mode-dark' ? 'form form__dark' : 'form'}>
            {props.children}
        </form>
        </>
       
    )
}
const mapStateToProps = state => ({
    mode: state.ThemeReducer.mode
})
export default connect(mapStateToProps, {})(Form)
