function Card({ title, calories, index, setCards, cards }) {
    return ( <
        div className = "card" >
        <
        h2 > { title || 'My Card' } { ' ' } <
        button onClick = {
            () => {
                const newCards = cards.filter((el, i) => i != index);
                setCards(newCards);
            }
        } >
        Delete <
        /button> < /
        h2 > <
        p > you have consumed { calories || 56 } { " " }
        cals today < /p> < /
        div >
    );
}
export default function CalorieCard({ menu, setCards }) {
    return ( <
        div >
        <
        h2 >
        Calorie Read Only < span class = "cardCount" > { menu.length } < /span> < /
        h2 > <
        div className = "CardContainer" > {
            menu.length != 0 ? (
                menu.map((item, index) => {
                    return ( <
                        Card title = { item[0] }
                        calories = { item[1] }
                        key = { index }
                        index = { index }
                        setCards = { setCards }
                        cards = { menu }
                        />
                    );
                })
            ) : ( <
                div class = "noItem" > No Element < /div>
            )
        } <
        /div> < /
        div >
    );
}