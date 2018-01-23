import React       from "react"
import ReactDOM    from "react-dom"

import classNames  from "minerva-react/ui/effect/Acrylic/classNames"

export default ({
    backgroundColor = "rgba(255, 255, 255, 0.2)",
    component       = "div",
    Component       = component,
    children,
    className,
    ...props
}) => ([
    <Component
        className={
            [
                className,
                classNames.Host
            ].join(" ")
        }
        {...props}
    >
        {children}
        <div
            className={classNames.Filter}
            style={{
                backgroundColor
            }}
        ></div>
    </Component>
])