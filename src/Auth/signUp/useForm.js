import {useState} from 'react'


const useForm = (validate, signUpUser) => {
    const [signUpData, setSignUpData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '', 
        password2: ''              
    })
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        username: '',
        emailError: '',
        passError: '',
        passError2: ''
    })

    const signUpDataClear = () => {
        setSignUpData({
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '', 
            password2: ''  
        })
    }

    const errorsClear = () => {
        setErrors({
            firstName: '',
            lastName: '',
            username: '',
            emailError: '',
            passError: '',
            passError2: ''
        })
    }

    const onChangeHandler = event => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault()
        let {firstName, lastName, username, email, password, password2} = validate(signUpData)
        if (firstName === undefined && lastName === undefined && username === undefined && email === undefined && password === undefined){
            signUpUser()
            signUpDataClear()
            errorsClear()
        }else{
            setErrors({
                firstName: firstName,
                lastName: lastName,
                username: username,
                emailError: email,
                passError: password,
                passError2: password2
            })
        }
    }
    return {errors, signUpData, onChangeHandler, handleSubmit, signUpDataClear}
}

export default useForm
