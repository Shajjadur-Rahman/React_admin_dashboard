import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({
    login,
    component: Component,
    ...rest
}) => {
    return <Route {...rest} component={(props) => (
        login ? (

            <Component {...rest} {...props} />
        ): (

            <Redirect to="/login" />   
        )
    )} />
}
const mapStateToProps = state => ({
    login: state.AuthReducer.login
})
export default connect(mapStateToProps, {})(PrivateRoute)
