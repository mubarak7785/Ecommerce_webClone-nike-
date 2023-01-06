
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Data_Action } from "../Redux/Data_Redux/Data_Action";
import "./Home.css";
export const Home = () => {


const dispatch=useDispatch()

  useEffect(()=>{
    fetch("https://drab-bass-teddy.cyclic.app/data").then(Response=>Response.json()).then(data=>dispatch(Data_Action(data)))
  },[])
  return (
    <div>
      <div className="home">
      <div className="below_bar">
                    <p>10% Off Your First Order <br /> <span>  Shop All Our New Markdown</span></p>
                    
        </div>
        <div className="comboimg">
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/df041c2e-8d7d-46d1-848e-e00926c6cb5e/nike-just-do-it.png"
            alt=""
          />
        </div>
        <div className="content-1">
          <p>The ACG Guide To</p>
          <p>FIND YOUR OUTDOOR ADVENTURE</p>
          <p>
            Get hooked on the feeling of summer. Whether you're in search of
            thrills, relaxation, or discovery, our latest collection is ready to
            adapt. it's time to get outside and find your adventure
          </p>
          <button>Shop</button>
        </div>
        <div className="featured">
          <p>Featured</p>
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/b63b21f8-ab5e-4814-b33b-919e90be62a7/nike-just-do-it.png"
            alt=""
          />
        </div>
        <div className="content-2">
          <p>RUNNERS HELPING RUNNERS</p>
          <p>
            Need a little motivation from, running advice or just someone to
            keep pace on your next run ? <br />{" "}
            <span>Runners are always here to help.</span>
          </p>
          <button>Learn More</button>
        </div>
        <div className="trending">
          <p>Trending</p>
          <div className="t-images">
            <div>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_700,c_limit/7498ad9f-1161-4ce8-9d7e-9d01cba6c40f/nike-just-do-it.png"
                alt=""
              />
                <div className="t-btn">
                <button>shop</button>
              </div>
            </div>
            <div>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_700,c_limit/e667052c-3867-4b63-be84-b0b5b11383da/nike-just-do-it.png"
                alt=""
              />
                <div className="t-btn">
                <button>shop</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dontmiss">
          <p>Don't miss</p>
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/c54dc960-5bb4-4cd0-a08c-d92d4eb37de2/nike-just-do-it.jpg"
            alt=""
          />
        </div>
        <div className="content-3">
          <p>Nike Golf</p>
          <p>NIKE AIR ZOOM INFINITY TOUR NEXT%</p>
          <button>Shop</button>
        </div>
        <div className="thelatest">
          <p>The Latest</p>
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/1124d6cf-f235-46bb-ab5b-c00ab9635196/nike-just-do-it.png"
            alt=""
          />
        </div>
        <div className="content-4">
          <p>ALL-DAY ADVENTURE WEAR</p>
          <p>
            Explore everyday essential for wherever their adventures take them.
          </p>
          <button>Shop</button>
        </div>
        <div className="justin">
          <p>Just In</p>
          <img
            src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_1253,c_limit/f2d69e3d-a590-43fe-98d8-bc2f2c19ba9c/nike-just-do-it.jpg"
            alt=""
          />
        </div>
        <div className="content-5">
          <p>SLIDES ALL DAY</p>
          <p>Step into compfort and else</p>
          <button>Shop</button>
        </div>
        <div className="nikeday">
          <p>Have a Nike Day</p>
          <div className="nike-flex">
            <div>
              <img
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_411,c_limit/341e2ed9-9797-4f15-8d4f-265071377068/air-force-1-07-lv8-shoes-BS9f21.png"
                alt=""
              />
              <div className="n-flex2">
                <p>
                <span>Member Access</span> <br />
                  Nike Air Force 1 `07 LV8 <br /> <span>Men`s Shoes</span>
                </p>
                <p>S$179</p>
              </div>
            </div>
            <div>
              <img
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_411,c_limit/f72c3144-b982-4b85-8145-11d2d4b24d5e/air-force-1-lv8-older-shoes-5Xvbks.png"
                alt=""
              />
              <div className="n-flex2">
                <p>
                  <span>Member Access</span> <br />
                  Nike Air Force 1 LV8 <br /> <span>
                    Older Kid's Shoes
                  </span>{" "}
                </p>
                <p>S$129</p>
              </div>
            </div>
            <div>
              <img
                src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_411,c_limit/de686994-f563-447d-a969-74c9fa069aa0/force-1-lv8-younger-shoes-pQxmns.png"
                alt=""
              />
              <div className="n-flex2">
                <p>
                  <span>Member Access</span> <br /> Nike Force 1 LV8 <br />{" "}
                  <span> Younger Kid's Shoes</span>
                </p>
                <p>S$109</p>
              </div>
            </div>
          </div>
        </div>
        <div className="nikeday">
          <p>More Nike</p>
          <div className="nike-flex">
            <div>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/54238927-c5aa-46a3-abff-25162b3b1fd7/nike-just-do-it.png"
                alt=""
              />
              <div className="t-btn">
                <Link to="./men"><button>Men's</button></Link>
              </div>
            </div>
            <div>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/e64cc521-c652-49bd-bf62-f04cf9cb6b60/nike-just-do-it.png"
                alt=""
              />
              <div className="t-btn">
              <Link to="./women"><button>Women's</button></Link>
              </div>
            </div>
            <div>
              <img
                src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_411,c_limit/aa8d60e4-d556-4022-9f83-9058601c20a4/nike-just-do-it.png"
                alt=""
              />
              <div className="t-btn">
                <Link to="/kids"><button>Kid's</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
