import React, {useRef} from 'react'
import { useHistory } from 'react-router-dom';



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


const renderLoggedInUser = (user, mode) => (
    <div className='header__nav_logged_in__user'>
        <div className='header__nav_logged_in__user_img' title={user.username}>
            <img src={user.image} alt={user.username} />
        </div>
        <div className={mode === 'theme-mode-dark' ? 'header__nav_logged_in__username ' : 'header__nav_logged_in__username'}>
            {user.username} 
        </div>
    </div>
)

const LoggedInUserMenu = props => {

    const dropdown_toggle_btn = useRef(null)
    const dropdown_content_element = useRef(null)
    click(dropdown_content_element, dropdown_toggle_btn)

    const history = useHistory()

    return (
        <div className='dropdown'>
            <button ref={dropdown_toggle_btn} className='dropdown__toggle'>
           { renderLoggedInUser(props.user, props.mode)}
           </button>

                <div ref={dropdown_content_element} className='dropdown__content'style={{color: props.mode === 'theme-mode-dark' ? '#fff' : '', background: props.mode === 'theme-mode-dark' ? 'rgb(45, 45, 45)' : ''}}>
                        <div onClick={() => history.push('/profile')} hoveritem='1' className={props.hover.hoveritem === 1 ? `notification__item ${props.color}` : 'notification__item'} onMouseEnter={() => props.setHover(1)} onMouseLeave={() => props.removeHover(1)}>
                            <i className='bx bx-user'></i>
                            <span>Profile</span>
                        </div>

                        <div onClick={() => history.push('/wallet')} hoveritem='2' className={props.hover.hoveritem === 2 ? `notification__item ${props.color}` : 'notification__item'} onMouseEnter={() => props.setHover(2)} onMouseLeave={() => props.removeHover(2)}>
                            <i className='bx bx-wallet-alt'></i>
                            <span>My Wallet</span>
                        </div>
                        <div onClick={() => history.push('/settings')} hoveritem='3' className={props.hover.hoveritem === 3 ? `notification__item ${props.color}` : 'notification__item'} onMouseEnter={() => props.setHover(3)} onMouseLeave={() => props.removeHover(3)}>
                            <i className='bx bx-cog'></i>
                            <span>Settings</span>
                        </div>
                        <div  onClick={props.logout} hoveritem='4' className={props.hover.hoveritem === 4 ? `notification__item ${props.color}` : 'notification__item'} onMouseEnter={() => props.setHover(4)} onMouseLeave={() => props.removeHover(4)}>
                            <i className='bx bx-log-out-circle bx-rotate-180'></i>
                            <span>Logout</span>
                        </div>
                </div>
        </div>
       
    )
}

export default LoggedInUserMenu
