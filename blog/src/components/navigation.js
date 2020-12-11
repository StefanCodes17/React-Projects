import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from 'antd'

const navLinks = [
    {
        title: 'Blog',
        path: '/'
    },
    {
        title: 'Web Dev',
        path: '/web-dev'
    },
    {
        title: 'Cloud',
        path: '/cloud'
    },
    {
        title: 'Algorithms',
        path: '/algorithms'
    },
    {
        title: 'Brain Hacking',
        path: '/'
    },
    {
        title: 'Login',
        path: '/login'
    }
]


export default function Navigation({ user }) {

    const [menuActive, setMenuActive] = useState(false)

    return (
        <nav className="main-navigation">
            <span className="menu-title">StefanCodes Blog</span>
            <div className={`menu-content-container ${menuActive && 'active'}`}>
                <ul>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                <span className="menu-avatar-container">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" size={38} />
                    <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
                </span>
            </div>
            <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />

        </nav >
    )
}
