import React from 'react'

function Product(props){
    return(
        <div>
            <h3>{props.name}</h3>
            <h3>{props.price}</h3>
            <h3>{props.image}</h3>



        </div>

    )
}

export default Product