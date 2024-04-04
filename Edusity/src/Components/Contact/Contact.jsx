import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d89d1e1e-0731-461d-b38b-79a8a13b02e4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" className="" /></h3>
        <p>
          Upon successful completion of courses, learners have the opportunity
          to earn certificates, diplomas, or credentials to validate their
          achievements and enhance their professional credentials. Edusity
          collaborates with accredited institutions and industry partners to
          ensure that certifications are recognized and valued by employers and
          educational institutions worldwide.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" className="" />Contact@mrmdsanjai.dev</li>
            <li><img src={phone_icon} alt="" className="" />9976628999</li>
            <li><img src={location_icon} alt="" className="" />77 BharathiNagar ,Chennai<br/>ZIP 600044,Tamil Nadu</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <lable>Your Name</lable>
            <input type="text" name='name' placeholder="Enter your Name" required/>
            <lable>Phone Number</lable>
            <input type="tel" name="phone" placeholder="Enter your mobile number"required />
            <lable>Write your message here</lable>
            <textarea name="message" rows="6"placeholder="Enter your message" required></textarea>
            <button type="submit" className="btn dark-btn">Submit now <img src={white_arrow}/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
