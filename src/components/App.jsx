import React from 'react';
import Login from './Login.jsx';
import Home from './Home.jsx';
import Admin from './Admin.jsx';
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginData: {
                email : "",
                password: "",
                isLoggedin: true
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }
    handleSubmit(e) {  // read only
        e.preventDefault();
        const user = { email: "admin@me.com", password: "12345"}
        if (user.email === this.state.loginData.email && user.password === this.state.loginData.password ) {
           <Redirect to='/admin' />
            } else {
            alert("invalid email or password")
        }
        //localStorage.getItem("loginData", JSON.parse(loginDataCopy))
    }


    handleChange (e) {
        const loginDataCopy = {...this.state.loginData}; 
         loginDataCopy[e.target.id] = e.target.value
         this.setState({ loginData: loginDataCopy}) 
         localStorage.setItem("loginData", JSON.stringify(loginDataCopy))
    }


    render(){
        return(
            <React.Fragment>
                
                <Switch>
                     <Route exact path='/' component={Home} />
                     <Route exact path='/admin' component={Admin} />
                     <Route path='/login' render={() =>  <Login loginData = {this.state.loginData}                 handleSubmit={this.handleSubmit}
                         handleChange={this.handleChange}/>} />
                </Switch>
            </React.Fragment>    
        );
    }
}

export default App;


