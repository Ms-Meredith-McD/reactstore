import React from "react";


export default function Products(props) { 


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
                    {props.products.map(productList => (
                        <tr key={productList.item}>
                            <td>
                            {productList.item}
                            </td>
                            <td>{productList.cost}</td>
                            <td>{productList.quantity}</td>
                            <td>
                                <button onClick={() => props.setCart(note)}>{}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}