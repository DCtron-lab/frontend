import { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }) => {
    const [itemCount, setItemCount] = useState(0);
    return ( <
        div className = "TodoList" > {
            itemCount ? ( <
                div className = "alert white" > Start Adding Item < /div>
            ) : (
                todos.map((todo, index) => {
                    return <TodoItem ca = { todo[0] }
                    va = { todo[1] }
                    key = { index }
                    />;
                })
            )
        } <
        /div>
    );
};

export default TodoList;