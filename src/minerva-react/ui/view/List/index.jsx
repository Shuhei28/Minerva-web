import React        from "react"
import LinearLayout from "minerva-react/ui/view/LinearLayout"

import classNames   from "minerva-react/ui/view/List/classNames"

export default ({
    children,
    className,
    location,
    orientation = "vertical",
    ...props
}) =>
    <LinearLayout
        className={
            [
                className,
                classNames.Host,
                orientation == "vertical"   ? classNames.Vertical
              : orientation == "horizontal" ? classNames.Horizontal
              :                               undefined
            ].join(" ")
        }
        component="ul"
        orientation={orientation}
        {...props}
    >
        {React.Children.toArray(children).map(
            x => React.cloneElement(
                x,
                {
                    location: location
                }
            )
        )}
    </LinearLayout>
