import React, { useState } from 'react';
import './FormStyles.css';
import { useNavigate } from 'react-router-dom';


function Signup() {

  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    gender: '',
    occupation: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('https://psychbackend.onrender.com/signup', {  // http://localhost:1000/signup for local
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
    navigate('/login')
  };


  return (
    <div className="signupWrapper">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label className="form-label">Sign up</label>
          {['name', 'email', 'password', 'age', 'occupation'].map(field => (
            <div className="input-container" key={field}>
              <input
                type={field === 'age' ? 'number' : field === 'password' ? 'password' : 'text'}
                id={field}
                name={field}
                placeholder={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
          ))}

          <div className="input-container gender-contianer">
            <label className="form-label gender-label">Gender:</label>
            <div className="radio-buttons">
              <span>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === 'Male'}
                onChange={handleChange}
              /> Male
              </span>
              <span>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === 'Female'}
                onChange={handleChange}
              /> Female
              </span>
            </div>
          </div>
          <button type="submit" className="form-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
