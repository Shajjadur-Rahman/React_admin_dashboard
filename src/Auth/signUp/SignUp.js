import React from 'react'
import style from '../auth.module.css'
import {Link} from 'react-router-dom'
import useForm from './useForm'
import validateData from './validateData'

const SignUp = () => {
    const {errors, signUpData, onChangeHandler, handleSubmit, signUpDataClear} = useForm(validateData)
    return (
        <div className={style.auth_container}>
        <div className={style.auth_content}>
            <form onSubmit={handleSubmit}>
                <h2><i className="fas fa-user"></i> Sign Up</h2>

                <label htmlFor='firstName'><i className="fas fa-file-signature"></i> {errors.firstName ? <span style={{color: 'red'}}>{errors.firstName}</span>: 'First name'}</label>
                <div className={style.auth_input}>
                    <input type='text' name='firstName' id='firstName' value={signUpData.firstName} onChange={onChangeHandler}/>
                </div>

                <label htmlFor='lastName'><i className="fas fa-file-signature"></i> {errors.lastName ? <span style={{color: 'red'}}>{errors.lastName}</span>: 'Last name'}</label>
                <div className={style.auth_input}>
                    <input type='text' name='lastName' id='lastName' value={signUpData.lastName} onChange={onChangeHandler}/>
                </div>

                <label htmlFor='username'><i className="fas fa-file-signature"></i> {errors.username ? <span style={{color: 'red'}}>{errors.username}</span>: 'Username'}</label>
                <div className={style.auth_input}>
                    <input type='text' name='username' id='username' value={signUpData.username} onChange={onChangeHandler}/>
                </div>

                <label htmlFor='email'><i className="fas fa-envelope"></i> {errors.emailError ? <span style={{color: 'red'}}>{errors.emailError}</span>: 'Email'}</label>
                <div className={style.auth_input}>
                    <input type='email' name='email' id='email' value={signUpData.email} onChange={onChangeHandler}/>
                </div>

                <label htmlFor='password'><i className="fas fa-key"></i> {errors.passError ? <span style={{color: 'red'}}>{errors.passError}</span>: 'Password'}</label>
                <div className={style.auth_input}>
                    <input type='password' name='password' id='password' value={signUpData.password} onChange={onChangeHandler}/>
                </div>

                <label htmlFor='password2'><i className="fas fa-key"></i> {errors.passError2 ? <span style={{color: 'red'}}>{errors.passError2}</span>: 'Confirm password'}</label>
                <div className={style.auth_input}>
                    <input type='password' name='password2' id='password2' value={signUpData.password2} onChange={onChangeHandler}/>
                </div>
                <div className={style.auth_form_footer}>
                    <div className={style.auth_form_footer_txt2}>
                        <h4> Already haven an account ? Please <Link to='/login'>Login</Link> </h4>
                    </div>
                    <button className={`custom_btn ${style.auth_reset__btn}`} type='reset' onClick={signUpDataClear}>Reset</button>
                    <button className={`custom_btn ${style.auth__btn}`} type='submit'>Sign up</button>
                </div>
            </form>
        </div>
    </div>
    )
}

export default SignUp
