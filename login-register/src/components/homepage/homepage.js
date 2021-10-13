import React from 'react';
import "./homepage.css";
import { useHistory } from 'react-router';

const Homepage = ({ setLoginUser }) => {

    const history = useHistory();

    return (
        <div className="homepage">
            <h1>Homepage</h1>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage;