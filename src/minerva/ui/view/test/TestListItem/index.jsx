import React      from "react"
import ListItem   from "minerva-react/ui/view/ListItem"
import classNames from "minerva/ui/view/test/TestListItem/classNames"

export default ({
    className,
    test,
    ...props
}) => 
    <ListItem
        className={[className, classNames.Host].join(" ")}
        {...props}
    >
        <div
            className={classNames.MainContent}
        >
            <div
                className={classNames.Header}
            >
                <div>{test.title}</div>
                <div>
                    {test.tags.map((x, i) => 
                        i < 5 && <div
                            className={classNames.Chip}
                            key={x}
                        >
                            {x}
                        </div>
                    )}
                </div>
            </div>
            <div>
                {test.description}
            </div>
            <div>
                <div>{test.correct_answer_rate}</div>
                <div><span>正答率</span><span>{test.quizzes.correct_answer_rate * 100}</span><span>%</span></div>
                <div><span>問題数</span><span>{test.quizzes.length}</span><span>問</span></div>
                <div><span>LIKE</span><span>{test.like}</span></div>
            </div>
        </div>
    </ListItem>
