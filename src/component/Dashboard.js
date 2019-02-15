import React, {Component} from 'react'
import Product from './Product'

class Dashboard extends Component {
    constructor(props) {
        // console.log(props)
        super(props);
    }

    


    



    render(){
       const mappedInventoryList = this.props.inventoryList.map((product) => {
            return(
                
                <Product 
                    key={product.id}
                    name ={product.name}
                    price = {product.price}
                    image= {product.image}
                />
    
            )

       })
       return(
           <div>
               {mappedInventoryList}
           </div>
       )
    }
       
       
}

export default Dashboard