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

      return {    // setup a condition to prevent multiple playerId entries OR
                  //  figure out how it factors into player turn
         
        markArray(playerId) {        // takes player mark from Player object
          const listen = document.querySelectorAll('button')
          listen.forEach((button) => {
            button.addEventListener('click', (e) => {
              button.textContent = playerId
              this.markBoard(e.target.dataset.index, playerId)
            })
          })  
        },

        markBoard(eTarget, playerId) {
          console.log(eTarget)

          if (gameboard[0][eTarget] === '.' ) {   
            gameboard[0].splice(eTarget, 1, playerId)
          }
          else if (gameboard[0] !== '.') {
            gameboard[0][0] = gameboard[0][0]
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


const Players = (name, playerId) => {     // FACTORY FUNCTION
     
    const tileId = () => {Gameboard.markArray(playerId)}  // Gameboard.markArray(playerId)

    // const placeMark = () => {
    //   const listen = document.querySelectorAll('button')
    //   listen.forEach((button) => {
    //     button.addEventListener('click', (e) => {
    //      // console.log(e.target.dataset.index) 
    //     //  Gameboard.markBoard(e.target.dataset.index) // Gameboard.markBoard(e.target.dataset.index)
    //     })
    //   })
    // }
    return { name, playerId, tileId} 
}
    

const gameFlow = () => {
  // RENDER
  const printBoard = () => {Gameboard.renderBoard()}
      // PLAYER SELECT - we can come back to this. for now player names are default
      //  const nameInput = () => {
      //   const form = document.querySelector('.player-info')
      //   form.addEventListener('submit', (e) => {
      //     e.preventDefault()
      //   })}

  // PLAYER TURN


  // PLAYER MARK TILE

  printBoard()

   const playerOne = Players("playerOne", "X")
  // playerOne.placeMark()
   playerOne.tileId()
  
 // buttonListen()
}


gameFlow()
Gameboard.log()
Gameboard.assignDataset()


