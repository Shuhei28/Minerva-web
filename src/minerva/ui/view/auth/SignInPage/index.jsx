import React       from "react"
import Acrylic     from "minerva-react/ui/effect/Acrylic"
import Button      from "minerva-react/ui/view/Button"
import CheckBox    from "minerva-react/ui/view/CheckBox"
import TextField   from "minerva-react/ui/view/TextField"

import Owl         from "minerva/ui/svg/Owl"

import classNames  from "minerva/ui/view/auth/SignInPage/classNames"

export default class extends React.Component {
    componentWillMount() {
        this.setState(
            {
                checkBoxIsSelected: false,
                isSending         : false,
            }
        )
    }

    componentDidMount() {
    }

    render() {

        const {
            authenticationApi: {
                create
            },
            onError
        } = this.props;

        return (
            <div
                className={classNames.Host}
            >
                <h3>Minerva</h3>
                <Acrylic
                    backgroundColor="#F5F5F5"
                >
                    <form
                        autoComplete="off"
                        className={classNames.LoginForm}
                        onSubmit={async e => {
                            e.preventDefault();
                            let form = e.target;
                            try {
                                this.setState({isSending: true});
                                await create({
                                    email       : form.querySelector("*[name='email']").value,
                                    password    : form.querySelector("*[name='password']").value,
                                    staySignedIn: this.state.checkBoxIsSelected
                                })
                            } catch (e) {
                                throw e
                                console.log(e);
                                onError(e);
                                form.querySelector("*[name='password']").value = "";
                                this.setState({
                                    isSending: false
                                });
                            }
                        }}
                    >
                        <div>
                            <TextField
                                name="email"
                                labelText="メールアドレス"
                                autoFocus={true}
                                required
                            />
                            <TextField
                                name="password"
                                labelText="パスワード"
                                type="password"
                                required
                            />
                        </div>
                        <div>
                            <div
                                className={classNames.LoginKeep}
                            >
                                <CheckBox
                                    className={classNames.CheckBox}
                                    selected={this.state.checkBoxIsSelected}
                                    onClick={_ => 
                                        this.setState({checkBoxIsSelected: !this.state.checkBoxIsSelected})
                                    }
                                />
                                サインインを維持
                            </div>
                            <Button
                                buttonType="flat"
                                component="button"
                                type="submit"
                            >
                                サインイン
                            </Button>
                        </div>
                    </form>
                    <Owl
                        fill="#D84315"
                        height="180px"
                        width="180px"
                        className={classNames.OwlIcon}
                    />
                </Acrylic>
            </div>
        )
    }
};
