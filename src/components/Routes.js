import React from 'react'
import { Switch } from 'react-router-dom'
import Dashboard from './../pages/dashboard/Dashboard';
import Customers from './../pages/Customers';
import Product from '../pages/Product';
import Order from './../pages/Order';
import Profile from '../pages/Profile/Profile';
import PublicRoute from './publicRoute/PublicRoute'
import PrivateRoute from './privateRoute/PrivateRoute';
import SignUp from '../Auth/signUp/SignUp';
import SignIn from '../Auth/signIn/SignIn';
import Page4O4 from '../pages/page_4O4/Page_4O4';


const Routes = () => {
    return (

            <Switch>

                <PublicRoute exact path='/login' component={SignIn}/>
                <PublicRoute exact path='/sign-up' component={SignUp}/>

                <PrivateRoute exact path='/' component={Dashboard}/>
                <PrivateRoute exact path='/customers' component={Customers} />
                <PrivateRoute exact path='/products' component={Product}/>
                <PrivateRoute exact path='/orders' component={Order}/>
                <PrivateRoute exact path='/profile' component={Profile}/>
                <PrivateRoute component={Page4O4}/>
            </Switch>
    )
}

export default Routes
