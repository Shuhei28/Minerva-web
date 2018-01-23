import React       from "react"

import TextField   from "minerva-react/ui/view/TextField"

import classNames from "minerva/ui/view/OverView/classNames"

export default class extends React.Component {
    componentWillMount() {
        this.setState(
            {
            }
        )
    }

    componentDidMount() {
    }

    render() {

        return (
            <div
                className={classNames.Host}
            >
                <div>
                    <TextField
                        name="quiz"
                        labelText="クイズ"
                        autoFocus={true}
                        required
                    />
                    
                </div>
                <span>abc</span>
            </div>
        )
    }
}