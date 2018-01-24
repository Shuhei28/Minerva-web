import React       from "react"
import config      from "minerva-common/config"
import createToken from "minerva-common/api/auth/createToken"
import deleteToken from "minerva-common/api/auth/deleteToken"
import apply       from "minerva/apply"

export default class extends React.Component {
    componentWillMount() {
        this.setState({
            authenticationInformation: undefined,
            subscribers              : []
        })
    }

    componentDidMount() {
        ;(async _ => {
            const authenticationInformation = (
                [localStorage, sessionStorage]
                    .map(x => JSON.parse(x.getItem("authentication-information-v1")))
                    .find(x => x)
            )

            this.setState({
                authenticationInformation
            })
        })()
    }

    render() {
        const {
            onError,
            render,
            ...props
        } = this.props

        return render({
            authenticationApi: {
                create: async ({
                    staySignedIn,
                    email,
                    password
                }) => {
                    try {
                        const authenticationInformation = await createToken({
                            apiHost: config["minerva_api_host"],
                            email,
                            password
                        })

                        const storage = staySignedIn ? localStorage : sessionStorage
                        
                        storage.setItem(
                            "authentication-information-v1",
                            JSON.stringify({
                                token    : authenticationInformation.token,
                                tokenType: authenticationInformation.tokenType,
                                userId   : authenticationInformation.userId
                            })
                        )

                        this.setState({
                            authenticationInformation
                        })

                        for (let f of this.state.subscribers)
                            f(authenticationInformation)
                    } catch (e) {
                        onError(e)
                    }
                },
                delete: _ => new Promise(async resolve => {
                    try {
                        const authenticationInformation = await deleteToken({
                            apiHost  : config["minerva_api_host"],
                            token    : this.state.authenticationInformation.token,
                            tokenType: this.state.authenticationInformation.tokenType
                        })

                        [localStorage, sessionStorage]
                            .map(x => x.removeItem("authentication-information-v1"))

                        this.setState({
                            authenticationInformation: undefined
                        })

                        for (let f of this.state.subscribers)
                            f(undefined)
                    } catch (e) {
                        onError(e)
                    }
                    
                }),
                read: _ => this.state.authenticationInformation,
                subscribe: f => new Promise(resolve =>
                    this.setState(
                        {
                            subscribers: this.state.subscribers.concat(f)
                        },
                        _ => resolve(f)
                    )
                ),
                unsubscribe: certificate => new Promise(resolve => {
                    let i = this.state.subscribers.findIndex(certificate)

                    if (i >= 0)
                        this.setState(
                            {
                                subscribers: this.state.subscribers.slice(0, i).concat(
                                    this.state.subscribers.slice(i)
                                )
                            },
                            resolve
                        )
                    else
                        resolve()
                })
            },
            onError,
            ...props
        })
    }
}
