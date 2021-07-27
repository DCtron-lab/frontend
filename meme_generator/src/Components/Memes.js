import { useState } from 'react'

const Memes = ({ memes, setMeme }) => {
    return ( <
        div className = "Memes" > {
            memes.map((el, index) => {
                return ( <
                    div key = { index }
                    className = "card"
                    onClick = {
                        () => setMeme(el)
                    } >
                    <
                    img src = { el.url }
                    alt = { el.name }
                    id = { el.id }
                    /> < /
                    div >
                );
            })
        } <
        /div>
    );
};

const Meme = ({ meme, setMeme }) => {
    const [Form, setForm] = useState({
        template_id: meme.id,
        username: 'ProgrammerArnab',
        password: 'PaSwOrD@123',
        boxes: []
    })
    const [img, setImg] = useState(meme.url)
        // const [isError, setIsError] = useState(false)

    const generateMemeRequest = async() => {
        let url = `https://api.imgflip.com/caption_image?template_id=${Form.template_id}&username=${Form.username}&password=${Form.password}`
        let boxes = Form.boxes
        console.log(boxes);
        boxes.map((box, num) => {
            return url += `&boxes[${num}][text]=${box.text}`
        })

        let response = await fetch(url)
        let data = await response.json()
        console.log(data);
        // setIsError(data.success)
        setImg(data.data.url);
    }
    return ( <
        div className = "memeCard" >
        <
        h1 > { meme.name } < /h1> <
        div >
        <
        a href = { img }
        download = { img.replace('https://i.imgflip.com/', '') } >
        <
        img src = { img }
        alt = { meme.name }
        style = {
            { border: "5px solid black" }
        }
        /> < /
        a > {
            [...Array(meme.box_count)].map((el, index) => ( <
                input type = "text"
                placeholder = { "Enter Text " + (index + 1) }
                key = { index }
                onChange = {
                    (e) => {
                        const newBox = Form.boxes;
                        newBox[index] = { text: e.target.value };
                        setForm({...Form, boxes: newBox });
                        console.log(Form);
                    }
                }
                />
            ))
        } <
        /div>

        <
        div className = "memeActionPanel" >
        <
        button onClick = { generateMemeRequest } > Generate < /button> <
        button onClick = {
            () => {
                setMeme(false)
                    // setIsError(false)
            }
        } > Select template < /button>

        <
        /div> < /
        div >
    )
}

export {
    Memes,
    Meme
}
// id name url width height box_count