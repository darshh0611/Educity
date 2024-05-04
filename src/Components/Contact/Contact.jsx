import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'


const Contact = () => {
  
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "aab60943-5a01-4a5f-aa0e-f02081d0b348");
  
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
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out to us through the contact
                information given below. Your feedback, questions
                and suggestions are important to us as we strive to
                provide exceptional service to our university community.
            </p>
            <ul>
                <li>
                    <strong>Email:</strong><br/>
                    ugcs@ugcs.edu.ph<br/>
                </li>
                <li>
                    <strong>Phone Number:</strong><br/>
                    02-8156497 / 0917-999-9999<br/>
                </li>
                <li>
                    <a href='https://www.facebook.com/UGCSUniversity/' target='_blank'><b>Facebook Page</b></a><br/>
                    Follow UGCS on Facebook for updates about events, announcements, and more<br/>
                </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
