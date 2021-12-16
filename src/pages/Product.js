import React, {useEffect, useState} from 'react'
import Table from '../components/table/Table'
import products from '../assets/jsonData/products.json'
import { connect } from 'react-redux'
import HoverEffect from './../components/hovereffect/HoverEffect';



const productHead = ['', 'Product Id', 'Product', 'Price', 'Discount', 'Stock QTY', 'Image']



const Product = props => {
    const [currColor, setcurrColor] = useState('blue-color')
    useEffect(() => {
        document.title = "Products"
        if(props.hover_bg !== null) setcurrColor(props.hover_bg)
    }, [props.hover_bg])


    
    const {hover, setHoverEffect, removeHoverEffect} = HoverEffect()
    const renderProductHead = (item, index) => <th key={index}>{item}</th>
    const renderProductBody = (item, index) => (
        <tr key={index} onMouseEnter={() => setHoverEffect(index)} onMouseLeave={() => removeHoverEffect()} className={hover.hoveritem === index ? `${currColor}` : ''}>
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
    hover_bg: state.ThemeReducer.hover_bg
})
export default connect(mapStateToProps)(Product)
