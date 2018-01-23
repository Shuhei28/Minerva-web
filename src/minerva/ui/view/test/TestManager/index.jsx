import React      from "react"

import List       from "minerva-react/ui/view/List"
import ListItem   from "minerva-react/ui/view/ListItem"

import classNames from "minerva/ui/view/test/TestList/classNames"

export default class extends React.Component {
    componentWillMount() {
        this.setState({
            tests: [],
            testTags: []
        })
    }

    componentDidMount() {
        (async _ => {

            let {
                onError,
                testApi,
                testTagApi
            } = this.props

            try {
                const tests = await testApi.read()
                const testTags = await testTagApi.read()

                console.log(tests, testTags)

                this.setState({
                    tests,
                    testTags
                })

            } catch (e) {
                console.log(e)
                onError(e)
            }


        })()
    }

    render() {

        console.log(this.state);
        return (
            <div
                className={classNames.Host}
            >
                <div>
                    <List>
                        {this.state.tests && this.state.tests.map(x =>
                            <ListItem key={x.id}>{x.title}</ListItem>
                        )}
                    </List>
                    <List>
                        {this.state.testTags && this.state.testTags.map(x =>
                            <ListItem key={x.id}>{x.title}</ListItem>
                        )}
                    </List>
                </div>
                <span>abc</span>
            </div>
        )
    }
}