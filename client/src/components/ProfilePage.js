// src/components/ProfilePage.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import './ProfilePage.css'; // Import the separate CSS file for ProfilePage

const ProfilePage = () => {
    const history = useHistory();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            history.push('/login'); // Redirect to login page after logout
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    };

    return (
        <div className="profile-container"> {/* Apply separate container style */}
            <div className="profile-card"> {/* Apply separate card style */}
                <h1>Profile Page</h1>
                <button onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    );
};

export default ProfilePage;
