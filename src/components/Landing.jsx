import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../components/Button';
import '../assets/styles/home.scss';

const Landing = () => {
    return (
    <>
    <div className="header_container">
        <header>
            <div className="header_div">
                <h1>Questioner</h1>
                <div className="details">
                    <p>Schedule and organize meetups <br/>
             with no fuss.</p>
                    <Link to="/login" className="link-style">
                        <ButtonComponent type="button" name="button" color="primary" variant="contained">
             Get Started
                        </ButtonComponent>
                    </Link>
                </div>
            </div>
        </header>
	 </div>
   <footer>
       <p>Powered by TheDrizzyWay &#169; 2018</p><br/>
	 </footer>
   </>
    );
};

export default Landing;
