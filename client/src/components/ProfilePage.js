import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const { userId } = useParams();

    useEffect(() => {
        // Fetch user data based on userId
        fetch(`/api/users/${userId}`)
            .then(response => response.json())
            .then(data => setUser(data))
            .catch(error => console.error('Error fetching user:', error));
    }, [userId]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Profile: {user.username}</h1>
            <p>User ID: {user.id}</p>
            {/* Additional user information can be displayed here */}
        </div>
    );
};

export default ProfilePage;
