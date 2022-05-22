import React from "react";
import { Button } from "@mui/material";


function ProductContainer(props) {


    return (<>
        <div>
            <li style={{ maxHeight: '100vh', listStyle: 'none'  }}>
                <div className="product-details">
                    <img src={props.product.image} alt="title" width={"150px"} />
                    <p>$ {props.product.price}</p>
                    <div>
                        <h3>{props.product.title}</h3>
                        <p>{props.product.description}</p>
                    </div>
                    <Button variant="contained" size="medium" background-color="orange" onClick={() => { props.addToCart(props.product)
                    alert("Item has been added to cart successfully!!");
                    }}>Add to cart</Button> 
                    <br/>
                    <br/>          
                </div>
            </li>
        </div>
    </>)
}

export default ProductContainer