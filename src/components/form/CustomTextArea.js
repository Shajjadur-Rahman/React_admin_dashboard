import React from 'react'

const CustomTextArea = props => {
    const theme = props.theme_mode === 'theme-mode-dark'

    return (
        <> <label htmlFor={props.labelId}>{props.labelText}</label>
        <div className='textarea__wrapper'>
            <textarea  style={{color: theme ? "#fff" : "#000"}}>
            
            </textarea>
        </div>
        
        </>
            
    )
}

export default CustomTextArea
