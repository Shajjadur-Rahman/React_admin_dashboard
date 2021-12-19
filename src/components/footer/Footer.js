import React from 'react'
import './footer.css'
import { connect } from 'react-redux'

const Footer = props => {
    return (

            <div className='footer__area' style={{borderTop: props.mode !== 'theme-mode-dark' ? '0.5px solid rgb(238, 238, 238)' : ''}}>
                <div className='footer__left'>
                    <h5>Copyright &copy; 2021 'Developer SHAJJAD'. All rights reserved.</h5>
                </div>
                <div className='footer__right'>
                    <h5>Follow me </h5>
                    <a href='https://www.facebook.com/Shajjad143' target="_blank" rel="noreferrer"><i className="bx bxl-facebook"></i></a>
                    <a href='https://www.youtube.com/channel/UCbh2dnzS0BcmCYYhhSp9bow' target="_blank" rel="noreferrer"><i className="bx bxl-youtube"></i></a>
                </div>
            </div>
      
    )
}
const mapStateToProps = state => ({
    mode: state.ThemeReducer.mode
})
export default connect(mapStateToProps)(Footer)
