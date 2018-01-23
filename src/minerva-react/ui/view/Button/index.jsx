import React  from "react"
import Ripple from "minerva-react/ui/effect/Ripple"

import classNames from "minerva-react/ui/view/Button/classNames"

export default ({
    className,
    color = "Blue",
    component = "span",
    Component = component,
    dense,
    disabled,
    type = "flat",
    buttonType = type,
    ...props
}) =>
    <Ripple
        className={
            [
                className,
                classNames.Host,
                disabled ? classNames.Disabled
              :            undefined,
                dense ? classNames.Dense
              :         "",
                buttonType == "flat"   ? classNames.Flat
              : buttonType == "raised" ? classNames.Raised
              :                    undefined,
              classNames[color]
            ].join(" ")
        }
        component={Component}
        disabled={disabled}
        fixed={buttonType == "fab"}
        {...props}
    />