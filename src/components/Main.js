import React from "react";


function Main() {

    return (
        <div className='main'>
<h1>Main</h1>
<h1>Main</h1>
<h1>Main</h1>
<h1>Main</h1>
<h1>Main</h1>




        </div>

    )
}

export default Main;


    


    // function getDevicesByBrand(brandName) {
    //     return products.filter(function (product) {
    //         return product.brand.toLowerCase() === brandName.toLowerCase()
    //     })
    // }

    // function createProductsHTMLList(products) {
    //     return products.map(function (product, index) {
    //         let liElement = document.createElement("li")
    //         liElement.classList.add("model-tile")
    //         liElement.id = index

    //         let aElement = document.createElement("a")
    //         aElement.id = "itemcartpage-link"
    //         aElement.href = `./itemcartpage.html?product=${product.id}`
    //         liElement.appendChild(aElement)
    //         // aElement.style.textDecoration = 'none'
    //         aElement.setAttribute('style', 'text-decoration:none')


    //         let divElement = document.createElement("div")
    //         aElement.appendChild(divElement)

    //         let productImageElement = document.createElement("img")
    //         productImageElement.src = product.image

    //         let productNameElement = document.createElement("p")
    //         productNameElement.innerText = product.name
    //         productNameElement.setAttribute('style', 'color:black;font-size:large')

    //         let productPriceElement = document.createElement("p")
    //         productPriceElement.innerText = product.price
    //         productPriceElement.setAttribute('style', 'color:black;font-size:x-large')

    //         divElement.appendChild(productImageElement)
    //         divElement.appendChild(productNameElement)
    //         divElement.appendChild(productPriceElement)

    //         return liElement
    //     })
    // }

    // const iPhoneModelsElement = document.getElementById('iphone-models')
    // const samsungModelsElement = document.getElementById("samsung-models")
    // const tecnoModelsElement = document.getElementById("tecno-models")
    // const infinixModelsElement = document.getElementById("infinix-models")

    // infinixModelsElement.append(...createProductsHTMLList(getDevicesByBrand("Infinix")))
    // tecnoModelsElement.append(...createProductsHTMLList(getDevicesByBrand("Tecno")))
    // samsungModelsElement.append(...createProductsHTMLList(getDevicesByBrand("Samsung")))
    // iPhoneModelsElement.append(...createProductsHTMLList(getDevicesByBrand("Apple")))


    // let cart = JSON.parse(localStorage.getItem("cart"))

    // if (typeof (cart) === 'object') {
    //     cart = cart
    // } else {
    //     cart = []
    // }

    // // Initialise empty cart
    // // const cart = []
    // // localStorage.setItem("cart", JSON.stringify(cart))






    // // search items

    // function searchProduct(name) {
    //     return products.filter(function (product) {
    //         return product.name.toLowerCase().includes(name.toLowerCase())
    //     })
    // }
    // function registerEvents() {
    //     document.getElementById("btnSearch").addEventListener("click", function (e) {
    //         let searchInput = document.getElementById("searchbar").value
    //         let searchResults = searchProduct(searchInput)
    //         console.log(searchResults)
    //         alert(searchResults)
    //     })
    // }

    // registerEvents()







    // return (
    //     <div className='main'>

    //         <section id="main">
    //             <div class="left-div">
    //                 <div class="category-section">
    //                     <ul class="phone-brands-list">


    //                         <li class="phone-brand" ><a href="#bar-iphone"><span style="padding-left:5px">Iphone</span></a></li>
    //                         <li class="phone-brand" ><a href="#bar-samsung"><span style="padding-left:30px">Samsung</span></a></li>
    //                         <li class="phone-brand" ><a href="#bar-infinix">Infinix</a></li>
    //                         <li class="phone-brand" ><a href="#bar-tecno">Techno</a></li>


    //                     </ul>
    //                 </div>
    //             </div>

    //             <div class="right-div">
    //                 <div>
    //                     <img src="assets/Images/flash-sale.jpg" />
    //                     <p>Apple Iphone 13</p>
    //                     <p>UGX 3,000,000</p>
    //                     <p>10% Discount</p>
    //                 </div>
    //             </div>

    //         </section>


    //         <section id="display-section">
    //             <div class="model-section">
    //                 <div id="section-iphone">
    //                     <h2 id="bar-iphone" style="background-color:orange; width: 104%; height: 40px; padding-bottom: 15px;"><u>Iphone</u></h2>
    //                     <ul id="iphone-models" class="models">
    //                         <li class="model-tile">
    //                             <a id="itemcartpage-link" href="./itemcartpage.html?product=0001">
    //                                 <div>
    //                                     <img src="assets/Images/iphone.jpg" />
    //                                     <p>Apple Iphone 13</p>
    //                                     <p>UGX 5,000,000</p>
    //                                 </div>
    //                             </a>
    //                         </li>
    //                         <li class="model-tile">
    //                             <a id="itemcartpage-link" href="./itemcartpage.html?product=P002">
    //                                 <div>
    //                                     <img src="assets/Images/iphone.jpg" />
    //                                     <p>Apple Iphone 12</p>
    //                                     <p>UGX 4,000,000</p>
    //                                 </div>
    //                             </a>
    //                         </li>
    //                         <li class="model-tile">
    //                             <a id="itemcartpage-link" href="./itemcartpage.html?product=P003">
    //                                 <div>
    //                                     <img src="assets/Images/iphone.jpg" />
    //                                     <p>Apple Iphone 11</p>
    //                                     <p>UGX 3,000,000</p>
    //                                 </div>
    //                             </a>
    //                         </li>
    //                         <li class="model-tile">
    //                             <a>
    //                                 <div>
    //                                     <img src="assets/Images/iphone.jpg" />
    //                                     <p>Apple Iphone 11</p>
    //                                     <p>UGX 5,000,000</p>
    //                                 </div>
    //                             </a>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //             {/* <br> */}


    //             {/* </div> */}
    //             <br />

    //             {/* <div class="model-section">
    //         <div id="section-samsung">
    //             <h2 id="bar-samsung" style="background-color:orange; width:104%; height: 40px; padding-bottom: 15px;"><u>Samsung</u></h2>
    //             <ul id="samsung-models" class="models">
    //                 <!-- <li class="model-tile">
    //                     <a id="itemcartpage-link" href="./itemcartpage.html?product=S001"></a>
    //                         <div>
    //                             <img src="assets/Images/samsung galaxy s22.webp" />
    //                             <p>name</p>
    //                             <p>price</p>
    //                         </div>
    //                     </a>
    //                 </li>
    //                 <li class="model-tile">
    //                     <a>
    //                         <div>
    //                             <img src="assets/Images/samsung-galaxy-s21-ultra-5g-.jpg" />
    //                             <p>name</p>
    //                             <p>price</p>
    //                         </div>
    //                     </a>
    //                 </li>
    //                 <li class="model-tile">
    //                     <a>
    //                         <div>
    //                             <img src="assets/Images/samsung galaxy s22.webp" />
    //                             <p>name</p>
    //                             <p>price</p>
    //                         </div>
    //                     </a>
    //                 </li>
    //                 <li class="model-tile">
    //                     <a>
    //                         <div>
    //                             <img src="assets/Images/samsung galaxy s22.webp" />
    //                             <p>name</p>
    //                             <p>price</p>
    //                         </div>
    //                     </a>
    //                 </li> -->
    //                 </ul>
    //             </div>
    //         </div>
    //         <br>
           
    //     </div> */}

    //             {/* <div class="model-section">
    //         <div id="section-infinix">
    //             <h2 id="bar-infinix" style="background-color:orange; width:104%; height: 40px; padding-bottom: 15px;"><u>Infinix</u></h2>
    //             <ul id="infinix-models" class="models">
    //                 <!-- <li class="model-tile">
    //                     <a id="itemcartpage-link" href="./itemcartpage.html?product=F001"></a>
    //                         <div>
    //                             <img src="assets/Images/infinix.jpg" />
    //                             <p>Infinix Zero 6</p>
    //                             <p>price</p>
    //                         </div>
    //                     </a>
    //                 </li>
    //                 <li class="model-tile">
    //                     <a>
    //                         <div>
    //                             <img src="assets/Images/infinix.jpg" />
    //                             <p>Infinix Zero 6</p>
    //                             <p>price</p>
    //                         </div>
    //                     </a>
    //                 </li>
    //                 <li class="model-tile">
    //                     <a>
    //                         <div>
    //                             <img src="assets/Images/infinix.jpg" />
    //                             <p>Infinix Zero 6</p>
    //                             <p>price</p>
    //                         </div>
    //                     </a>
    //                 </li>
    //                 <li class="model-tile">
    //                     <a>
    //                         <div>
    //                             <img src="assets/Images/infinix.jpg" />
    //                             <p>Infinix Zero 6</p>
    //                             <p>price</p>
    //                         </div>
    //                     </a>
    //                 </li> -->
    //                 </ul>
    //             </div>
    //         </div>
    //         <br>
           
    //     </div> */}

    //             {/* <div class="model-section">
    //         <div id="section-tecno">
    //             <h2 id="bar-tecno" style="background-color:orange; width:104%; height: 40px; padding-bottom: 15px;"><u>Tecno</u></h2>
    //             <ul id="tecno-models" class="models">
    //                 <!-- <li class="model-tile">
    //                     <a id="itemcartpage-link" href="./itemcartpage.html?product=T001"></a>
    //                         <div>
    //                             <img src="assets/Images/tecno-camon-18p.jpg" />
    //                             <p>Tecno-camon-18p</p>
    //                             <p>price</p>
    //                         </div>
    //                     </a>
    //                 </li>
    //                 <li class="model-tile">
    //                     <a>
    //                         <div>
    //                             <img src="assets/Images/tecno-pop5.jpg" />
    //                             <p>Tecno-pop5</p>
    //                             <p>price</p>
    //                         </div>
    //                     </a>
    //                 </li>
    //                 <li class="model-tile">
    //                     <a>
    //                         <div>
    //                             <img src="assets/Images/tecno-spark-8.jpg" />
    //                             <p>Tecno-spark-8</p>
    //                             <p>price</p>
    //                         </div>
    //                     </a>
    //                 </li>
    //                 <li class="model-tile">
    //                     <a>
    //                         <div>
    //                             <img src="assets/Images/tecno-spark-go-2021.jpg" />
    //                             <p class="model-tag">Tecno-spark-go</p>
    //                             <p class="model-tag">price</p>
    //                         </div>
    //                     </a>
    //                 </li> -->
    //                 </ul>
    //             </div>
    //         </div >
    //         <br>
           
    //     </div> */}


    //             <br/>
    //                 <br/>

    //                 </section>

  
