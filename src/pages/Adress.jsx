import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Row, Col, } from "reactstrap";

import Helmet from "../components/Helmet/Helmet";

import "../styles/adress.css";

const Adress = () => {
  
  
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;
  const gstamount=((cartTotalAmount)/100*15);
  const totalAmount = cartTotalAmount +gstamount+ Number(shippingCost);


  return (
    <Helmet title="Checkout">
     
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
            <div class="wrappers">
			<div class="inner">
				<img src="images/image-1.png" alt="" class="image-1"/>
				<form action="">
					<h3>Shipping Address</h3>
					<div class="form-holder">
						<span class="lnr "></span>
						<input type="text" class="form-control1 " placeholder="Person name "/>
					</div>
					<div class="form-holder">
						<span class="lnr lnr-phone-handset"></span>
						<input type="text" class="form-control1" placeholder="Phone Number"/>
					</div>
					<div class="form-holder">
						<span class="lnr lnr-envelope"></span>
						<input type="text" class="form-control1 " placeholder="Country"/>
					</div>
					<div class="form-holder">
						<span class="lnr lnr-lock"></span>
						<input type="number" maxLength={5} class="form-control1" placeholder="Pincode"/>
					</div>
					<div class="form-holder">
						<span class="lnr lnr-lock"></span>
						<input type="password" class="form-control1" placeholder="City"/>
					</div>
                    <div class="form-holder">
						<span class="lnr lnr-lock"></span>
						<textarea  type="text" class="form-control3" placeholder="adress"/>
					</div>
					
                    <Link className="buttons" to="/checkout">Place Your Order</Link>
                  
                    
				</form>
              
          
			</div>
			
		</div>
            </Col>

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>₹{cartTotalAmount+gstamount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>₹{shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>₹{totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Adress;