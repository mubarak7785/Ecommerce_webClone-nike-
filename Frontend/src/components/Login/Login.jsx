import { Link } from 'react-router-dom'
import { useState } from 'react'
import { loginfailure, loginsuccess } from '../Redux/Login_Redux/Login_Action'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
// import { store } from '../Redux/Store'
import "./Login.css";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export const Login=()=>{
const navigate=useNavigate();  
const [logindata,setLoginupdata]=useState({})        
const dispatch=useDispatch(); 

const handlechange=(e)=>{
      const {id,value}=e.target;
      setLoginupdata({...logindata,[id]:value});
  }
 
  const senddata=(e)=>{
    e.preventDefault();
    dispatch(loginfailure())
      fetch("https://drab-bass-teddy.cyclic.app/login",{
      method:"POST",
      body:JSON.stringify(logindata),
      headers:{"content-type":"application/json"}
      }).then(Response=>Response.json()).then((data)=>{dispatch(loginsuccess(data));
        if(data.token) MySwal.fire(
          'You have been logged in successfully',
          'Please click the button!',
          'success'
        ),navigate(-1); else{alert("Invalid deatails please try again !")} }).catch((e)=>{dispatch(loginfailure)})
  }
 
  return (
    <div className="login">
     
      <div className="form_container1">
       
      <div className="img-div">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnY3YdgDUtHt_nMbslCGCPXfGzfSUWoeUEMMi85_FZ3Fo03H_M5P0Quip77kN5laR7YEs&usqp=CAU" alt="" />
          </div>
          <h2>Login</h2>
        <form onSubmit={senddata}>
          <label className="label" id="lab">Email</label>
          <br />
          <br />
          <input type="text" placeholder="Email address" id="email" onChange={handlechange} />
          <br />
          <br />

          <label id="lab">Password</label>
          <br />
          <br />
          <input type="password" placeholder="Password" id="password" onChange={handlechange} />
          <br />
          <br />
          <h4>Don't Have an account?<Link to="/signIn">Register Here</Link></h4>
          <br />
          <input id="subbtn" type="submit" />
        </form>
      </div>
    </div>
  );

}