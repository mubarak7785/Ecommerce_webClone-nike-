import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./ProductDetails.css";
import { store } from "../Redux/store";
export const Productdetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const status = useSelector((store) => store.Login.isAuthenticate);
  console.log(status);
//   useEffect(() => {
//     if (status == false) {
//       alert("please login to your account");
//       navigate(-1);
//     }
//   }, []);
  const mongoid = useSelector((store) => store.Login.user);
  const nikedata = useSelector((store) => store.Data.n_data);
  const myproduct = nikedata.filter((elem) => {
    return elem._id == id;
  });
  console.log(myproduct);
  const bagfun = (bagitem) => {
    console.log({ ...bagitem, user_id: mongoid.user._id });
    fetch("https://drab-bass-teddy.cyclic.app/bag", {
      method: "POST",
      body: JSON.stringify({ ...bagitem, user_id: mongoid.user._id }),
      headers: { "content-type": "application/json" },
    });
  };
  return (
    <div>
      <div className="productdetail-div">
        <img width="100%" height="80%" src={myproduct[0].imgUrl} />
        <div className="detaildiv">
          <div>
            <p>name:{myproduct[0].name}</p>
            <p>category:{myproduct[0].category}</p>
          </div>
          <div>
            <p>color:{myproduct[0].color}</p>
            <p>price:{myproduct[0].Price}</p>
          </div>
          <div>
            <button
              onClick={() => {
               if(status){
                const obj=myproduct[0];
                delete obj._id;
                bagfun(obj)
                alert("Product is added to the cart")
               }
                else {
                    alert("please login to your account")
                    // navigate(-1);
                }
              }}
              className="addtocart-btn"
            >
              Add to Cart
            </button>
            <br />
            <br />
            <button className="addtocart-btn">Add to Favourite</button>
          </div>
        </div>
      </div>
    </div>
  );
};
