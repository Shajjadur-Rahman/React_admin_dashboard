const validateData = values => {
   let errors = {}

if(!values.firstName.trim()){
errors.firstName = "FirstName is required !"
}
if(!values.lastName.trim()){
    errors.lastName = "LastName is required !"
    }
if(!values.username.trim()){
errors.username = "Username is required !"
}

if(!values.email){
    errors.email = "Email is required"
}else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
    errors.email = "Invalid email !"
}

if(!values.password){
    errors.password = "Password is required !"
}else if(values.password.length < 6){
    errors.password = "Password needs to be 6 characters or more !"
}

if(!values.password2){
    errors.password2 = "Password required !"
}else if(values.password2 !== values.password){
    errors.password2 = "Password didn't match !"
}else if(values.password.length < 6){
    errors.password2 = "Password needs to be 6 characters or more !"
}


return errors
}

export default validateData