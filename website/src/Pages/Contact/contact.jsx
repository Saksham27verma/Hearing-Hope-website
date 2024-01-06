import React from "react";
import './Contact-CSS/contact.css';
import ContactForm from "./contact-form";
import ContactStrip from "./contact-strip";
import Maps from "./maps";

const Contact = () =>{
    return(
        <div>
            <ContactForm/>
            <ContactStrip/>
            <Maps/>
        </div>
    )
}
export default Contact;