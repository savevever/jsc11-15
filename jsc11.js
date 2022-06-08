const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randonnumber = getrandomnumber();
    document.body.style.backgroundColor = colors[randonnumber] ;
    color.textContent = colors[randonnumber] ;
});

function getrandomnumber(){
    return Math.floor(Math.random()*colors.length);
}