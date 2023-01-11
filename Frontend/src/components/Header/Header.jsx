import { useState } from "react"
import "./Header.css"
import { Link } from "react-router-dom"
export const Header=()=>{
    const [helplist,setHelplist]=useState(false)
    const popfun=()=>{
        setHelplist(!helplist)
    }
    return <div>
        <div className="header">
            <div className="box1">
                <img src="https://i.pinimg.com/originals/f3/10/13/f310137ff80cddb1010ecd94f844ac76.png" alt="image" />
            </div>
            <div className="box2">
                <p onMouseOver={popfun} onMouseOut={popfun}>Help</p>
                <p>|</p>
                <p>Join Us</p>
                <p>|</p>
                <Link to="/signIn"><p>Sign In</p></Link>
                
            </div>
        </div>
       {helplist?<div className="help-list">
           <div >
               <h4>Help</h4>
               <p>Order Status</p>
               <p>Dispatch and Delivery</p>
               <p>Returns</p>
               <p>Contact Us</p>
               <p>Privacy policy</p>
               <p>Terms of Sale</p>
               <p>Terms of use</p>
               <p>Send Us Feedback</p>
           </div>
       </div>:""}
    </div>
}