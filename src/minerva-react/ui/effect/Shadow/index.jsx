import React      from "react"

import classNames from "minerva-react/ui/effect/Shadow/classNames"

let toBoxShadow = ({
    blur,
    depth,
    offset,
    position,
    spread
}) =>
    [
        position == "left"  ? -offset + "px"
      : position == "right" ? offset + "px"
      :                       "0",
        position == "top"    ? -offset + "px"
      : position == "bottom" ? offset + "px"
      :                        "0",
        blur + "px",
        spread + "px",
        "rgba(0, 0, 0, " + depth + ")"
    ].join(" ")

export default ({
    blur = "6",    
    className,
    component = "div",
    Component = component,
    depth = "0.3",
    offset = "2",
    position = "bottom",
    spread= "0",
    style,
    ...props
}) =>
    <Component
        className={[className, classNames.Host].join(" ")}
        style={{
            boxShadow: toBoxShadow({
                blur     : blur,
                depth    : depth,
                offset: offset,
                position : position,
                spread   : spread
            }),
            zIndex: offset,
            ...style
        }}
        {...props}
    />
