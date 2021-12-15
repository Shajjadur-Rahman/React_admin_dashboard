import React from 'react'
import { connect } from 'react-redux';


const SidebarItem = props => {
    const active = props.active ? `active ${props.color ? props.color : 'blue-color'}` : ''
    return (
        <div className='sidebar__item'>
            <div className={`sidebar__item__inner ${active}`}>
                <i className={props.icon}></i>
                <span>
                    {props.title} 
                </span>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    color: state.ThemeReducer.color
})
export default connect(mapStateToProps)(SidebarItem)