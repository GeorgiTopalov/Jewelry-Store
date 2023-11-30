import React from "react";
import Link from "next/link";
import styles from "./../../styles/contact.module.css";



const ContactForm = () => {
    return (
        <div className={styles['contact-card']}>
        <div className={styles['contact-text']}>
            <h2>Contact Us</h2>
            <p>Don't forget to check our <Link href="/faq">FAQ</Link> page for frequently asked question.
             You may find what you are looking to ask there quicker.</p>
        </div>
        <form id={styles['contact-form']}>
            <div className="input-col">
            <label>Your Name</label>
            <input className="contact-input"></input>
            </div>
            <div className="input-col">
            <label>Your Email</label>
            <input className="contact-input"></input>
            </div>
            <div className="input-col">
            <label>Message</label>
            <input className="contact-input input-msg"></input>
            </div>
            <button className="btn btn-secondary">Send</button>
        </form>
      </div>
    );
};

export default ContactForm;