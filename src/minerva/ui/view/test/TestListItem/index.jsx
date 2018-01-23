import React      from "react"
import ListItem   from "minerva-react/ui/view/ListItem"

import classNames from "minerva/ui/view/test/TestListItem/classNames"

export default ({
    className,
    test
}) => 
    <ListItem
        className={[className, classNames.Host].join(" ")}
    >
    </ListItem>