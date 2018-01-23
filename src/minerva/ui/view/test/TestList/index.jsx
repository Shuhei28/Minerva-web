import React      from "react"
import List       from "minerva-react/ui/view/List"

import classNames from "minerva/ui/view/test/TestList/classNames"

export default ({
    className
}) =>
    <List
        className={[className, classNames.Host].join(" ")}
    />