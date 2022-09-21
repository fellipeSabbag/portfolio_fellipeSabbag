
const canva = document.querySelector(".container")
const bloco = document.querySelectorAll(".box")
const victoryMsg = document.querySelector(".victory-alert")
const o = document.querySelectorAll(".O")
const x = document.querySelectorAll(".X")
const board = ['','','','','','','','','']
var Xturn = true

const winPossibilities = [ 
    ["0", "1", "2"],
    ["3","4" ,"5" ],
    ["6", "7", "8"],
    ["0", "3", "6"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["0", "4", "8"],
    ["2", "4", "6"],
]


   function checkWin (player) { 
        winPossibilities.forEach ( (possibility) => {
            if (board[possibility[0]] == player && board[possibility[1]] == player && board[possibility[2]] == player ){
                if (player == "X") {
                    victoryMsg.style.backgroundColor = "#AA0000";
                }
                victoryMsg.innerText = `Player "${player}" won`
                victoryMsg.style.visibility = "visible"
                var button = document.createElement("button");
                victoryMsg.appendChild(button)           
                button.innerHTML = '<button class="restart-btn" onclick="window.location.reload()">Restart &#8635</button>';
            }
        })
    }

    bloco.forEach( (elemento) => {
        elemento.addEventListener ("click",(evento) =>{
            
            if (Xturn) {
                evento.target.appendChild(document.createTextNode("X"))
                elemento.classList.add("X")
                board[evento.target.dataset.box]= "X"
                checkWin ("X") 
                
            } else {
                evento.target.appendChild(document.createTextNode("O"))
                elemento.classList.add("O")
                board[evento.target.dataset.box]= "O"
                checkWin ("O") 
            }   Xturn = !Xturn  
        },{ once: true })
    })


