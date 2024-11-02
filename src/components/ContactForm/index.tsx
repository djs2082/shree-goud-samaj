import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "./index.css";

const ContactForm: React.FC = () => {
  const [suggestion, setSuggestion] = useState("");
  const [userName, setUserName] = useState("");
  const [address, setAddress] = useState("");

  const sendEmail = () => {
    const variables = {
      message: suggestion,
      from_name: userName,
      address: address,
    };
    emailjs
      .send(
        "service_rq1ksnd",
        "template_v2ozoyg",
        variables,
        "yu4R7cSATUKXcmIQT"
      )
      .then((res) => {
        alert("Email successfully sent!");
      })
      // Handle errors here however you like, or use a React error boundary
      .catch((err: any) =>
        alert(
          "Oh well, you failed. Here some thoughts on the error that occured"
        )
      );
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmail();
  };
  return (
    <div className="contact-form-wrapper">
      <form id="suggestion-form" onSubmit={onSubmit}>
        <div className="form-field">
          <label>Enter Name</label>
          <input onChange={(e) => setUserName(e.target.value)} required></input>
        </div>
        <div className="form-field">
          <label>Enter Address</label>
          <input onChange={(e) => setAddress(e.target.value)} required></input>
        </div>
        <div className="form-field">
          <label>Enter Suggestion</label>
          <textarea
            onChange={(e) => setSuggestion(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
