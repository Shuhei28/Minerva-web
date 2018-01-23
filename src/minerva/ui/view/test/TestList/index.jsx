import React      from "react"
import Acylic     from "minerva-react/ui/effect/Acrylic"
import Owl        from "minerva/ui/svg/Owl"

import ReactDom   from "react-dom"
import TextField  from "minerva-react/ui/view/TextField"

import List       from "minerva-react/ui/view/List"

import classNames from "minerva/ui/view/test/TestList/classNames"

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
            </div>
        )
    }
}