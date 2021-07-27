const AddPanel = ({ handleAddTodo, cals, setCals, val, setVal }) => {
    return ( <
        form className = "panel"
        onSubmit = { handleAddTodo } >
        <
        input type = "text"
        value = { cals }
        onChange = {
            (e) => setCals(e.target.value) }
        placeholder = "Enter Food Name"
        className = "inputOne" /
        >
        <
        input type = "number"
        value = { val }
        onChange = {
            (e) => setVal(e.target.value) }
        placeholder = "Enter Calori Amount"
        className = "inputTwo" /
        >
        <
        button className = "BtnOne" > Add < /button> <
        /form>
    );
};

export default AddPanel;