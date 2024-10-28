/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './userBadge.css';

const UserBadge = ({ user }) => {
    return (
        <div className="user-badge">
            <img
                src={user?.avatar || '/src/assets/images/avatar.png'}
                alt="User Avatar"
                className="user-avatar"
            />
            <span>{user?.name || 'Anonymous'}</span>
        </div>
    );
};

export default UserBadge;
