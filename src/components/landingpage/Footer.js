import React from "react"


function Footer() {

    return (
        <div className='footer'>

            <div id="top-footer">
                <p>FOLLOW US </p>
                <h1>facebook</h1>
                <h1>twitter</h1>

                {/* <a href="https://facebook.com/" alt="facebook" style="margin-right: 50px;"><i
                        class="fa-brands fa-facebook-square"></i>
                        Facebook</a>
                    <a href="https://twitter.com/" alt="twitter" style="margin-right: 50px;"><i
                        class="fa-brands fa-twitter"></i>
                        Twitter</a>
                    <a href="https://gmail.com/" alt="email" style="margin-right: 50px;"><i class="fa-solid fa-at"></i>
                        Send a mail</a>
                    <a href="https://join.skype.com/invite/AFHhgVLRil0M" alt="skype"> <i
                        class="fa-solid fa-mobile-screen-button"></i>
                        Call us</a> */}
            </div>
            <hr />

            <div id="bottom-footer">
                <div className='contact-container bg-grey'>
                    <span className="div-title">Contact us</span>
                    <div className='contact-form'>
                        <div id='sect1'>
                            <span>Contact us and we will get back to you within 24 hours.</span>
                            <span>
                                <i className="fas fa-map-marker-alt"></i>
                                Kampala Uganda
                            </span>
                            <span>
                                <i className="fas fa-mobile-alt"></i>
                                +256 778 800 900
                            </span>
                            <span>
                                <i className="far fa-envelope"></i>
                                company.gmail.com
                            </span>
                        </div>

                        <div id='sect2'>
                            <span>
                                Contact
                            </span>

                            <input type="text" placeholder="email address" className="input-field" />
                            <textarea name="" id="" cols="30" rows="10" placeholder="comment"></textarea>
                            <button className="contact-btn">Send</button>
                        </div>
                    </div>
                </div>


            </div>




        </div>
    );
}

export default Footer;

