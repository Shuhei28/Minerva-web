import React      from "react"
import ListItem   from "minerva-react/ui/view/ListItem"

import classNames from "minerva/ui/view/test/TestListItem/classNames"

export default ({
    className,
    test,
    ...props
}) => 
    <ListItem
        className={[className, classNames.Host].join(" ")}
        {...props}
    >
        <div
            className={classNames.MainContent}
        >
            <div>{test.title}</div>
            <div>{test.description}</div>
        </div>
    </ListItem>
