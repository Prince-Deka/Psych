import React, { useState } from 'react';
import '../Signup/FormStyles.css';
import { useNavigate } from 'react-router-dom';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

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
    fetch('https://psychbackend.onrender.com/login', { // http://localhost:1000/login for local
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
    <div className="loginWrapper">
      <div className="form-container login-container">
      <form onSubmit={handleSubmit}>
        <label className="form-label">Log In</label>
        {['email', 'password'].map(field => (
          <div className="input-container" key={field}>
            <input
              type={field === 'password' ? 'password' : 'text'} // Correct input type for password
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              placeholder={field}
              required
              className="form-input"
            />
          </div>
        ))}
        <button type="submit" className="form-button">Log In</button> 
      </form>
    </div>
    </div>
  );
}

export default Login;
