import React        from "react"
import { Redirect } from "react-router"

import Toolbar      from "minerva-react/ui/view/Toolbar"
import ToolbarTitle from "minerva-react/ui/view/ToolbarTitle"

import classNames   from "minerva/ui/view/MainLayout/classNames"

export default class extends React.Component {

    componentWillMount() {
        this.setState({
        })
    }

    componentDidMount() {
    }

    render() {
        const {
            authenticationApi,
            children,
            location,
            ...props
        } = this.props;

        console.log(authenticationApi.read())

        if (authenticationApi.read()) {
            // console.log("token existed")
            if (/\/sign_in/.test(location.pathname))
                return (
                    <Redirect
                        to={(location.state && location.state.from) || "/"}
                    />
                )
        } else {
            // console.log("token not existed", /\/sign_in/.test(location.pathname))
            if (/\/sign_in/.test(location.pathname))
                return React.cloneElement(
                    children,
                    {
                        authenticationApi,
                        location,
                        ...props,
                        ...children.props
                    }
                )
            else
                return (
                    <Redirect
                        to={{
                            pathname: "/sign_in",
                            state: {
                                from: location
                            }
                        }}
                    />
                )
        }

        return (
            <div
                className={classNames.Host}
            >
                <Toolbar className={classNames.Toolbar}>
                    <ToolbarTitle className={classNames.ToolbarTitle}>Minerva</ToolbarTitle>
                </Toolbar>
                {[<main
                        className={classNames.Main}
                        key={
                            // TODO 
                            "/users/"
                            // + getCurrentUserId()
                            // + "/organizations/"
                            // + getCurrentOrganizationId()
                        }
                    >
                        {React.cloneElement(
                            children,
                            {
                                authenticationApi,
                                location,
                                ...props,
                                ...children.props
                            }
                        )}
                    </main>]}
            </div>
        )
    }
};
