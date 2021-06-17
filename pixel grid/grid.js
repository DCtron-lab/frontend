const division = document.querySelectorAll(".item");
console.log(division);

const color = [
    103,
    123,
    143,
    163,
    183,
    203,
    223,
    243,
    263,
    283,
    104,
    105,
    106,
    127,
    148,
    169,
    189,
    209,
    229,
    248,
    267,
    286,
    285,
    284,
    118,
    117,
    116,
    115,
    134,
    153,
    172,
    192,
    212,
    232,
    253,
    274,
    295,
    296,
    297,
    298
];
Array.from(division).forEach((div, i) => {
    if (color.includes(i + 1)) div.style.background = "white"
})

Array.from(division).forEach((div, i) => {

    div.addEventListener('click', () => {
        div.style.background = (div.style.background == "white" ? "red" : "white")
    })
})