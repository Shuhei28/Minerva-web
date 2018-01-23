import React           from "react"
import List            from "minerva-react/ui/view/List"
import ListItem        from "minerva-react/ui/view/ListItem"
import TestList        from "minerva/ui/view/test/TestList"
import TestListItem    from "minerva/ui/view/test/TestListItem"

import classNames      from "minerva/ui/view/test/TestManager/classNames"

export default class extends React.Component {
    componentWillMount() {
        this.setState({
            tests   : [],
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
                this.setState({
                    tests   : await testApi.read(),
                    testTags: await testTagApi.read()
                })

            } catch (e) {
                console.log(e)
                onError(e)
            }

            console.log(this.state.tests)
        })()
    }

    render() {

        console.log(this.state.tests)

        const {
            className
        } = this.props

        return (
            <div
                className={[className, classNames.Host].join(" ")}
            >
                <List>
                    {this.state.testTags && this.state.testTags.map(x =>
                        <ListItem key={x.id}>{x.name}</ListItem>
                    )}
                </List>
                <TestList>
                    {this.state.tests && this.state.tests.map(x =>
                        <TestListItem 
                            key={x.id}
                            test={x}
                        />
                    )}
                </TestList>
                <span>abc</span>
            </div>
        )
    }
}