import React from 'react'
import './table.css'



const Table = props => {



    return (
        <>
            <div className='table-wraper'>
            <table className='table'>
            {
                props.headData && props.renderHead ? (
                    <thead>
                        <tr>
                            {props.headData.map((item, index) => props.renderHead(item, index))}
                        </tr>
                    </thead>
                ) : null
            }
            {
                props.tBodyData && props.renderBody ? (
                    <tbody>
                        {
                            props.tBodyData.map((item, index) => props.renderBody(item, index))
                        }
                    </tbody>
                ) : null
            }
            </table>
            </div>
        </>
    )
}

export default Table
