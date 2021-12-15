import React, {useEffect} from 'react'
import Table from '../components/table/Table'
import products from '../assets/jsonData/products.json'
import { connect } from 'react-redux'
import HoverEffect from './../components/hovereffect/HoverEffect';



const productHead = ['', 'Product Id', 'Product', 'Price', 'Discount', 'Stock QTY', 'Image']



const Product = props => {
    useEffect(() => {
        document.title = "Products"
    }, [])
    const {hover, setHoverEffect, removeHoverEffect} = HoverEffect()
    const renderProductHead = (item, index) => <th key={index}>{item}</th>
    const renderProductBody = (item, index) => (
        <tr key={index} onMouseEnter={() => setHoverEffect(index)} onMouseLeave={() => removeHoverEffect()} className={hover.hoveritem === index ? `${props.color ? props.color : 'blue-color'}` : ''}>
            <td>{item.id}</td>
            <td>{item.product_id}</td>
            <td>{item.product_name}</td>
            <td>{item.price}</td>
            <td>{item.discount}</td>
            <td>{item.stock_qty}</td>
            <td>{item.product_image}</td>
        </tr>
    )

    return (
        <>
            <h2 className='page-header'>Products</h2>
            <div className='card'>
                <div className='card__body'>
                    <Table 
                        headData={productHead}
                        renderHead={(item, index) => renderProductHead(item, index)}
                        tBodyData={products}
                        renderBody={(item, index) => renderProductBody(item, index)}
                    />
                </div>
            </div>
        </>
    )
}
const mapStateToProps = state => ({
    color: state.ThemeReducer.color
})
export default connect(mapStateToProps)(Product)
