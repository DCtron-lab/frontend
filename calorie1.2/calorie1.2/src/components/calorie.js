const List = ({ data }) => {
    console.log(data);
    return ( <
        >
        {
            data.map(({ name, cal }, index) => ( <
                div key = { index }
                className = "cards"
                style = {
                    { color: index % 2 === 0 ? "#000" : "white" }
                } >
                <
                h2 > { name } < /h2> <
                hr / > <
                p > You have consumed { cal } { " " }
                calories! < /p> < /
                div >
            ))
        } <
        />
    );
};

export default List;