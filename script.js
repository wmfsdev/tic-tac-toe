// const but = document.querySelector('button')
// but.addEventListener('click') => {
//   e.preventDefault()
// })


const Gameboard = (() => {    // MODULE
  const gameboard = [
      ['.', '.', '.', 
       '.', '.', '.', 
       '.', '.', '.']
    ];

    return {
      markBoard(playerId, eTarget) {        // takes player mark from Player object
        const listen = document.querySelector(`[data-index="${eTarget}"]`)
        listen.textContent = playerId
        this.markArray(playerId, eTarget)
       // console.log(playerId,eTarget)
      },

      markArray(playerId, eTarget) {
       console.log(playerId, eTarget)
        
        if (gameboard[0][eTarget] === '.' ) {   
           gameboard[0].splice(eTarget, 1, playerId)
         }
        else if (gameboard[0][eTarget] !== '.') {
          gameboard[0] = gameboard[0]
        } 
   
          console.log(gameboard)
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
      Gameboard.markBoard(playerId, etarget)  // e.target.dataset.index
    }

    return { name, playerId, tileId } 
    // const tileArray = (eTarget) => {
    //   Gameboard.markBoard(eTarget)
    // }

    // const placeMark = () => {
    //   const listen = document.querySelectorAll('button')
    //   listen.forEach((button) => {
    //     button.addEventListener('click', (e) => {
    //      // console.log(e.target.dataset.index) 
    //     //  Gameboard.markBoard(e.target.dataset.index) // Gameboard.markBoard(e.target.dataset.index)
    //     })
    //   })
    // }   
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

turnListen()
  
}


gameFlow()
Gameboard.log()
Gameboard.assignDataset()