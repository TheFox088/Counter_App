//bruker document.queryselector i steden for innerhtml er trygere på net siden man lager.
const mainTitle = document.querySelector("#h1")
let curValue = 0; 
const btnincreas = document.querySelector("#increas");
const btnreset = document.querySelector("#reset");
const btndecreas = document.querySelector("#decreas");

//den skal høre etter et klick nor eg tar den i bruk

btnincreas.addEventListener("click", () =>{

    curValue++;
    mainTitle.textContent = curValue;
});

btndecreas.addEventListener("click", () =>{

    curValue--;
    mainTitle.textContent = curValue;
});

btnreset.addEventListener("click", () =>{

    curValue=0;
    mainTitle.textContent = curValue;
});