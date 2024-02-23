import { useState, useEffect } from 'react'
import Products from './components/Products'
import Cart from './components/Cart'
import productsDb from './products.json'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"



export default function App() {

  const [products, setProducts] = useState(productsDb)
  const [cart, setCart] = useState(null)




  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <>
      <div className="container">
        <div className="row">
          {/* left side of screen*/}
          <div className="col-6">
            <Products products={products} />
          </div>
          {/*Product goes here*/}
        </div>
        {/* right side of screen*/}
        <div className="col-6">
        <Cart cart={cart} />
          {/*Other stuff goes here*/}
        </div>
      </div>
    </>
  )
}


