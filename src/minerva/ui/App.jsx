import React                   from "react"
import { Route }               from "react-router"
import { Switch }              from "react-router"
import { withRouter }          from "react-router"
import { BrowserRouter }       from "react-router-dom"

import SignInPage              from "minerva/ui/view/auth/SignInPage"
import OverView                from "minerva/ui/view/OverView"
import TestManager             from "minerva/ui/view/test/TestManager"
import AuthenticationManager   from "minerva/ui/wrapper/AuthenticationManager"
import MinervaAPIManager       from "minerva/ui/wrapper/MinervaAPIManager"
import ErrorListener           from "minerva/ui/view/ErrorListener"
import MainLayout              from "minerva/ui/view/MainLayout"

let Root = withRouter(
    props =>
        <AuthenticationManager
            render={props =>
                <MinervaAPIManager
                    render={props =>
                        <MainLayout
                            {...props}
                        />
                    }
                    {...props}
                />
            }
            {...props}
        />
)

let ComposingRoute = ({
    component,
    Component = component,
    path,
    ...props
}) =>
    <Route
        path={path}
        render={x => <Component {...x} {...props} />}
    />

let ComposingSwitch = ({
    children,
    ...props
}) =>
    <Switch>
        {React.Children.toArray(children).map(
            x => React.cloneElement(
                x,
                {
                    ...props,
                    ...x.props
                }
            )
        )}
    </Switch>

export default props =>
    <BrowserRouter
        {...props}
    >
        <ErrorListener>
            <Root>
                <ComposingSwitch>
                    <ComposingRoute
                        exact
                        path="/"
                        component={TestManager}
                    />
                    <ComposingRoute
                        path="/overview"
                        component={OverView}
                    />
                    <ComposingRoute
                        path="/test"
                        component={TestManager}
                    />
                    <ComposingRoute
                        path="/sign_in"
                        component={SignInPage}
                    />
                </ComposingSwitch>
            </Root>
        </ErrorListener>
    </BrowserRouter>
