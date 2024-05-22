let boxes = document.querySelectorAll('.box')
let restart = document.querySelector('[restart]')
let statusText = document.querySelector('.status-text')
let stroke = document.querySelector('.stroke')

let options = ["", "", "", "", "", "", "", "", ""]
let gameStart = false;
let xTrun = "X"
let oTurn = "O"


let currentPlayer = xTrun;
statusText.innerText = `it's ${currentPlayer} player's turn`

boxes.forEach((box, index) => {
    box.addEventListener('click', gamePlay)
})
function gamePlay() {

    gameStart = true;

    let index = this.getAttribute('id');
    if (options[index] !== "" || gameStart == false) {
        return
    }
    this.innerText = currentPlayer;

    options[index] = currentPlayer;
    console.log(options)
    currentPlayer = currentPlayer == xTrun ? oTurn : xTrun;
    statusText.innerText = `it's ${currentPlayer} player's turn`;

    checkWinner()

}
let className = ''

function checkWinner() {
    if (options[0] !== "") {

        if (options[0] === options[1] && options[1] === options[2]) {
            statusText.innerText = `${options[0]} has won the game`;
            className = "h1"
            stroke.classList.add(className);
            boxes.forEach(box => {
                box.removeEventListener('click', gamePlay)
            })
        }
    }
    if (options[0] !== "") {

        if (options[0] === options[3] && options[3] === options[6]) {
            statusText.innerText = `${options[0]} has won the game`;
            className = "v1"
            stroke.classList.add(className);
            boxes.forEach(box => {
                box.removeEventListener('click', gamePlay)
            })

        }
    }
    if (options[0] !== "") {

        if (options[0] === options[4] && options[4] === options[8]) {
            statusText.innerText = `${options[0]} has won the game`;
            className = "d2"
            stroke.classList.add(className);
            boxes.forEach(box => {
                box.removeEventListener('click', gamePlay)
            })

        }
    }
    if (options[1] !== "") {

        if (options[1] === options[4] && options[4] === options[7]) {
            statusText.innerText = `${options[1]} has won the game`;
            className = "v2"
            stroke.classList.add(className);
            boxes.forEach(box => {
                box.removeEventListener('click', gamePlay)
            })

        }
    }
    if (options[2] !== "") {

        if (options[2] === options[5] && options[5] === options[8]) {
            statusText.innerText = `${options[2]} has won the game`;
            className = "v3"
            stroke.classList.add(className);
            boxes.forEach(box => {
                box.removeEventListener('click', gamePlay)
            })

        }
    }
    if (options[2] !== "") {

        if (options[2] === options[4] && options[4] === options[6]) {
            statusText.innerText = `${options[2]} has won the game`;
            className = "d1"
            stroke.classList.add(className);
            boxes.forEach(box => {
                box.removeEventListener('click', gamePlay)
            })

        }
    }
    if (options[3] !== "") {

        if (options[3] === options[4] && options[4] === options[5]) {
            statusText.innerText = `${options[3]} has won the game`;
            className = "h2"
            stroke.classList.add(className);
            boxes.forEach(box => {
                box.removeEventListener('click', gamePlay)
            })

        }
    }
    if (options[6] !== "") {

        if (options[6] === options[7] && options[7] === options[8]) {
            statusText.innerText = `${options[6]} has won the game`;
            className = "h3"
            stroke.classList.add(className)
            boxes.forEach(box => {
                box.removeEventListener('click', gamePlay)
            })

        }
    }


}


restart.addEventListener('click', () => {
    stroke.classList.remove(className)
    options = ["", "", "", "", "", "", "", "", ""];
    boxes.forEach(box => {
        box.innerText = ""
        box.addEventListener('click', gamePlay)
    })
    currentPlayer = xTrun
    statusText.innerText = `it's ${currentPlayer} player's turn`
})