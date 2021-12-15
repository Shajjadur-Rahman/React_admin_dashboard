import {useState} from 'react'


const useForm = (validate, loginUser) => {
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        emailError: '',
        passError: ''
    })

    const onChangeHandler = event => {
        setLoginData({
            ...loginData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        let {email, password} = validate(loginData)
        if (email === undefined && password === undefined){
            loginUser()
            setLoginData({
                emailError: '',
                passError: ''
            })
            setErrors({
                emailError: '',
                passError: ''
            })
        }else{
            setErrors({
                emailError: email,
                passError: password
            })
        }
    }
    return {errors, loginData, onChangeHandler, handleSubmit}
}

export default useForm
