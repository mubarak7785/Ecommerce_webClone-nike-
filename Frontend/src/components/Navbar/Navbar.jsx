import "./Navbar.css"
import {BiHeart,BiShoppingBag} from "react-icons/bi"
import { Link } from "react-router-dom"
export const Navbar=()=>{
    return <div>
        <div className="navbar">
            <div className="box_1">
                <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnY3YdgDUtHt_nMbslCGCPXfGzfSUWoeUEMMi85_FZ3Fo03H_M5P0Quip77kN5laR7YEs&usqp=CAU" alt="image" /></Link>
            </div>
            <div className="box_2">
                <Link to="/men"><p>Men</p></Link> 
                <Link to="/women"><p>Women</p></Link> 
                <Link to="/kids"><p>Kids</p></Link> 
                <p>Customise</p>
                <p>Sale</p>
               <Link to="/snkrs"><p>SNKRS</p></Link> 
            </div>
            <div className="box_3">
                <input placeholder="  Search" type="text" />
                <BiHeart className="heart"/>
                <Link to="/cart"> <BiShoppingBag className="bag"/></Link>

            </div>
        </div>
       
    </div>
}