var col1 = document.getElementsByClassName("color1")[0];
var col2 = document.getElementsByClassName("color2")[0];
var h3 = document.getElementsByTagName("h3")[0];
var body = document.getElementById("gradient");

col1.addEventListener("input", setGradient);
col2.addEventListener("input",setGradient);

function setGradient(){
    body.style.background= "linear-gradient(to right, "
    +col1.value
    +", "
    +col2.value
    +")";
    h3.textContent=body.style.background;
}