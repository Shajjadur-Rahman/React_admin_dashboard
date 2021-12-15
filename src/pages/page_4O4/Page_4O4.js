import React, {useEffect} from 'react'
import style from './page_4O4.module.css'

const Page4O4 = () => {
    useEffect(() => {
        document.title = "Page not fount !"
    }, [])
    return (
        <div className={style.container_4O4}>
             <div className={style.message_4O4}>
                <h1>Oops!</h1>
                <h2>404 - Page not found !</h2>
                <h3>The page you are looking for might have been removed or it's temporarily unavailable right now !</h3>
            </div>
        </div>
    )
}

export default Page4O4
