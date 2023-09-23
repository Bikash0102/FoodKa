import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <div className="checkoutMessage">
        <div className="checkoutTitleContainer">
          <AiFillCheckCircle className="checkoutIcon" />
          <h3>Thank you for your order!</h3>
        </div>
        <span>
          Your order is being processed and will be delivered as fast as
          possible.
        </span>
        <Link className="buttons" to="/ordertrack">Track Order</Link>
      </div>
      
    </>
  )
};

export default Checkout;
