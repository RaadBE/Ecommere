import React from "react";
import FooterBottom from "../common/FooterBottom";
const Footer = () => {
    return (
        <>
            <footer className='foot'>
                <div className='block1'>
                    <p>SHOP INFORMATION
                       DEPECHE.Ove Jensens Allé 33
                       8700 Horsens+45 70 22 98 89
                       Denmark
                       CVR. 31251699
                    </p>
                </div>
                <div className='block2'>
                    <p>Customer information</p>
                    <p>Help and support</p>
                    <p>Shipping and delivery</p>
                    <p>Payment method</p>
                    <p>Terms and conditions</p>
                    <p>Returns and refunds</p>
                    <p>Privacy policy</p>
                </div>
                <div className='block3'>
                    <p>ASH MAD on Social Networks</p> 
                    <p>Facebook</p> 
                    <p>Twitter</p> 
                    <p>LinkedIn</p> 
                    <p>Instagram</p> 
                    <p>Pinterest</p> 
                </div>
            </footer>
            <FooterBottom />
        </>
    );
};

export default Footer;
