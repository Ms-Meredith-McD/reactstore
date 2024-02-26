import { useState, useEffect } from 'react'
import Products from './components/Products'
import Cart from './components/Cart'
import productsDb from './products.json'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"



export default function App() {
  


  const [products, setProducts] = useState(productsDb)
  const [listCartItems, setListCartItems] = useState([])




  useEffect(() => {
    console.log(listCartItems)
  }, [listCartItems])

  return (
    <>
      <div className="container">
        <div className="row">
          {/* left side of screen*/}
          <div className="col-6">
            <Products products={products} listCartItems={listCartItems} setListCartItems={setListCartItems} />
          </div>
          {/*Product goes here*/}
        
        {/* right side of screen*/}
        <div className="col-6">
          <Cart listCartItems={listCartItems} setListCartItems={setListCartItems}/>
          {/*Other stuff goes here*/}
          </div>
        </div>
      </div>
    </>
  )
}


