let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn =document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let Draw = document.querySelector("#draw");

let turnO =true; // playerX , playerO
let count= 0;
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    count = 0;
}

boxes.forEach((box) => {
    box.addEventListener("click" ,()=>{
    if(turnO){   // playerO
        box.innerText = "O";
        turnO = false;
    }else{   //playerX
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    count++;

    checkWinner();
    checkDraw();
    
    });
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner)=>{
    msg.innerText = `congratulation,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    count = 0;
}

const checkWinner = () =>{
    for (let pattern of winPatterns){

let pos1val = boxes[pattern[0]].innerText;
let pos2val = boxes[pattern[1]].innerText;
let pos3val = boxes[pattern[2]].innerText;

if(pos1val != "" && pos2val != "" && pos3val != ""){
    if(pos1val === pos2val && pos2val === pos3val){
        showWinner(pos1val);
    }
}
}
};
let winner = checkWinner();
const showDraw = ()=>{
    msg.innerText = `Try another time , It is a Draw`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkDraw =()=>{
    if(count === 9 && !(winner)){
        showDraw();
        count = 0;
    }
}

newGamebtn.addEventListener("click" ,resetGame);
resetbtn.addEventListener("click",resetGame);
