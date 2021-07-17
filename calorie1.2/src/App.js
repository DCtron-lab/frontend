import "./App.css";
import GetInstructions from './components/Instructions';
import CalorieCard from './components/CalorieCard';
import { useState } from 'react';
const instructions = [
    'build a container',
    'create a seperate function and use it as a component',
    'pass props "calory and food" and call it to main component'
];

const menuItems = [
    ['Pizza', 150],
    ['Burger', 135],
    ['Coke', 500],
    ['Sandwich', 100],
    ['Samosa', 95],
    ['Momos', 105],
    ['Fries', 120]
];

export default function App() {
    const [menu, setMenu] = useState(menuItems);
    return ( <
        div className = "App" >
        <
        GetInstructions inst = { instructions }
        /> <
        CalorieCard menu = { menu }
        setCards = { setMenu }
        /> < /
        div >
    );
}