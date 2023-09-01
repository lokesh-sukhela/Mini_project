import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-container" style={{ background: 'linear-gradient(#19105b, #472067, #7c3375, #FF6196)'}}>
      <div className="profile-image" >
        <img src="https://media.glassdoor.com/l/39/e8/9c/65/logo.jpg" alt="Profile" />
      </div>
      <div className="profile-details">
        <p>Name:<input type="text" placeholder="Jman Employee" /></p>
        <p>JmanId:<input type="text" placeholder="JMD***" /></p>
        <p>Add Skills:<input type="text" placeholder="DE,web,.." /></p>
        <p>Email: <input type="email" placeholder="abc@jmangroup.com" /></p>
        <p>Phone Number:<input type="number" placeholder="+91 1234567890" /></p>
        Select Location:
        <select id="cityDropdown" name="a" >
        <option placeholder="Chennai">Chennai</option>
        <option placeholder="London">London</option>
        
      </select>
        
      </div>
    </div>
  );
};


 export default Profile;