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
        <div class="left-div">
            <div class="category-section">

                <li class="model-tile">
                    <a>
                        <div>
                            <img id="product-img" src=""/>
</br>
                            <div class="container">
                                <!-- <div class="post"> -->
                                    <br>
                                  <div class="text" style="color: orange;">Thanks for rating us!</div>
                                  <div class="edit" style="color: orange;">EDIT</div>
                                <!-- </div> -->
                                <div class="star-widget">
                                  <input type="radio" name="rate" id="rate-5">
                                  <label for="rate-5" class="fas fa-star"></label>
                                  <input type="radio" name="rate" id="rate-4">
                                  <label for="rate-4" class="fas fa-star"></label>
                                  <input type="radio" name="rate" id="rate-3">
                                  <label for="rate-3" class="fas fa-star"></label>
                                  <input type="radio" name="rate" id="rate-2">
                                  <label for="rate-2" class="fas fa-star"></label>
                                  <input type="radio" name="rate" id="rate-1">
                                  <label for="rate-1" class="fas fa-star"></label>
                                  <form action="">
                                    <header></header>
                                    <div class="textarea">
                                      <textarea cols="30" placeholder="Describe your experience.."></textarea>
                                    </div>
                                    <div class="btn">
                                      <button type="submit">Post</button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                              <script>
                                const btn = document.querySelector("button");
                                const post = document.querySelector(".post");
                                const widget = document.querySelector(".star-widget");
                                const editBtn = document.querySelector(".edit");
                                btn.onclick = ()=>{
                                  widget.style.display = "none";
                                  post.style.display = "block";
                                  alert("thank you")
                                  editBtn.onclick = ()=>{
                                    widget.style.display = "block";
                                    post.style.display = "none";
                                  }
                                  return false;
                                }
                              </script>
                            
                        </div>
                    </a>
                </li>
                
               
            </div>
        </div>




        <div class="right-div">
       
            <ul class="phone-description">
                
                <p id="product-description"></p>
                <p id="product-name"></p>
                <p id="product-brand"></p>
                <!-- <p id="product-color"></p> -->
                <p id="product-stock"></p>
                <p id="product-price"></p>
               

                <li class="phone-brand" ><a href="javascript:void(0)" id="btn-add-cart">Add to Cart</a></li>

               
                
            </ul>
      
        </div>


    </section> */}
            <Footer/>
        </div>
    );
}


export default App;

