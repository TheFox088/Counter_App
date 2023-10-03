const mainTitle = document.querySelector("#h1")
let curValue = 0; 
const btnincreas = document.querySelector("#increas");
const btnreset = document.querySelector("#reset");
const btndecreas = document.querySelector("#decreas");

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