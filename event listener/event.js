const btn = document.querySelector('.btn')
console.log(btn)

// click
btn.addEventListener('mouseover', () => {
    btn.innerHTML = "mouseover"
})

btn.addEventListener('mouseout', () => {
    btn.innerHTML = "mouseout"
})