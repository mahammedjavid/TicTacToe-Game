let cells = document.querySelectorAll('.cell')
let message = document.querySelector('.message')
let reseting = document.querySelector('.reset')
let messageTwo = document.querySelector('.message2')
cells = Array.from(cells)
let currentPlayer = "X"

let winningCombination = [
    ['0','1','2'],
    ['3','4','5'],
    ['6','7','8'],
    ['0','3','6'],
    ['1','4','7'],
    ['2','5','8'],
    ['0','4','8'],
    ['2','4','6']
]

cells.forEach((cell)=>{
    cell.addEventListener('click',()=>{
        if(cell.innerText!=="")return
        cell.innerText = currentPlayer
        checkWinner()
        currentPlayer = currentPlayer == "X" ? "O" : "X"
    })
}) 

function checkWinner(){
    winningCombination.forEach((combination)=>{
        let check = combination.every((x)=>cells[x].innerText.trim()==currentPlayer)
        if(check){
            highlight(combination)
            winnerAnnounce()
            setTimeout(() => {
                cells.forEach((cell)=>{
                cell.innerText = ''
                cell.classList.remove('highlight')
                })
                message.innerHTML = "Lets Play!!!"
            }, 3000);
        }
        
    })
}

function highlight(combination){
    combination.forEach((idx)=>{
        cells[idx].classList.add('highlight')
    })
}
function winnerAnnounce(){
    message.innerHTML = `Congragulation Player ${currentPlayer}  is Won`
    messageTwo.innerHTML = 'Game will begin in next 3sec' 
    setTimeout(() => {
        messageTwo.innerHTML = ""
    }, 3000);
}
reset()
function reset(){
    reseting.addEventListener('click',()=>{
       if(confirm('Do you want to reset the game?')){
        cells.forEach((cell)=>{
        cell.innerText = ''
        cell.classList.remove('highlight')
    })
       }
    })
    message.innerHTML = "Lets Play!!!"
    
    
}
