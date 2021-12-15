import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({
    login,
    component: Component,
    ...rest
}) => {
    return <Route {...rest} component={(props) => (
        login ? (
            <Redirect to="/" />   
        ): (
            <Component {...props} />  
        )
    )} />
}
const mapStateToProps = state => ({
    login: state.AuthReducer.login
})
export default connect(mapStateToProps, {})(PublicRoute)