import { useState, useEffect } from 'react'


export default function Cart(props) {

    const [subtotal, setSubtotal] = useState(0)

    useEffect(() => {
        props.listCartItems.forEach(item => (setSubtotal(subtotal + item.cost)))
    }, [props.listCartItems])


    return (
        <>
            {props.listCartItems && props.listCartItems.map(item => (
                <div key={item.id}>
                    <div>Item: {item.item}</div>
                    <div>Price: {item.cost}</div>
                    <div>Quantity: {item.quantity}</div>
                </div>
            ))}
            <div>
                subtotal = ${subtotal}
            </div>
        </>
    )
}

