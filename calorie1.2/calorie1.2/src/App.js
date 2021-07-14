import List from "./components/calorie";
import "./App.css";

function App() {
    const data = [
        { name: "Pizza", cal: 150 },
        { name: "Burger", cal: 135 },
        { name: "Sandwich", cal: 100 },
        { name: "Samosa", cal: 95 },
        { name: "Momos", cal: 105 },
        { name: "Fries", cal: 120 },
    ];
    return ( <
        div className = "container" >
        <
        div className = "calorie-list" >
        <
        h1 className = "list" > Calorie - List < /h1> <
        div className = "cal-list" >
        <
        List data = { data }
        /> < /
        div > <
        /div> < /
        div >
    );
}

export default App;