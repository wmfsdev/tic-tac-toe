
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
   //    console.log(playerId, eTarget)
        if (gameboard[0][eTarget] === '.' ) {   
          gameboard[0].splice(eTarget, 1, playerId)
         // this.gameState()
        }
        else if (gameboard[0][eTarget] !== '.') {
          gameboard = gameboard[0][eTarget]
        }
       // console.log(gameboard)
      },

      gameState(playerId, playerName) {

        const player = (playerId === '0') ? '0' : 'X'
        // let player = ''

        // if (playerId === '0') {
        //   player = '0'
        // }
        // else if (playerId === 'X') {
        //   player = 'X'
        // }

        console.log(player)
        if (gameboard[0][0] === player  && gameboard[0][1] === player && gameboard[0][2] === player ||
            gameboard[0][3] === player  && gameboard[0][4] === player && gameboard[0][5] === player ||
            gameboard[0][6] === player  && gameboard[0][7] === player && gameboard[0][8] === player ||
            // ^^ Horizontal wins from first to last row
            gameboard[0][0] === player  && gameboard[0][3] === player  && gameboard[0][6] === player ||  
            gameboard[0][1] === player  && gameboard[0][4] === player  && gameboard[0][7] === player || 
            gameboard[0][2] === player && gameboard[0][5] === player && gameboard[0][8] === player || 
            // ^^ Vertical wins from first to last column
            gameboard[0][0] === player  && gameboard[0][4] === player && gameboard[0][8] === player || 
            gameboard[0][6] === player  && gameboard[0][4] === player  && gameboard[0][2] === player  
            // ^^ Diagonal wins: top left to bottom right, bottom left to top right
          ) { console.log(`${playerName} " wins"` )}
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

// ------

const gameFlow = (() => {
 
  const playerOne = Players('one', '0')
  const playerTwo = Players('two', 'X')

  const submit = document.getElementById('submit');
  

  	const changePlayerNames = () => {
      const playerOneName = document.getElementById('name-one').value;
      const playerTwoName = document.getElementById('name-two').value;
     // displayPlayers.playerOne.textContent = `${playerOneName}`;
     // displayPlayers.playerTwo.textContent = `${playerTwoName}`;
      playerOne.name = playerOneName;
      playerTwo.name = playerTwoName;
      console.log(playerOne.name)
      console.log(playerOne.playerId)
      
    }

  submit.addEventListener('click', changePlayerNames);
         
  let turn = 0

  const turnListen = () => {
    const listen = document.querySelectorAll('.tiles > button')
      listen.forEach((button) => {
        button.addEventListener('click', (e) => {
          if (turn === 0) {
            playerOne.tileId(e.target.dataset.index)
            // console.log(playerOne.playerId)
            Gameboard.gameState(playerOne.playerId, playerOne.name)
            turn += 1
             console.log(playerOne.name)
          } else {
            // console.log(playerTwo.playerId)
            playerTwo.tileId(e.target.dataset.index)
            Gameboard.gameState(playerTwo.playerId, playerTwo.name)
            console.log(playerTwo.name)
            turn -= 1
          }
        })
      })
  }

Gameboard.renderBoard()
Gameboard.assignDataset()
turnListen()

})()