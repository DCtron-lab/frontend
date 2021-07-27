import { useState } from "react";

const TodoItem = ({ ca, va }) => {
    const [switchDisplay, setDisplay] = useState(true);
    const [cals, setCals] = useState(ca);
    const [val, setVal] = useState(va);
    const [isDeleted, setDeleted] = useState(true);
    return isDeleted ? ( <
        div className = "list" > {
            switchDisplay ? ( <
                >
                <
                div className = "title" >
                <
                span > { cals } < /span> < /
                div > <
                div className = "desc" > {!isNaN(val) ? ( <
                        span > You have consumed { val } { " " }
                        calories < /span>
                    ) : ( <
                        span > Expected a Number in Calori < /span>
                    )
                } <
                /div> < / >
            ) : ( <
                >
                <
                input value = { cals }
                onChange = {
                    (e) => setCals(e.target.value)
                }
                /> <
                input value = { val }
                onChange = {
                    (e) => setVal(e.target.value)
                }
                /> < / >
            )
        }

        <
        div className = "actionPanel" >
        <
        button onClick = {
            () => {
                setDeleted(false);
            }
        } >
        Delete <
        /button> <
        button onClick = {
            () => {
                console.log(switchDisplay);
                setDisplay(switchDisplay ? false : true);
            }
        } > { switchDisplay ? "Edit" : "Done" } <
        /button> < /
        div > <
        /div>
    ) : null;
};

export default TodoItem;