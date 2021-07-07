let input_data = document.querySelector('input');
let btn = document.querySelector('.button');
let elem = document.querySelector('article');
btn.addEventListener('click', () => {
    elem.innerHTML = '';
    fetch(`https://dog.ceo/api/breed/${input_data.value}/images/random/10`)
        .then((res) => res.json())
        .then((data) => {
            getResponse(data)
        })
})

function getResponse(data) {
    if (data.status == "success") {
        data.message.forEach(element => {
            elem.innerHTML += `<img src=${element}>`
        });
    } else {
        elem.innerHTML = '<h1>Umm.. Sorry!! try typing correct dog type</h1>'
    }
}