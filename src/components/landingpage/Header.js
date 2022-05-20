import React from "react";



// import {Icon,} from '@mui/material/Icon';


import { TextField} from "@mui/material";

function Header(){
    return (
        <div className='header'>
            <nav>
                <ul class="navigation-bar">
                    <div class="left-nav">
                        <span class="nav-text">Free Delivery</span>
                        <span class="nav-text">Call to Order   0705119096</span>

                        <div class="right-nav">
                            <form>
                                <button type="button,submit" id="btnLogin-SignUp" formaction=""
                                    target="_blank">Login/SignUp</button>
                            </form>
                        </div>


                    </div>
                </ul >
            </nav >
            <section class="search-area">
                <div>
                    <ul class="bottom-navigation">

                        {/* <form className="form" noValidate autoComplete="on"> */}
                            
                        <span>
                           <span>
                               {/* <a id="homepage-link" href="./index.html" alt="homepage" style="width:300px;"> */}
                                <i class="fa-solid fa-truck-fast">GADGET WORLD</i>
    {/* <Icon baseClassName="fas" className="fa-plus-circle" />
    <Icon baseClassName="fas" className="fa-plus-circle" color="primary" /> */}
      


                            </span>
                                {/* </a> */}
                                  
                        </span>

                        <span class="search-span">
                                <div>
                                    <span>
                                        <TextField type="text" size="small" id="searchbar" placeholder="Search Brands and Categories"/>
                                    </span>
                                    <span>
                                        <a href="./searchresults.html" alt="go to search" ><button id="btnSearch" size="small" >SEARCH</button></a>
                                    </span>

                                </div>

                        </span>

                        {/* </form> */}

                        <span>
                            {/* <a id="cartpage-link" href="./cartpage.html" alt="cartMenu" style="margin-right:50px;"> */}
                        <i class="fa-solid fa-cart-shopping">Cart</i>
                        </span>
                        {/* </a> */}

                    </ul >
                </div >
            </section >
        </div >
    );
}

export default Header;



