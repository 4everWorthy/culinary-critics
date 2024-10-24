import React from 'react';
import './userBadge.css';

const UserBadge = ({ user }) => {
    return (
        <div className="user-badge">
            <img src={user.avatar} alt="User Avatar" className="user-avatar" />
            <span>{user.name}</span>
        </div>
    );
};

export default UserBadge;
