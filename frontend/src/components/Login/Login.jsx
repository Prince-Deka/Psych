import React, { useState } from 'react';
// import './Login.css'; // Uncomment and update if you have a CSS file
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    https://psychbackend.onrender.com/login for hosted
    // http://localhost:1000/login for local
    // http://13.127.222.108:2000/login for aws
    fetch('http://13.127.222.108:2000/login', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      // Check if login was successful
      if (data.verified) {
        navigate('/predict'); // Redirect to prediction page
      } else {
        alert('Login failed! Please check your credentials.'); // Notify user of failure
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.'); // Handle any errors
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {['email', 'password'].map(field => (
          <div className="input-container" key={field}>
            <input
              type={field === 'password' ? 'password' : 'text'} // Correct input type for password
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
        <button type="submit" className="form-button">Log In</button> 
      </form>
    </div>
  );
}

export default Login;
