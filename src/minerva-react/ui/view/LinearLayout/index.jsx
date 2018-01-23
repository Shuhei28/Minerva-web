import React from "react"

import classNames from "minerva-react/ui/view/LinearLayout/classNames"

export default ({
    className,
    component = "div",
    Compoenent = component,
    orientation = "vertical",
    ...props
}) =>
    <Compoenent
        className={
            [
                className,
                classNames.Host,
                orientation == "vertical"   ? classNames.Vertical
              : orientation == "horizontal" ? classNames.Horizontal
              :                               undefined
            ].join(" ")
        }
        {...props}
    />
