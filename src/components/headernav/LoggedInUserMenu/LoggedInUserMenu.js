import React, {useRef, useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';



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



    const history = useHistory()

    return (
        <div className='dropdown' ref={ref}>
            <button className='dropdown__toggle' onClick={() => setIsOpen(!isOpen)}>
           { renderLoggedInUser(props.user, props.mode)}
           </button>

                <div className={isOpen ? 'dropdown__content active' : 'dropdown__content'}>
                        <div onClick={() => history.push('/profile')} hoveritem='1' className={props.hover.hoveritem === 1 ? `notification__item ${props.currColor}` : 'notification__item'} onMouseEnter={() => props.setHover(1)} onMouseLeave={() => props.removeHover(1)}>
                            <i className='bx bx-user'></i>
                            <span>Profile</span>
                        </div>

                        <div onClick={() => history.push('/wallet')} hoveritem='2' className={props.hover.hoveritem === 2 ? `notification__item ${props.currColor}` : 'notification__item'} onMouseEnter={() => props.setHover(2)} onMouseLeave={() => props.removeHover(2)}>
                            <i className='bx bx-wallet-alt'></i>
                            <span>My Wallet</span>
                        </div>
                        <div onClick={() => history.push('/settings')} hoveritem='3' className={props.hover.hoveritem === 3 ? `notification__item ${props.currColor}` : 'notification__item'} onMouseEnter={() => props.setHover(3)} onMouseLeave={() => props.removeHover(3)}>
                            <i className='bx bx-cog'></i>
                            <span>Settings</span>
                        </div>
                        <div  onClick={props.logout} hoveritem='4' className={props.hover.hoveritem === 4 ? `notification__item ${props.currColor}` : 'notification__item'} onMouseEnter={() => props.setHover(4)} onMouseLeave={() => props.removeHover(4)}>
                            <i className='bx bx-log-out-circle bx-rotate-180'></i>
                            <span>Logout</span>
                        </div>
                </div>
        </div>
       
    )
}

export default LoggedInUserMenu
