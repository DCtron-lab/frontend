export default function GetInstructions({ inst }) {
    return ( <
        div className = "instruction" >
        <
        h2 > Instruction < /h2> <
        ul > {
            Object.values(inst).map((item, index) => {
                return <li key = { index } > { item } < /li>;
            })
        } <
        /ul> < /
        div >
    );
}