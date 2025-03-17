import React from 'react';
import "./Profile.css";

const Profile = ({ user }) => {
    const handleEdit = () => alert("Edit profile functionality here.");
    const handleLogout = () => alert("Logout functionality here.");

    return (
        <div className="profile">
            <img src={user.profilePic} alt="Profile" className="profile-pic" />
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <button onClick={handleEdit}>Edit Profile</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Profile;
