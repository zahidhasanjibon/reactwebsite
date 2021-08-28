import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <NavLink
                    to="/service"
                    activeStyle={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}
                >
                    Service
                </NavLink>
                <li>
                    <Link to="/post/js">Post</Link>
                </li>
            </ul>
        </nav>
    );
}
