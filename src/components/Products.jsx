import React from "react";


export default function Products(props) {

    function addToCart(product) {
        if (props.listCartItems.length === 0) {
            props.setListCartItems([product])
        } else {
            props.setListCartItems([...props.listCartItems, product])
        }
    }


    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>

                <tbody>
                    {props.products.map(product => (
                        <tr key={product.item}>
                            <td>
                                {product.item}
                            </td>
                            <td>{product.cost}</td>
                            <td>{product.quantity}</td>
                            <td>
                                <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}