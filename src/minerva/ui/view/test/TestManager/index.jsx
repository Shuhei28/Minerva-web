import React           from "react"
import List            from "minerva-react/ui/view/List"
import ListItem        from "minerva-react/ui/view/ListItem"
import TestList        from "minerva/ui/view/test/TestList"
import TestListItem    from "minerva/ui/view/test/TestListItem"

import classNames      from "minerva/ui/view/test/TestManager/classNames"

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

        const {
            className
        } = this.props

        return (
            <div
                className={[className, classNames.Host].join(" ")}
            >
                <List>
                    {this.state.tests && this.state.tests.map(x =>
                        <ListItem key={x.id}>{x.title}</ListItem>
                    )}
                </List>
                <TestList>
                    {this.state.testTags && this.state.testTags.map(x =>
                        <TestListItem key={x.id}>{x.title}</TestListItem>
                    )}
                </TestList>
                <span>abc</span>
            </div>
        )
    }
}