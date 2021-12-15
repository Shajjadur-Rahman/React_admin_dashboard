import React, {useEffect} from 'react'
import Table from '../components/table/Table'
import customers from '../assets/jsonData/customers.json'
import { connect } from 'react-redux'
import HoverEffect from './../components/hovereffect/HoverEffect';


const customertHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location'
]


const Customers = props => {

    useEffect(() => {
        document.title = "Customers"
    }, [])

    const {hover, setHoverEffect, removeHoverEffect} = HoverEffect()

    const customerRenderHead = (item, index) => <th key={index}>{item}</th>
    const customerRenderBody = (item, index) => (
        <tr key={index} onMouseEnter={() => setHoverEffect(index)} onMouseLeave={() => removeHoverEffect()} className={hover.hoveritem === index ? `${props.color ? props.color : 'blue-color'}` : ''}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.total_orders}</td>
            <td>{item.total_spend}</td>
            <td>{item.location}</td>
        </tr>
    )

    return (
        <>
            <h2 className='page-header'>Customers</h2>
            <div className='card'>
                <div className='card__body'>
                    <Table 
                        headData={customertHead}
                        renderHead={(item, index) => customerRenderHead(item, index)}
                        tBodyData={customers}
                        renderBody={(item, index) => customerRenderBody(item, index)}
                    />
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state => ({
    color: state.ThemeReducer.color
})
export default connect(mapStateToProps)(Customers)
