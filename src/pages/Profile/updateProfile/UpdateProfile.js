import React from 'react'
import { connect } from 'react-redux';
import './updateProfile.css'
import CustomInput from '../../../components/form/CustomInput';
import CustomTextArea from '../../../components/form/CustomTextArea';


const UpdateProfile = props => {
    return (
        <>
        <CustomInput 
        labelText="Username"
        labelId="username"
        defaultValue="Shajjad"
        type="text"
        theme_mode= {props.mode}
        />
         <CustomInput 
        labelText="Mobile"
        labelId="mobile"
        defaultValue="01785259895"
        type="text"
        theme_mode= {props.mode}
        />

        <CustomInput 
        labelText="Telephone"
        labelId="telephone"
        defaultValue="None"
        type="text"
        theme_mode= {props.mode}
        />
        <CustomInput 
        labelText="Facebook link"
        labelId="facebook"
        defaultValue="https://www.facebook.com/Shajjad143"
        type="url"
        theme_mode= {props.mode}
        />
        <CustomInput 
        labelText="Link Din"
        labelId="linkdin"
        defaultValue="https://www.facebook.com/Shajjad143"
        type="url"
        theme_mode= {props.mode}
        />

        <CustomInput 
        labelText="Instagrame"
        labelId="instagrame"
        defaultValue="https://www.facebook.com/Shajjad143"
        type="url"
        theme_mode= {props.mode}
        />

        <CustomInput 
        labelText="Link Din"
        labelId="linkdin"
        defaultValue="https://www.facebook.com/Shajjad143"
        type="url"
        theme_mode= {props.mode}
        />

        <CustomInput 
        labelText="Instagrame"
        labelId="instagrame"
        defaultValue="https://www.facebook.com/Shajjad143"
        type="url"
        theme_mode= {props.mode}
        />

        <CustomInput 
        labelText="Link Din"
        labelId="linkdin"
        defaultValue="https://www.facebook.com/Shajjad143"
        type="url"
        theme_mode= {props.mode}
        />

        <CustomInput 
        labelText="Instagrame"
        labelId="instagrame"
        defaultValue="https://www.facebook.com/Shajjad143"
        type="url"
        theme_mode= {props.mode}
        />

        <CustomInput 
        labelText="Instagrame"
        labelId="instagrame"
        defaultValue="https://www.facebook.com/Shajjad143"
        type="url"
        theme_mode= {props.mode}
        />
        <CustomTextArea theme_mode= {props.mode}/>
        <button className="custom_btn btn__primary" type='button' onClick={() => props.hide(false)}>Back</button>
        <button className="custom_btn btn__info" type='submit'>Update</button>
        </>
    )
}
const mapStateToProps = state => ({
        mode: state.ThemeReducer.mode
})
export default connect(mapStateToProps, {})(UpdateProfile)
