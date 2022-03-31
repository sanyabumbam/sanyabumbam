const name = "Саня";
let age = 29;
let boo = true;

const head = document.querySelector(".head");
const navLinks = document.querySelectorAll("nav__link");
const testBtn = document.querySelector('#testBtn');



function sayHello() {
    let massage = "hello " + name;
    console.log(massage);
}

sayHello();

function simpleMeth(a, b) {
    let result = a + b;
    return result;
}

let sum = simpleMeth(112, 422);

console.log(sum);




window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;

    if(scrollPos > 0) {
        head.classList.add('red');
    } else {
        head.classList.remove('red');
    }
   
    console.log(scrollPos);
   
});


testBtn.addEventListener("click", function() {
    console.log('clicked');
});

for(let navItem of navLinks) {
    navItem.addEventListener("click", function() {
        console.log(navItem.text); 
    });
}
