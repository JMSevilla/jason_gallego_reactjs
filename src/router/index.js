import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import { ApplicationRouter } from './route' 

/* 
<> </> -> React Fragment
<React.Fragment></React.Fragment>
*/

const RouteWithLoad = ({component : Component, ...rest}) => {
    return (
        <> 
            <Route {...rest} render={props => (
                <>
                    <Component {...props} />
                </>
            )} />
        </>
    )
}

export default () => (

    <Switch>

        <RouteWithLoad exact path={ApplicationRouter.Homepage.path}

        component={Home} />

    </Switch>

)