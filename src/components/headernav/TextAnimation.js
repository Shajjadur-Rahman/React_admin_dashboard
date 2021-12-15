import React from 'react'
import Typewriter from 'typewriter-effect'

const TextAnimation = () => {
    const grating = "Hello , I'm developer 'SHAJJAD' ."
    const info = "I'd been working with React js, Next js and Django over three years ."
    const info2 = "I use Python as a server side language ."
    const info3 = "Are you looking for Supper fast, High secured, SEO friendly, "
    const info4 = "Multiple devices compatible, Pretty color combined, Pixel perfect"
    const info5 = "and Eye catching any types of web-app or web site......... ?"
    const info6 = "Be cool and don't be worried about your expectation !"
    const info7 = "To get your highest expectation please contact with following email and phone number ...."
    const contact1 = "Email : shaturngbd@gmail.com "
    const contact2 = "Phone : +8801785-259895"
    // const contact3 = <a href='https://www.facebook.com/Shajjad143'>Facebook Profile</a>
    return (
        <Typewriter
            options={{
                strings: [grating, info, info2, info3, info4, info5, info6, info6, info7, contact1, contact2],
                autoStart: true,
                loop: true,
            }}
            />
    )
}

export default TextAnimation
