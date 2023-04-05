
const Gameboard = (() => {    // MODULE
  let gameboard = [
      ['.', '.', '.', 
       '.', '.', '.', 
       '.', '.', '.']
    ];

  const reset = () => {
    
      gameboard = [
        ['.', '.', '.', 
         '.', '.', '.', 
         '.', '.', '.']
      ];
     
      const button = document.querySelectorAll('button')
      const modal = document.querySelector('.modal')
      const overlay = document.querySelector('.overlay')
      modal.remove()
      overlay.remove()
      button.forEach(element => element.remove())
      gameFlow()
    }

    const declareWinner = (winner) => {
      const win = document.querySelector('body')
      const modal = document.createElement('div')
      const p = document.createElement('p')
      const overlay = document.createElement('div')
      const button = document.createElement('button')
      if (winner === "DRAW") {
        p.textContent = (`DRAW!`)
      } else {
      p.textContent = (`${winner} WINS!`)
      }
      button.textContent = 'Go Again?'
      button.classList.add('again')
      modal.classList.add('modal')
      p.classList.add('p')
      overlay.classList.add('overlay')
      win.append(overlay)
      win.append(modal)
      modal.append(p)
      modal.append(button)
      button.addEventListener('click', reset)
    }

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
        if (gameboard[0][eTarget] === '.' ) {   
          gameboard[0].splice(eTarget, 1, playerId)
        }
        else if (gameboard[0][eTarget] !== '.') {
          gameboard = gameboard[0][eTarget]
        }
      },

      gameState(playerId, playerName, counter) {

        const player = (playerId === '0') ? '0' : 'X'

        if (gameboard[0][0] === player && gameboard[0][1] === player && gameboard[0][2] === player ||
            gameboard[0][3] === player && gameboard[0][4] === player && gameboard[0][5] === player ||
            gameboard[0][6] === player && gameboard[0][7] === player && gameboard[0][8] === player ||
            // ^^ Horizontal wins from first to last row
            gameboard[0][0] === player && gameboard[0][3] === player && gameboard[0][6] === player ||  
            gameboard[0][1] === player && gameboard[0][4] === player && gameboard[0][7] === player || 
            gameboard[0][2] === player && gameboard[0][5] === player && gameboard[0][8] === player || 
            // ^^ Vertical wins from first to last column
            gameboard[0][0] === player && gameboard[0][4] === player && gameboard[0][8] === player || 
            gameboard[0][6] === player && gameboard[0][4] === player && gameboard[0][2] === player  
            // ^^ Diagonal wins: top left to bottom right, bottom left to top right
          ) { declareWinner(playerName) 
              return  
          }
            if (counter > 8) { declareWinner("DRAW") }  
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

const gameFlow = () => {
 
  const playerOne = Players('PLAYER 0', '0')
  const playerTwo = Players('PLAYER X', 'X')

  const submit = document.getElementById('submit');
  
  	const changePlayerNames = () => {
      const playerOneName = document.getElementById('name-one').value;
      const playerTwoName = document.getElementById('name-two').value;
      playerOne.name = playerOneName;
      playerTwo.name = playerTwoName; 
    }

  submit.addEventListener('click', changePlayerNames);
         
  let turn = 0
  let counter = 0

  const turnListen = () => {
    const listen = document.querySelectorAll('.tiles > button')
      listen.forEach((button) => {
        button.addEventListener('click', (e) => {
          if (turn === 0) {
            counter += 1
            playerOne.tileId(e.target.dataset.index)
            Gameboard.gameState(playerOne.playerId, playerOne.name, counter)
            turn += 1
          } else {
            counter += 1
            playerTwo.tileId(e.target.dataset.index)
            Gameboard.gameState(playerTwo.playerId, playerTwo.name, counter)
            turn -= 1
          }
        })
      })
  }

Gameboard.renderBoard()
Gameboard.assignDataset()
turnListen()

}

gameFlow()