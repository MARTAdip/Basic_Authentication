import React from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

class Login extends React.Component {
   

    render() {
        //console.log(this.props)
        return(
            <div>
                <form id="form" onSubmit={this.props.handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" defaultValue={this.props.loginData.email} onChange={this.props.handleChange}/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="password" type="text" className="validate" defaultValue={this.props.loginData.password} onChange={this.props.handleChange}/>
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                            <button onClick={(e) => this.props.handleSubmit(e)} className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </form>    
                <Link to= '/'>Back to Home</Link>

            </div>    
        );
    }
}

export default Login;