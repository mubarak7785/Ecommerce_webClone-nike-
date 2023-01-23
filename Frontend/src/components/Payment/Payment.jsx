import "./Payment.css";
import { Link } from "react-router-dom";
export const Payment = () => {
  return (
    <div>
      <div className="main_div2">
        <div className="user">
          <h2>BILLING INFORMATION</h2>
          <div>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Address" />
          <div>
            <input type="text" placeholder="City" />
            <input type="text" placeholder="Zip Code" />
          </div>
          <div>
            <select name="" id="">
              <option value="">Country</option>
              <option value="">Afganistan</option>
              <option value="">Pakistan</option>
              <option value="">India</option>
              <option value="">Sri Lanka</option>
              <option value="">Bangladesh</option>
              <option value="">Nepal</option>
            </select>
          </div>
          <div>
            <p className="d">Date Of Birth</p>
            <input type="date" placeholder="Date of Birth" />
            <select name="" id="">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <h2>CREDIT CARD INFOMATION</h2>
          <input type="text" placeholder="Cardholder's Name" />
          <input type="text" placeholder="Card Number" />
          <div>
            <input type="number" placeholder="Enter CVV" />
          </div>
          <div>
            <select name="" id="">
              <option value="">EXP. Month</option>
              <option value="">01</option>
              <option value="">02</option>
              <option value="">03</option>
              <option value="">04</option>
              <option value="">05</option>
              <option value="">06</option>
              <option value="">07</option>
              <option value="">08</option>
              <option value="">09</option>
              <option value="">10</option>
              <option value="">11</option>
              <option value="">12</option>
            </select>
            <select name="" id="">
              <option value="">EXP. YEAR</option>
              <option value="">21</option>
              <option value="">22</option>
              <option value="">23</option>
              <option value="">24</option>
              <option value="">25</option>
              <option value="">26</option>
              <option value="">27</option>
              <option value="">28</option>
              <option value="">29</option>
              <option value="">30</option>
            </select>
          </div>
          <div id="btn">
             <Link to="/ordersuccess"><button>PROCEED</button></Link>
              
          </div>
        </div>
      </div>
    </div>
  );
};
