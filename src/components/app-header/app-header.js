
import React from 'react';
import './app-header.css';

const userName = 'Alex';
const isLogin = true;
const login = <span>Welcome {userName}!</span>
const notLogin = <span>Login Please!</span>;


const AppHeader = () => {
    return <h1 className="app-main-title">{isLogin ? login : notLogin }</h1>;
};

export default AppHeader;