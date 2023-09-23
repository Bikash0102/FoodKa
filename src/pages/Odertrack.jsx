import React from 'react'
import "../styles/ordertracking.css";
import { Container } from 'reactstrap';

const Odertrack = () => {
  return (
   <Container>
    <div class="container padding-bottom-3x mb-1">
    <div class="card mb-3">
      <div class="p-4 text-center text-white text-lg bg-danger rounded-top"><span class="text-uppercase">Tracking Order No - </span><span class="text-medium">34VB5540K83</span></div>
      
      <div class="card-body">
        <div class="steps d-flex flex-wrap flex-sm-nowrap justify-content-between padding-top-2x padding-bottom-1x">
          <div class="step completed">
            <div class="step-icon-wrap">
              <div class="step-icon"><i class="ri-shopping-cart-line"></i></div>
            </div>
            <h4 class="step-title">Confirmed Order</h4>
          </div>
          <div class="step completed">
            <div class="step-icon-wrap">
              <div class="step-icon"><i class="ri-settings-line"></i></div>
            </div>
            <h4 class="step-title">Processing Food</h4>
          </div>
          <div class="step">
            <div class="step-icon-wrap">
              <div class="step-icon"><i class="ri-hand-heart-line"></i></div>
            </div>
            <h4 class="step-title">Delivery Boy Pickup</h4>
          </div>
          <div class="step">
            <div class="step-icon-wrap">
              <div class="step-icon"><i class="ri-e-bike-2-line"></i></div>
            </div>
            <h4 class="step-title">Out for Delivery</h4>
          </div>
          <div class="step">
            <div class="step-icon-wrap">
              <div class="step-icon"><i class="ri-home-8-line"></i></div>
            </div>
            <h4 class="step-title">Delivered</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-wrap flex-sm-nowrap justify-content-between py-3 px-2 bg-warning">
        <div class="w-100 text-center py-1 px-2"><span class="text-medium">Shipped Adress:</span> Rajam</div>
        <div class="w-100 text-center py-1 px-2"><span class="text-medium">Status:</span>Processing Food</div>
        <div class="w-100 text-center py-1 px-2"><span class="text-medium">Expected Time:</span> 8.30 PM</div>
      </div>
    <div class="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-sm-between align-items-center">
      
      <div class="text-left text-sm-right"><a class="btn btn-outline-primary btn-rounded btn-sm" href="orderDetails" data-toggle="modal" data-target="#orderDetails">View Order Details</a></div>
    </div>
  </div>
  </Container>
  )
}

export default Odertrack