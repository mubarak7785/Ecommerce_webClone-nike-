
import { useSelector } from "react-redux";
import { store } from "../Redux/store";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";

export const Kid = () => {
  const [wdata,setWdata]=useState([])
  var womendata=useSelector(store=>store.Data.n_data)
    
    // var mandata=useSelector(store=>store.ndata);
    var womendata=womendata.filter((elem)=>{return elem.type=='kid'})
    useEffect(()=>{
      setWdata(womendata)
    },[])
    const status=useSelector(store=>store.Login.isAuthenticate)
console.log(status)
    const handleChangeColor=(e)=>{
        const {value}= e.target;
        console.log(value)
        if(value=="all"){
          setWdata(womendata)
        }
        else{
          const data=womendata.filter((elem)=>{
            return elem.color==value;
          })
          setWdata(data)
          console.log(data)
        }
    }
    const handleChangeCategory=(e)=>{
      const {value}= e.target;
      if(value=="all"){
        setWdata(womendata)
      }
      else{
        const data=womendata.filter((elem)=>{
          return elem.category==value;
        })
        setWdata(data)
      }
  }
  const sortfun=(e)=>{
    const {value}= e.target;
    var arr=[];
    Object.assign(arr,womendata)
    if(value=="all"){
      setWdata(womendata)
    }
    else if(value=="low"){
      let data1=arr.sort((a,b)=>a.Price-b.Price)
      setWdata(data1)
    }
    else{
      let data2=arr.sort((a,b)=>b.Price-a.Price)
      setWdata(data2)
    }
  }
  return (
    <div>
      <div className="p-name">
        <p>Kid's Section</p>
        <div className="filter">
        <div className="color">
          <label htmlFor="">Color-Filter : </label>
          <select name="" id="" onChange={handleChangeColor}>
            <option value="all">Color</option>
            <option value="White">White</option>
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Gray">Gray</option>
            <option value="Cream">Cream</option>
            <option value="Pink">Pink</option>
            <option value="Olive">Olive</option>
            <option value="Brown">Brown</option>
          </select>
        </div>
        <div className="category">
          <label htmlFor="">Category-Filter : </label>
          <select name="" id="" onChange={handleChangeCategory} >
          <option value="all">Category</option>
            <option value="Jacket">Jacket</option>
            <option value="Hoodie">Hoodie</option>
            <option value="T-Shirt">T-Shirt</option>
            <option value="Cap">Cap</option>
            <option value="Pants">Pants</option>
            <option value="Leggings">Leggings</option>
            <option value="Bag">Bag</option>
            <option value="Shoe">Shoe</option>
            <option value="Top">Top</option>
          </select>
        </div>
        <div className="sort">
            <label htmlFor="">Sort By : </label>
            <select name="" id="" onChange={sortfun}>
                <option value="all">--</option>
                <option value="high">High to Low</option>
                <option value="low">Low to High</option>
            </select>
        </div>
      </div>
      </div>
    
        <div className="main">
        {wdata.map((elem)=>{
          return(
            <Link to={`/detail/${elem._id}`}>
               <div className="display">
                <img width="100%" src={elem.imgUrl}/>
                <p>{elem.name}</p>
                <p>{elem.category}</p>
                <p>{elem.color}</p>
                <p>{elem.Price}</p>
            </div>
            </Link>
           
          )
        })}
        </div>
    </div>
  );
};



// import "./Women.css"
// import { useSelector } from "react-redux";
// import { store } from "../Redux/store";
// import { useEffect, useState} from "react";
// import { Link } from "react-router-dom";

// export const Women = () => {
//   const [wdata,setWdata]=useState([])
//     var womendata=useSelector(store=>store.Data.n_data)
    
//     // var mandata=useSelector(store=>store.ndata);
//     var womendata=womendata.filter((elem)=>{return elem.type=='women'})
//     useEffect(()=>{
//       setWdata(womendata)
//     },[])
// //     const status=useSelector(store=>store.Login.isAuthenticate)
// // console.log(status)
//     const handleChangeColor=(e)=>{
//         const {value}= e.target;
//         console.log(value)
//         if(value=="all"){
//           setWdata(womendata)
//         }
//         else{
//           const data=womendata.filter((elem)=>{
//             return elem.color==value;
//           })
//           setWdata(data)
//           console.log(data)
//         }
//     }
//     const handleChangeCategory=(e)=>{
//       const {value}= e.target;
//       if(value=="all"){
//         setWdata(womendata)
//       }
//       else{
//         const data=womendata.filter((elem)=>{
//           return elem.category==value;
//         })
//         setWdata(data)
//       }
//   }
//   const sortfun=(e)=>{
//     const {value}= e.target;
//     var arr=[];
//     Object.assign(arr,womendata)
//     if(value=="all"){
//       setWdata(womendata)
//     }
//     else if(value=="low"){
//       let data1=arr.sort((a,b)=>a.Price-b.Price)
//       setWdata(data1)
//     }
//     else{
//       let data2=arr.sort((a,b)=>b.Price-a.Price)
//       setWdata(data2)
//     }
//   }
//   return (
//     <div>
//       <div className="p-name">
//         <p>Men's Section</p>
//         <div className="filter">
//         <div className="color">
//           <label htmlFor="">Color-Filter : </label>
//           <select name="" id="" onChange={handleChangeColor}>
//             <option value="all">Color</option>
//             <option value="White">White</option>
//             <option value="Black">Black</option>
//             <option value="Blue">Blue</option>
//             <option value="Red">Red</option>
//             <option value="Gray">Gray</option>
//             <option value="Cream">Cream</option>
//             <option value="Pink">Pink</option>
//             <option value="Olive">Olive</option>
//             <option value="Brown">Brown</option>
//           </select>
//         </div>
//         <div className="category">
//           <label htmlFor="">Category-Filter : </label>
//           <select name="" id="" onChange={handleChangeCategory} >
//           <option value="all">Category</option>
//             <option value="SportsBra">SportsBra</option>
//             <option value="Top">Top</option>
//             <option value="Socks">Socks</option>
//             <option value="Socks">Socks</option>
//             <option value="Trousers">Trousers</option>
//             <option value="Jacket">Jacket</option>
//             <option value="Shorts">Shorts</option>
//             <option value="Shoe">Shoe</option>
//           </select>
//         </div>
//         <div className="sort">
//             <label htmlFor="">Sort By : </label>
//             <select name="" id="" onChange={sortfun}>
//                 <option value="all">--</option>
//                 <option value="high">High to Low</option>
//                 <option value="low">Low to High</option>
//             </select>
//         </div>
//       </div>
//       </div>
    
//         <div className="main_div">
//         {wdata.map((elem)=>{
//           return(
//             <Link to={`/detail/${elem._id}`}>
//              <div className="display">
//                 <img width="100%" src={elem.imgUrl}/>
//                 <p>{elem.name}</p>
//                 <p>{elem.category}</p>
//                 <p>{elem.color}</p>
//                 <p>{elem.Price}</p>
//             </div>
//             </Link> 
//           )
//         })}
//         </div>
//     </div>
//   );
// };
