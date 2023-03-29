// const but = document.querySelector('button')
// but.addEventListener('click') => {
//   e.preventDefault()
// })


const Gameboard = (() => {    // MODULE
  let gameboard = [
      ['.', '.', '.', 
       '.', '.', '.', 
       '.', '.', '.']
    ];

    return {
      markBoard(playerId, eTarget) {        // takes player mark from Player object
        const listen = document.querySelector(`[data-index="${eTarget}"]`)
        if (listen.textContent === "") {
          listen.textContent = playerId
          listen.disabled = true
        } else return
        this.markArray(playerId, eTarget)
      },

      markArray(playerId, eTarget) {
       console.log(playerId, eTarget)
        console.log(gameboard[0][eTarget])
        if (gameboard[0][eTarget] === '.' ) {   
          gameboard[0].splice(eTarget, 1, playerId)
          this.gameState()
        }
        else if (gameboard[0][eTarget] !== '.') {
          gameboard = gameboard[0][eTarget] // = gameboard[0][eTarget]
        }
        console.log(gameboard)
        
      },

      gameState() {
        if (gameboard[0][0] === '0'  && gameboard[0][1] === '0' && gameboard[0][2] === '0' ||
            gameboard[0][3] === '0'  && gameboard[0][4] === '0' && gameboard[0][5] === '0' ||
            gameboard[0][6] === '0'  && gameboard[0][7] === '0' && gameboard[0][8] === '0' ||
            // ^^ Horizontal wins from first to last row
            gameboard[0][0] === '0'  && gameboard[0][3] === '0'  && gameboard[0][6] === '0' ||  
            gameboard[0][1] === '0'  && gameboard[0][4] === '0'  && gameboard[0][7] === '0' || 
            gameboard[0][2] === '0' && gameboard[0][5] === '0' && gameboard[0][8] === '0' || 
            // ^^ Vertical wins from first to last column
            gameboard[0][0] === '0'  && gameboard[0][4] === '0' && gameboard[0][8] === '0' || 
            gameboard[0][6] === '0'  && gameboard[0][4] === '0'  && gameboard[0][2] === '0' || 
            // ^^ Diagonal wins: top left to bottom right, bottom left to top right
            gameboard[0][0] === 'X'  && gameboard[0][1] === 'X' && gameboard[0][2] === 'X' ||
            gameboard[0][3] === 'X'  && gameboard[0][4] === 'X' && gameboard[0][5] === 'X' ||
            gameboard[0][6] === 'X'  && gameboard[0][7] === 'X' && gameboard[0][8] === 'X' ||
            // ^^ Horizontal wins from first to last row
            gameboard[0][0] === 'X'  && gameboard[0][3] === 'X'  && gameboard[0][6] === 'X' ||  
            gameboard[0][1] === 'X'  && gameboard[0][4] === 'X'  && gameboard[0][7] === 'X' || 
            gameboard[0][2] === 'X' && gameboard[0][5] === 'X' && gameboard[0][8] === 'X' || 
            // ^^ Vertical wins from first to last column
            gameboard[0][0] === 'X'  && gameboard[0][4] === 'X' && gameboard[0][8] === 'X' || 
            gameboard[0][6] === 'X'  && gameboard[0][4] === 'X'  && gameboard[0][2] === 'X'
          )
        {
          console.log("-----WINNER!!-----")
        }
      },

      log() {console.dir(gameboard)},
      renderBoard() {
        const board = document.querySelectorAll('.tiles')
        board.forEach((tile) => {
        const button = document.createElement('button')
        tile.appendChild(button)})},

      assignDataset() {
        const buttons = document.querySelectorAll('button')
        buttons.forEach((element, index) => {
        element.dataset.index = index   
        });
      },
    }
})()


const Players = (name, playerId) => { 
    const tileId = (etarget) => {
      Gameboard.markBoard(playerId, etarget)
    }
    return { name, playerId, tileId }  
}   

const gameFlow = () => {

  // RENDER
  const printBoard = () => {Gameboard.renderBoard()}
      // PLAYER SELECT - we can come back to this. for now player names are default
      //  const nameInput = () => {
      //   const form = document.querySelector('.player-info')
      //   form.addEventListener('submit', (e) => {
      //     e.preventDefault()
      //   })} - something like this?
  
  // PLAYER MARK TILE
  printBoard() // this possibly needs to be somewhere else entirely - it resets the entire board.
              // alternatively, add an if condition so it doesn't reset until win or if array not empty etc.

const playerOne = Players("playerOne", "0")
const playerTwo = Players("playerTwo", "X")

        
let turn = 0

const turnListen = () => {
  const listen = document.querySelectorAll('button')
    listen.forEach((button) => {
      button.addEventListener('click', (e) => {
        if (turn === 0) {
          playerOne.tileId(e.target.dataset.index)
          // playerOne.tileArray()
          turn += 1
         console.log("player one")
       } else {
         playerTwo.tileId(e.target.dataset.index)
        // playerTwo.tileArray()
         console.log("player two")
           turn -= 1
         }
      })
})
}

// const winner = () => {
  // ??
// }



turnListen()
  
}


gameFlow()
Gameboard.log()
Gameboard.assignDataset()