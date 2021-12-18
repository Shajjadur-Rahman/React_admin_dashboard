import React from 'react'
import style from '../auth.module.css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from './../../sevices/Actions/AuthActions';
import validateData from './validateData'
import useForm from './useForm';


const SignIn = ({loginUser}) => {

    const {errors, loginData, onChangeHandler, handleSubmit} = useForm(validateData, loginUser)

    return (
        <div className={style.auth_container}>
            <div className={style.auth_content}>
                <form onSubmit={handleSubmit}>
                    <h2><i className="fas fa-user"></i> Login</h2>
                    <label htmlFor='email'><i className="fas fa-envelope"></i> {errors.emailError ? <span style={{color: 'red'}}>{errors.emailError}</span>: 'Email'}</label>
                    <div className={style.auth_input}>
                        <input type='email' name='email' id='email' value={loginData.email} onChange={onChangeHandler}/>
                    </div>
                    <label htmlFor='password'><i className="fas fa-key"></i> {errors.passError ? <span style={{color: 'red'}}>{errors.passError}</span>: 'Password'}</label>
                    <div className={style.auth_input}>
                        <input type='password' name='password' id='password' value={loginData.password} onChange={onChangeHandler}/>
                    </div>
                    <div className={style.auth_form_footer}>
                        <div className={style.auth_form_footer_txt}>
                            <h4>Haven't any account ? Please <Link to='/sign-up'>Register</Link> </h4>
                        </div>
                        <button className={`custom_btn ${style.auth__btn}`} type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({

})
export default connect(mapStateToProps, {loginUser})(SignIn)
