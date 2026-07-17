let randomBtn = document.querySelector('.randomBtn');
let applyBtn = document.querySelector('.applyBtn');
let resetBtn = document.querySelector('.resetBtn');
let currentColorValue = document.querySelector('.currentColorValue');
let colorInput = document.querySelector('#colorInput');
let body = document.querySelector('body')

//......Random Color........
const colorArray = ["red","yellow","orange",
    "green","blue","aqua",
    "violet","purple","black","white","skyblue","dark"];
    const generateRandomColor = ()=>{
        const randomNumber = Math.floor(Math.random()*colorArray.length)
        return colorArray[randomNumber]
    }
    generateRandomColor();

//......color change........ 
const changeColor = (color)=>{
    body.style.backgroundColor = color
    currentColorValue.innerText = color
}

const handleRandomBtnClick = () =>{
    generateRandomColor();
    let colors = generateRandomColor();
    changeColor(colors);
}
const handleApplyBtnClick = ()=>{
    const color = colorInput.value;
    changeColor(color);
}
const handleResetBtnClick = (color)=>{
    body.style.backgroundColor = 'white'
    currentColorValue.innerText = 'white'
}

randomBtn.addEventListener('click',handleRandomBtnClick)
applyBtn.addEventListener('click',handleApplyBtnClick)
resetBtn.addEventListener('click',handleResetBtnClick)
// randomBtn.addEventListener('click',changeColor)
changeColor('color');

