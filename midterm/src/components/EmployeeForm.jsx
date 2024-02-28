import React, { useState } from 'react';
import './EmployeeForm.css';

function EmployeeForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    portfolio: '',
    position: 'security-analyst',
    phoneNumber: '',
    relocate: 'yes',
    reference: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      portfolio: '',
      position: 'security-analyst',
      phoneNumber: '',
      relocate: 'yes',
      reference: '',
    });
  };

  return (
    <div className="employee-form">
      <h1>Employee Application Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="portfolio">Portfolio Website</label>
          <input
            type="text"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleChange}
            placeholder="http://"
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Position Applying For *</label>
          <select name="position" value={formData.position} onChange={handleChange} required>
            <option value="security-analyst">Security Analyst</option>
            <option value="tester">Tester</option>
            <option value="software-engineer">Software Engineer</option>
            <option value="front-end-developer">Front-end Developer</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone * (Must be 10 digits)</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div className="form-group">
          <label>Are you willing to relocate? *</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="relocate"
                value="yes"
                checked={formData.relocate === 'yes'}
                onChange={handleChange}
                required
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="relocate"
                value="no"
                checked={formData.relocate === 'no'}
                onChange={handleChange}
              />
              No
            </label>
            <label>
              <input
                type="radio"
                name="relocate"
                value="not-sure"
                checked={formData.relocate === 'not-sure'}
                onChange={handleChange}
              />
              Not Sure
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="reference">Reference / Comments / Questions</label>
          <textarea
            name="reference"
            value={formData.reference}
            onChange={handleChange}
          />
        </div>
        <div className="button-group">
          <button type="submit">Send Application</button>
          <button type="button" onClick={handleReset}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default EmployeeForm;
