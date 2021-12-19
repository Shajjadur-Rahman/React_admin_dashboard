import React, {memo} from 'react'
import './sidebar.css'
import profile from '../../assets/images/profile.jpg'
import sidebar_nav_items from '../../assets/jsonData/sidebar_routes.json'
import { Link } from 'react-router-dom'
import SidebarItem from './SidebarItem'




const Sidebar = props => {

    const activeItem = sidebar_nav_items.findIndex(item => item.route === props.location.pathname)


    return (
        <div className={props.getSidebarClass}>
            <Link to="/profile">
                <div className='sidebar__logo'>
                    <img src={profile} alt='Profile'/>
                    <h3>Shajjad</h3>
                </div>
            </Link>
            <div className='close__btn_wapper'>
                <button className='close__btn' onClick={() => props.toggleHide()}>
                <i className="bx bx-x bx-burst-hover"></i>
                </button>
            </div>
            {
                sidebar_nav_items.map((item, index) => (
                    <Link to={item.route} key={index} onClick={() => props.toggleHide()}>
                        <SidebarItem 
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </div>
    )
}

export default memo(Sidebar)
