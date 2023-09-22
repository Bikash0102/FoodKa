import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Register = () => {
  
  return (
    <Helmet title="Login">
     
     <section>
      
        <Container className="login" >
        <div class="wrapper">
			<div class="inner">
				<img src="images/image-1.png" alt="" class="image-1"/>
				<form action="">
					<h3>Login</h3>
					<div class="form-holder">
						<span class="lnr "><i class="ri-user-line"></i></span>
						<input type="text" class="form-control1 " placeholder="Username"/>
					</div>
					<div class="form-holder">
						<span class="lnr lnr-phone-handset"><i class="ri-phone-line"></i></span>
						<input type="text" class="form-control1" placeholder="Password"/>
					</div>
					
					<button className="button">
						<span>Login</span>
					</button>
                    <Link to="/login">
                Don't have an account? Create an account
              </Link>
				</form>
              
          
			</div>
			
		</div>
         
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;