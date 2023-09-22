import "../styles/checkout.css";
import { AiFillCheckCircle } from "react-icons/ai";

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
      </div>
      <button type="button" class="btn btn-primary d-flex mx-auto btn-lg" data-toggle="modal" data-target="#myModal">
              Track your order
            </button>
          
          
            <div class="modal fade" id="myModal">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                
                 
                  <div class="modal-header">
                    <h4 class="modal-title mx-auto">Order Status AWB Number-5335T5S</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                  </div>
                  
                  
                  <div class="modal-body">
                    <div class="progress-track">
                        <ul id="progressbar">
                            <li class="step0 active " id="step1">Order placed</li>
                            <li class="step0 active text-center" id="step2">In Transit</li>
                            <li class="step0 active text-right" id="step3"><span id="three">Out for Delivery</span></li>
                            <li class="step0 text-right" id="step4">Delivered</li>
                        </ul>
                    </div>
                    <div class="row">
                      <div class="col-9">
                        <div class="details d-table">
                          <div class="d-table-row">
                            <div class="d-table-cell">
                              Shipped with
                            </div>
                            <div class="d-table-cell">
                              UPS Expedited
                            </div>
                          </div>
                          <div class="d-table-row">
                            <div class="d-table-cell">
                              Estimated Delivery
                            </div>
                            <div class="d-table-cell">
                              02/12/2017
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-3">
                        <div class="d-table-row">
                          <a ><i class="fa fa-phone" aria-hidden="true"></i></a>
                        </div>
                        <div class="d-table-row">
                          <a ><i class="fa fa-envelope" aria-hidden="true"></i></a>
                        </div>
                      </div>
                    </div>      
                  </div>                  
              </div>
            </div>
            </div>
    </>
  )
};

export default Checkout;
