import React from "react";
import ContactForm from "../ContactForm";
import ganesha from "./../../images/ganesh.png";
import "./index.css";

const LandingPage: React.FC = () => {
  return (
    <>
      <div className="landing-page-wrapper">
        <img id="ganesha-photo" src={ganesha} alt="ganesha" />
        <div>
          <p>Welcome To Shree Gaud Brahmain Samag Site....</p>
          <h1>Site Will be lauching Soon....</h1>
          <p>
            Meanwhile you can drop any specific suggesions you have for the Site
            below..
          </p>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default LandingPage;
