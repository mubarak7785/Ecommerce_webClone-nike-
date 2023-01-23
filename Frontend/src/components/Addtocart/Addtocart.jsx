import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { store } from "../Redux/store"
import './Addtocart.css'
export const Bag=()=>{
const [bagdata,setBagdata]=useState([]);
const id=useSelector(store=>store.Login.user.user._id);
useEffect(()=>{
    fetchdata()
},[])

const fetchdata=()=>{
    fetch(`https://drab-bass-teddy.cyclic.app/bag?id=${id}`).then(Response=>Response.json()).then(data=>setBagdata(data))
}


const price=bagdata.reduce((ac,cu)=>{
    return ac+Number(cu.Price);
},0)

const discount=((10/100)*price).toFixed(2)

const total=(price-discount).toFixed(2)

const delfun=(id)=>{
    fetch(`https://drab-bass-teddy.cyclic.app/bag/${id}`,{
        method:"DELETE",
    }).then(fetchdata)
  }

return(
    <div className="main-continer">
       <div className="bag-cotainer">
           {bagdata.map((elem)=>{
            return (
                <div className="bag-display-div">
                  <div>
                      <img width="200px" src={elem.imgUrl} />
                  </div>
                  <div>
                      <p>{elem.name}</p>
                      <p>{elem.category}</p>
                      <p>{elem.color}</p>
                      <p>{elem.Price}</p>
                  </div>
                  <div>
                      <p className="del-para" onClick={()=>{delfun(elem._id)}}>DELETE</p>
                  </div>
                </div>
                    )
             })}
       </div>
       <div className="price-div">
           <h5 className="price-heading">Price Details</h5>
           <div className="price-div-inner">
              <p>Total items:</p>
              <p>{bagdata.length}</p>
           </div>
           <div className="price-div-inner">
              <p>Price:</p>
              <p>{price}</p>
           </div>
           <div className="price-div-inner">
              <p>Discount 10% : </p>
              <p>{discount}</p>
           </div>
           <div className="price-div-inner">
              <p>Total : </p>
              <p>{total}</p>
           </div>
           <Link to="/payment"><button className="jj">Continue to pay</button></Link>
           
       </div>
       
    </div>
)
}