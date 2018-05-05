import React from "react";
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';



class Home extends React.Component {
        
    render() {
        const divStyle = {
            fontFamily : 'Roboto Mono'
          }
        return (
            <div>
                <h3 style={divStyle}>Log-In Authentication</h3>
                    <p>this is the home page pigs</p>
                <Link to= '/login'>Go to Login</Link>
            </div>    
        );
    }
}


export default Home;