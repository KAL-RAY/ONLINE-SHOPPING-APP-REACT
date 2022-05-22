import React from "react";

function CartContainer(props) {

    return(
    <>
        <p>showing cart</p>
        <p>showing cart</p>
        <p>showing cart</p>
        <p>showing cart</p>
        <p>showing cart</p>
        <p>showing cart</p>
        <div>
            <p>Brenda's cart will display here</p>

            <li style={{ maxHeight: '100vh' }}>
                {/* <div className="product-details">
                    <img src={props.product.image} alt="title" width={"150px"} />
                    <p>$ {props.product.price}</p>
                   
                </div> */}
            </li>
           
        </div>
       
    </>)
 
}

export default CartContainer



