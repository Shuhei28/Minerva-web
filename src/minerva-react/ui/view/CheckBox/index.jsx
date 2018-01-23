import React from "react"

import classNames from "minerva-react/ui/view/CheckBox/classNames"

export default ({
    className,
    component = "span",
    Component = component,
    selected = false,
    ...props
}) =>
    <Component
        className={
            [
                className,
                classNames.Host,
                selected && classNames.Selected
            ].join(" ")
        }
        {...props}
    />
