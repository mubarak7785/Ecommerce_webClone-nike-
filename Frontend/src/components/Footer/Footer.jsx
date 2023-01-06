import './Footer.css'
import { FaTwitter,FaFacebookF,FaYoutube,FaInstagram } from "react-icons/fa";
export const Footer=()=>{
    return(
        <div>
          <div class="footermaindiv">
            <div class="footerContainer">
             <div class="footerDiv1">
                <ul>
                    <li><a class="anchorhead" href="#">FIND STORE</a></li>
                    <li><a class="anchorhead" href="#">BECOME A MEMBER</a></li>
                    <li><a class="anchorhead" href="#">SIGN UP FOR EMAL</a></li>
                    <li><a class="anchorhead" href="#">STUDENT DISCOUNT</a></li>
                    <li><a class="anchorhead" href="#">SEND US FEEDBACK</a></li>
                </ul>
                <ul>
                    <li><a class="anchorhead" href="#">GET HELP</a></li>
                    <li><a href="#">order Status</a></li>
                    <li><a href="#">Delivery</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Payment option</a></li>
                    <li><a href="#">Contact Us On Nike.com Inquiries</a></li>
                    <li><a href="#">Contact Us On Other Inquiries</a></li>
                </ul>
                <ul>
                    <li><a class="anchorhead" href="#">ABOUT NIKE</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Investors</a></li>
                    <li><a href="#">Sustainability</a></li>
                </ul>
            </div>
            <div class="icondiv">
                <div class="icons"><a class="icon" href="#"><FaTwitter/></a></div>
                <div class="icons"><a class="icon" href="#"><FaFacebookF/></a></div>
                <div class="icons"><a class="icon" href="#"><FaYoutube/></a></div>
                <div><a class="icon" href="#"><FaInstagram/></a></div>
            </div>
        </div>
        <hr/>
        <div class="bottomfooter">
            <div class="b1">
                <a href="#"><i id="mapicon" class="fas fa-map-marker-alt"></i></a>
                <a class="anchorhead a2" href="#">India</a>
                <label>© 2021 Nike, Inc. All Rights Reserved</label>
            </div>
            <div class="b2">
                <a href="#">Guides</a>
                <a href="#">Terms of Sale</a>
                <a href="#">Terms of Use</a>
                <a href="#">Nike Privacy Policy</a>
            </div>
           </div>
        </div>
     </div>
    )
}