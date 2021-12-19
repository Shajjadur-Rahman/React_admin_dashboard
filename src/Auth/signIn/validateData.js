const validateData = values => {
   let errors = {}

if(!values.email){
    errors.email = "Email is required"
}else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = "Invalid email !"
}

if(!values.password){
    errors.password = "Password is required !"
}
if(values.password.length < 6 && values.password.length > 0){
    errors.password = "Password needs to be 6 characters or more !"
}


return errors
}

export default validateData