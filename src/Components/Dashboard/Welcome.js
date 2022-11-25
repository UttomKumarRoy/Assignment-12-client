import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';

const Welcome = () => {
    const {user}=useContext(AuthContext)
    return (
        <div>
            `<h2>Congratulations <strong>{user?.displayName}</strong> ! Welcome to your dashboard</h2>`
        </div>
    );
};

export default Welcome;