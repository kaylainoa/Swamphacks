import React, { useState } from 'react';
import './completedLogin.css';

const CompletedLogin = () => {
  const [formData, setFormData] = useState({
    zipCode: '',
    insuranceCompany: '',
    state: '',
    subject: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
    // Process the form data here (e.g., send to a server)
  };

  return (
    <div className="container">
      <h3>Contact Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          placeholder="Your zip code.."
          value={formData.zipCode}
          onChange={handleChange}
        />

        <label htmlFor="insuranceCompany">Insurance Company</label>
        <input
          type="text"
          id="insuranceCompany"
          name="insuranceCompany"
          placeholder="Your insurance company.."
          value={formData.insuranceCompany}
          onChange={handleChange}
        />

        <label htmlFor="state">State</label>
        <select
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
        >
          <option value="">Select a State</option>
          {['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'].map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        <label htmlFor="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
          style={{ height: '200px' }}
          value={formData.subject}
          onChange={handleChange}
        ></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CompletedLogin;
