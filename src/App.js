import React from "react"
import Product from "./Product"
import productsData from "./vschoolProducts"

function App() {

    const productsComponent = productsData.map(product => <Product key={product.id} product={product} />)
    return (
        <div>
            {productsComponent}
        </div>
    )
}

export default App;