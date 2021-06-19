const seat = document.createElement("div");
seat.className = "seat";

const container = document.querySelector(".bottom");
const booked = document.querySelector(".booked");
const remaining = document.querySelector(".remaining");

var bcount = 0;
var rcount = 100; // here add the number of seats you want

const number = rcount;

remaining.innerHTML = ` ${rcount}`;

// add seats element number of time
for (let i = 0; i < number; i++) {
    container.appendChild(seat.cloneNode(true));
}

// click event listener
document.addEventListener("click", (e) => {
    // check if the clicked element is a seat
    if (e.target.classList.contains("seat")) {
        // adding a class named occupied
        console.log(e.target.classList.toggle("occupied"));

        // check if the seat is occupied and add or subtract respectively
        if (e.target.classList.contains("occupied")) {
            bcount++;
            rcount--;
        } else {
            bcount--;
            rcount++;
        }

        // update the count in the html
        booked.innerHTML = ` ${bcount}`;
        remaining.innerHTML = ` ${rcount}`;
    }
});