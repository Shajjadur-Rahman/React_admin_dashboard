import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import './headernav.css'
import notifications from '../../assets/jsonData/notifications.json'
import { Link } from 'react-router-dom'
import pofile_image from '../../assets/images/profile.jpg'
import ThemeMenu from '../thememenu/ThemeMenu'
import TextAnimation from './TextAnimation';
import { connect } from 'react-redux'
import HoverEffect from '../hovereffect/HoverEffect'
import LoggedInUserMenu from './LoggedInUserMenu/LoggedInUserMenu'
import {logOutUser} from '../../sevices/Actions/AuthActions'





const HeaderNav = props => {

    const { hover, setHoverEffect, removeHoverEffect } = HoverEffect()
    const badge = 12

    const loggedInUser = {
        username: 'Shajjad',
        image: pofile_image
    }
    
    const renderNotificationItem = (item, index) => (

        <div  className={hover.hoverItem === index ? `notification__item ${props.color}` : 'notification__item'} key={index} onMouseEnter={() => setHoverEffect(index)} onMouseLeave={() => removeHoverEffect()}>
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    )

    return (
        <div className='header__nav'>
            <button className='toggle__button' onClick={() => props.setHide(true)}>&#9776;</button>   
           <div className='header__nav__search'>
               <input type='text' className={props.mode === 'theme-mode-dark' ? 'dark_mode_input' : ''} placeholder='Search here....' />
               <i className='bx bx-search'></i>
           </div>
           <div className='developer__info'>
                <TextAnimation/>
           </div>
           <div className='header__nav__right'>
                <div className='header__nav__right__item'>
                    <LoggedInUserMenu 
                    mode={props.mode} 
                    color={props.color}
                    user={loggedInUser}
                    hover={hover}
                    setHover={setHoverEffect}
                    removeHover={removeHoverEffect}
                    logout={props.logOutUser}
                    />


                    {/* <Dropdown 
                       customToggle={() => renderLoggedInUser(loggedInUser, props.mode)}
                       contentData={userData}
                       renderItems={(item, index) => renderLoggedInUserMenu(item, index)}/> */}
                    
                </div>
                <div className='header__nav__right__item'>
                    <Dropdown
                        icon={badge ? 'bx bx-bell bx-tada' : 'bx bx-bell'}
                        badge={badge}
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/#'>View All <i className="bx bx-fade-right bxs-right-arrow"></i></Link>}
                    />
                </div>
                <div className='header__nav__right__item'>
                    <ThemeMenu/>
                </div>
           </div>
        </div>
    )
}
const mapStateToProps = state => ({
    mode: state.ThemeReducer.mode,
    color: state.ThemeReducer.color,
})
export default connect(mapStateToProps, {logOutUser})(HeaderNav)
