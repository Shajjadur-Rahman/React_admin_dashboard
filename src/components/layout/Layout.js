import React, {useState, useEffect} from 'react'
import Sidebar from '../sidebar/Sidebar'
import Routes from '../Routes'
import HeaderNav from '../headernav/HeaderNav'
import { BrowserRouter, Route } from 'react-router-dom'
import './layout.css'
import { connect } from 'react-redux'
import Footer from '../footer/Footer'






const Layout = ({mode, login}) => {

    const [hide, setHide] = useState(false)


    useEffect(() => {
        
    }, [])


    return (
        <BrowserRouter>
            <Route render={(props) => (
                <div className={`${mode ? mode : 'layout'}`}>
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
    login: state.AuthReducer.login
})
export default connect(mapStateToProps, {})(Layout)