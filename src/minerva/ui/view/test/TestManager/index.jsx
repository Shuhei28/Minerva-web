import React      from "react"

import List       from "minerva-react/ui/view/List"
import ListItem　 from "minerva-react/ui/view/ListItem"

import classNames from "minerva/ui/view/test/TestList/classNames"

export default class extends React.Component {
    componentWillMount() {
        this.setState(
            {
            }
        )
    }

    componentDidMount() {
        (async _ => {

            let {
                testApi: {
                    read
                }
            } = this.props

            await read()
        })()
    }

    render() {

        return (
            <div
                className={classNames.Host}
            >
                <div>
                    <List>
                        <ListItem>test1</ListItem>
                        <ListItem>test2</ListItem>
                        <ListItem>test3</ListItem>
                        <ListItem>test4</ListItem>
                    </List>
                </div>
                <span>abc</span>
            </div>
        )
    }
}