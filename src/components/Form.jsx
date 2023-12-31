import React, { useState, useEffect } from 'react';
import "../styles/form.css";

export default function EnquiryForm({selectedPackage, clearSelectedPackage}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
  });

  useEffect(() => {
    if (selectedPackage && selectedPackage.trim() !== "")
    setFormData(formData => ({...formData, message: `Hello, I would like to know more about ${selectedPackage}. Please get in touch on the provided email or contact number. Thank you.`}))
  }, [selectedPackage])

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "message" && !value.includes(selectedPackage)){
      clearSelectedPackage();
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div id="enquiryform" className="enquiry-form">
      <h2>Make an Enquiry</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}