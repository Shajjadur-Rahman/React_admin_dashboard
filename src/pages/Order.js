import React, {useEffect} from 'react'
import Table from '../components/table/Table'
import Badge from './../components/badge/Badge';
import {connect} from 'react-redux'
import HoverEffect from './../components/hovereffect/HoverEffect';


const latestOrders = {
    tHead: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    tBody: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        },
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        },
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
  }
  
  
  const orderStatus = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
  }
  

const Order = props => {

    useEffect(() => {
        document.title = "Orders"
    }, [])

    const {hover, setHoverEffect, removeHoverEffect} = HoverEffect()
    const renderOrderHead = (item, index) => (
        <th key={index}>{item}</th>
      )

    const renderOrderBody = (item, index) => (
        <tr key={index} onMouseEnter={() => setHoverEffect(index)} onMouseLeave={() => removeHoverEffect()} className={hover.hoveritem === index ? `${props.color ? props.color : 'blue-color'}` : ''}>
            <td>{item.id}</td>
            <td>{item.user}</td>
            <td>{item.price}</td>
            <td>{item.date}</td>
            <td>
                <Badge type={orderStatus[item.status]} content={item.status}/>
            </td>
        </tr>
      )

    return (
        <>
            <h2 className='page-header'>Order</h2>
            <div className='card'>
                <div className='card__body'>
                    <Table 
                        headData={latestOrders.tHead}
                        renderHead={(item, index) => renderOrderHead(item, index)}
                        tBodyData={latestOrders.tBody}
                        renderBody={(item, index) => renderOrderBody(item, index)}
                    />
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state => ({
    color: state.ThemeReducer.color
})
export default connect(mapStateToProps)(Order)
