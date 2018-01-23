import React      from "react"
import List       from "minerva-react/ui/view/List"
import Shadow     from "minerva-react/ui/effect/Shadow"

import classNames from "minerva/ui/view/test/TestList/classNames"

export default ({
    className,
    ...props
}) =>
    <Shadow
        component="ul"
        className={[className, classNames.Host].join(" ")}
        {...props}
    />