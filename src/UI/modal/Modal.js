import React from 'react'
import BackDrop from '../BackDop/backDrop'
import {connect} from 'react-redux'
import './modal.css'

const Modal = props => {
    return (
        <>
            <BackDrop show={props.show}/>
            <div className="modal" style={{
            transform: props.show ? 'scale(1)' : 'scale(0)',
            opacity: props.show ? '1' : '0'
        }}>

            {props.children}
        </div>
            
        </>
    )
}
const mapStateToProps = state => ({
    mode: state.ThemeReducer.mode
})
export default connect(mapStateToProps, {})(Modal)
