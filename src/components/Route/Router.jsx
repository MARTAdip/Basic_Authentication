import React from "react";

/* import App from '../App'
import Admin from '../Admin/Admin';
import Login from '../login/Login';
import Home from '../login/Home';
 */



const Router = () => (
  <BrowserRouter>
    <Switch>
     <Route exact path='/' component={App} />
     <Route exact path='/' component={Home} />
     <Route exact path='/admin' component={Admin} />
     <Route exact path='/admin/login' component={Login} />
     
    </Switch>
  </BrowserRouter>

  );

export default Router;
