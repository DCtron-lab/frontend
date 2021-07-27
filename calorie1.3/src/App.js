import "./App.css"
import { useState } from "react";
import AddPanel from "./Components/AddPanel"
import TodoList from "./Components/TodoList"

export default function App() {
    const [cals, setCals] = useState("");
    const [val, setVal] = useState(0);
    const [todo, setTodo] = useState([]);

    const handleAddTodo = (e) => {
        e.preventDefault();
        setTodo(() => {
            return [...todo, [cals, val]];
        });
        setCals("");
        setVal(0);
    };

    //Calculate todolist length

    return ( <
        div className = "App" >
        <
        AddPanel handleAddTodo = { handleAddTodo }
        cals = { cals }
        setCals = { setCals }
        val = { val }
        setVal = { setVal }
        /> <
        TodoList todos = { todo }
        /> < /
        div >
    );
}