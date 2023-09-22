import React from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/login.css";

const Login = () => {
  
  return (
    <Helmet title="Register">
     
     <section>
      
        <Container  >
        <div class="wrapper">
			<div class="inner">
				<img src="images/image-1.png" alt="" class="image-1"/>
				<form action="">
					<h3>New Account</h3>
					<div class="form-holder">
						<span class="lnr "><i class="ri-user-line"></i></span>
						<input type="text" class="form-control1 " placeholder="Username"/>
					</div>
					<div class="form-holder">
						<span class="lnr lnr-phone-handset"><i class="ri-phone-line"></i></span>
						<input type="text" class="form-control1" placeholder="Phone Number"/>
					</div>
					<div class="form-holder">
						<span class="lnr lnr-envelope"><i class="ri-mail-line"></i></span>
						<input type="text" class="form-control1 " placeholder="Mail"/>
					</div>
					<div class="form-holder">
						<span class="lnr lnr-lock"><i class="ri-rotate-lock-line"></i></span>
						<input type="password" class="form-control1" placeholder="Password"/>
					</div>
					<div class="form-holder">
						<span class="lnr lnr-lock"><i class="ri-rotate-lock-line"></i></span>
						<input type="password" class="form-control1" placeholder="Confirm Password"/>
					</div>
					<button className="button">
						<span>Register</span>
					</button>
                    <Link to="/register">Already have an account? Login</Link>
				</form>
              
          
			</div>
			
		</div>
         
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;