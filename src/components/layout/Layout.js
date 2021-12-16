import React, {useState, useEffect} from 'react'
import Sidebar from '../sidebar/Sidebar'
import Routes from '../Routes'
import HeaderNav from '../headernav/HeaderNav'
import { BrowserRouter, Route } from 'react-router-dom'
import './layout.css'
import { connect } from 'react-redux'
import Footer from '../footer/Footer'
import { setMode, setColor } from './../../sevices/Actions/ThemeActions';
import '../../assets/css/theme.css'






const Layout = ({mode, color, login}) => {

    const [hide, setHide] = useState(false)
    const [currMode, setcurrMode] = useState('theme-mode-light')
    const [currColor, setcurrColor] = useState('theme-color-blue')


    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode')
        const colorClass = localStorage.getItem('colorMode')
        if(themeClass !== undefined) setcurrMode(themeClass)
        if(colorClass !== undefined) setcurrColor(colorClass)
    }, [color, mode])


    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className={`layout ${currMode} ${currColor}`}>
                    {login ? 
                            <>
                                <Sidebar hide={hide} setHide={setHide} {...props}/>
                                <div className='layout__content'>
                                    <HeaderNav  hide={hide} setHide={setHide}/>
                                    <div className='layout__content__main'>
                                        <Routes />
                                    </div>
                                    <Footer/>
                                </div>
                            </> : <Routes />
                
                        }
                </div>
            )}/>
 
        </BrowserRouter>
    )
}
const mapStateToProps = state => ({
    mode: state.ThemeReducer.mode,
    color: state.ThemeReducer.color,
    login: state.AuthReducer.login
})
export default connect(mapStateToProps, {setMode, setColor})(Layout)