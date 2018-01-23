import React      from "react"
import Shadow     from "minerva-react/ui/effect/Shadow"

import classNames from "minerva-react/ui/view/Toolbar/classNames"

export default ({
    className,
    ...props
}) =>
    <Shadow
        blur="4"
        className={[className, classNames.Host].join(" ")}
        component="header"
        offset="1"
        depth="0.5"
        spread="2"
        {...props}
    />
