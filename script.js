const button1 = document.getElementById("infoButton");
const button2 = document.getElementById("play");
const button3 = document.getElementById("reset");
const wText = document.getElementById("winnerText");
const infoText = document.getElementById("infoText");
const scoreText = document.getElementById("score");
const tdElement = document.querySelectorAll(".cell");
const descriptionGame= document.getElementById("descriptionGame");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const idElementArray = Array.from(tdElement);
let Player1Score = 0;
let Player2Score = 0;
let whosTurn = 1;
let gameMode = true;

function resetGame(){
    Player1Score=0;
    Player2Score=0;
    p1.innerHTML = `Player 1 score: ${Player1Score} `;
    p2.innerHTML = `Player 2 score: ${Player2Score} `;
    whosTurn = 1;
    gameMode = true;
    clearCells();
}
function clearCells(){
    idElementArray.forEach((tdElement, index) =>{
      tdElement.innerHTML = '';
      wText.classList.add('hide');
      gameMode=true;
      tdElement.classList.remove('selectedBy1');
      tdElement.classList.remove('selectedBy2');
    });
}
function winnerText(){
    wText.innerHTML(`<p>Well done player one got a point. Want to play next?</p>`)
    wText.classList.add('hide');
}
function unhide(name){
    name.classList.toggle('hide');
}
button1.addEventListener("click",() =>  {
    unhide(infoText);
    descriptionGame.classList.add('hide');
    scoreText.classList.add('hide');
    if(infoText.classList.contains('hide')){
        scoreText.classList.remove('hide');
    }
})
button2.addEventListener("click",() => startGame());
function isWinner(){
    if(tdElement[0].classList.contains('selectedBy1')&&tdElement[1].classList.contains('selectedBy1')&&tdElement[2].classList.contains('selectedBy1')// top row left to right 1
        ||tdElement[3].classList.contains('selectedBy1')&&tdElement[4].classList.contains('selectedBy1')&&tdElement[5].classList.contains('selectedBy1') //middle row left to right 2
        ||tdElement[6].classList.contains('selectedBy1')&&tdElement[7].classList.contains('selectedBy1')&&tdElement[8].classList.contains('selectedBy1') //bottom row left to right 3
        ||tdElement[0].classList.contains('selectedBy1')&&tdElement[3].classList.contains('selectedBy1')&&tdElement[6].classList.contains('selectedBy1')// top to bototm first row 4
        ||tdElement[1].classList.contains('selectedBy1')&&tdElement[4].classList.contains('selectedBy1')&&tdElement[7].classList.contains('selectedBy1')// top to bototm second row 5
        ||tdElement[2].classList.contains('selectedBy1')&&tdElement[5].classList.contains('selectedBy1')&&tdElement[8].classList.contains('selectedBy1')// top to bototm third row 6
        ||tdElement[0].classList.contains('selectedBy1')&&tdElement[4].classList.contains('selectedBy1')&&tdElement[8].classList.contains('selectedBy1')// top left  to bototm diagonally 7
        ||tdElement[2].classList.contains('selectedBy1')&&tdElement[4].classList.contains('selectedBy1')&&tdElement[6].classList.contains('selectedBy1'))//top  right to bototm diagonally 7
        {
        Player1Score ++;
        p1.innerHTML = `Player 1 score: ${Player1Score} `;
        idElementArray.forEach((tdElement, index) =>{
            gameMode = false;
            whosTurn = 1;
            wText.innerHTML = `<p>Well Done Player <span style="color:#FFC0CB">&#10084;</span> got a point. Do you want play next?</p><button id='buttonNext' class='nextStyle'>Next</button>`;
            const buttonNext = document.getElementById("buttonNext")
            wText.classList.remove('hide');
            buttonNext.addEventListener("click",() => clearCells());
        });
        }
    if(tdElement[0].classList.contains('selectedBy2')&&tdElement[1].classList.contains('selectedBy2')&&tdElement[2].classList.contains('selectedBy2')// top row left to right
    ||tdElement[3].classList.contains('selectedBy2')&&tdElement[4].classList.contains('selectedBy2')&&tdElement[5].classList.contains('selectedBy2') //middle row left to right
    ||tdElement[6].classList.contains('selectedBy2')&&tdElement[7].classList.contains('selectedBy2')&&tdElement[8].classList.contains('selectedBy2') //bottom row left to right
    ||tdElement[0].classList.contains('selectedBy2')&&tdElement[3].classList.contains('selectedBy2')&&tdElement[6].classList.contains('selectedBy2')// top to bototm first row 
    ||tdElement[1].classList.contains('selectedBy2')&&tdElement[4].classList.contains('selectedBy2')&&tdElement[7].classList.contains('selectedBy2')// top to bototm second row 
    ||tdElement[2].classList.contains('selectedBy2')&&tdElement[5].classList.contains('selectedBy2')&&tdElement[8].classList.contains('selectedBy2')// top to bototm third row 
    ||tdElement[0].classList.contains('selectedBy2')&&tdElement[4].classList.contains('selectedBy2')&&tdElement[8].classList.contains('selectedBy2')// top to bototm diagonally
    ||tdElement[2].classList.contains('selectedBy2')&&tdElement[4].classList.contains('selectedBy2')&&tdElement[6].classList.contains('selectedBy2'))//top  right to bototm diagonally 7
    {
        Player2Score ++;
        p2.innerHTML = `Player 2 score: ${Player2Score} `;
        idElementArray.forEach((tdElement, index) =>{

            gameMode = false;
            whosTurn = 1;
            wText.innerHTML = `<p>Well Done Player <span style="color:#00C5FF">&#9587;</span> got a point. Do you want play next?</p><button id='buttonNext' class='nextStyle'>Next</button>`;
            const buttonNext = document.getElementById("buttonNext")
            wText.classList.remove('hide');
            buttonNext.addEventListener("click",() => clearCells());
        });
    }
}
function startGame(){
    scoreText.classList.remove('hide');
    infoText.classList.add('hide');
    descriptionGame.classList.add('hide');
    
        idElementArray.forEach((tdElement, index) => {
        tdElement.addEventListener('click', () => {
            if(gameMode ==true){
                if(whosTurn==1){
                tdElement.innerHTML = '<span style="color:#FFC0CB">&#10084;</span>';
                whosTurn =2;
                tdElement.classList.add('selectedBy1');
                tdElement.classList.remove('selectedBy2');
                isWinner();
                
                }else if(whosTurn==2){
                
                tdElement.innerHTML = '<span style="color:#00C5FF">&#9587</span>';
                whosTurn =1;
                tdElement.classList.add('selectedBy2');
                tdElement.classList.remove('selectedBy1');
                isWinner();
                
                }
            console.log(whosTurn);
        }else{
            console.log("game is off");
        }});
        });
    }
button3.addEventListener("click",() => resetGame());