import React from 'react'


const CustomInput = props => {
    const theme = props.theme_mode === 'theme-mode-dark'

    return (
        <> <label htmlFor={props.labelId}>{props.labelText}</label>
        <div className='input__wrapper'>
                
                <input type={props.type} id={props.labelId} style={{color: theme ? "rgb(255, 255, 255)" : "#000"}} defaultValue={props.defaultValue} onChange={props.onChangeHandler}/>
            </div>
        
        </>
            
    )
}

export default CustomInput
