import React, { useState } from 'react';
// import './Signup.css'; 
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
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {['name', 'email', 'password', 'age', 'occupation'].map(field => (
          <div className="input-container" key={field}>
            <input
              type={field === 'age' ? 'number' : 'text'}
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              className="form-input"
            />
            <label htmlFor={field} className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          </div>
        ))}

        
        <div className="input-container">
          <label>Gender:</label>
          <div className="radio-buttons">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === 'Male'}
              onChange={handleChange}
            /> Male
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === 'Female'}
              onChange={handleChange}
            /> Female
          </div>
        </div>
        <button type="submit" className="form-button">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
