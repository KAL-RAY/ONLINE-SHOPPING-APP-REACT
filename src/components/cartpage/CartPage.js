import React from 'react';

import Header from './components/Header';
import CategorySection from './components/CategorySection';
import ProductsDisplay from './components/ProductsDisplay';
import Footer from './components/Footer';
import './App.css';


function App() {
    return (
        <div className="App">
            <Header/>
            {/* <section id="CategorySection">
       

        <div class="left-divison">
            <div class="cart-summary">
                <h6>CART SUMMARY</h6>
                <ul id="cart-container">
                                 <!-- placeholder for cart items -->

                    <!-- <li class="cart-items">
                        
                            <div>
                                    <img src="assets/Images/iphone.jpg" />
                                    <p>Apple Iphone 13</p>
                                    <p>UGX 5,000,000</p>
                             </div>
                        </a>
                    </li> --> 


                </ul>


            </div>
            
        </div>

         <div class="right-division">

            <div class="category-section">
                <div>
                    <span>
                        Total
                    </span>
                    <span id="total-cart-amount">
    
                    </span>
                </div>

            </div> 

        </div>


    </section> */}
            <Footer/>
        </div>
    );
}


export default App;

