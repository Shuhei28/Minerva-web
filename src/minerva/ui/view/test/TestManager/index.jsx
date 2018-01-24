import React           from "react"
import toQuery         from "minerva-common/util/toQuery"
import TestList        from "minerva/ui/view/test/TestList"
import TestListItem    from "minerva/ui/view/test/TestListItem"
import List            from "minerva-react/ui/view/List"
import ListItem        from "minerva-react/ui/view/ListItem"

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

            const {
                location,
                onError,
                testApi,
                testTagApi
            } = this.props

            try {
                this.setState({
                    tests   : await testApi.read(),
                    testTags: await testTagApi.read({
                        query: toQuery(location)
                    })
                })

            } catch (e) {
                console.log(e)
                onError(e)
            }
        })()
    }

    render() {

        const {
            className,
            location
        } = this.props

        return (
            <div
                className={[className, classNames.Host].join(" ")}
            >
                <List
                    className={classNames.TestTagList}
                >
                    {this.state.testTags && this.state.testTags.map(x =>
                        <ListItem
                            key={x.id}
                            location={location}
                            to={"/test?tag=" + x.name}
                        >
                            {x.name}
                        </ListItem>
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
            </div>
        )
    }
}