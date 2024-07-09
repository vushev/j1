import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <div>
            <h1>TODO Application</h1>
            <nav>
                <ul>
                    <li><Link to="/todos">View TODOs</Link></li>
                    <li><Link to="/add-todo">Add TODO</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Home;
