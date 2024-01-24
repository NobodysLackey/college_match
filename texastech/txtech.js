const board = document.querySelector('#game-board')
const footer = document.querySelector('footer')
const pauseButton = document.querySelector('#pause')
const replayButton = document.querySelector('#replay')
const playPauseButton = document.querySelector('#playPauseButton')

const matadorSong = new Audio('matador-song.mp3')

const cards = [
  {
    name: 'logo',
    url: '../images/texastech/logo.png'
  },
  {
    name: 'logo',
    url: '../images/texastech/logo.png'
  },
  {
    name: 'rider',
    url: '../images/texastech/rider.png'
  },
  {
    name: 'rider',
    url: '../images/texastech/rider.png'
  },
  {
    name: 'dirkwest',
    url: '../images/texastech/dirkwest.gif'
  },
  {
    name: 'dirkwest',
    url: '../images/texastech/dirkwest.gif'
  },
  {
    name: 'original',
    url: '../images/texastech/original.gif'
  },
  {
    name: 'original',
    url: '../images/texastech/original.gif'
  },
  {
    name: 'raiderred',
    url: '../images/texastech/raiderred.gif'
  },
  {
    name: 'raiderred',
    url: '../images/texastech/raiderred.gif'
  },
  {
    name: 'gunsup',
    url: '../images/texastech/gunsup.gif'
  },
  {
    name: 'gunsup',
    url: '../images/texastech/gunsup.gif'
  },
  {
    name: 'tex',
    url: '../images/texastech/tex.gif'
  },
  {
    name: 'tex',
    url: '../images/texastech/tex.gif'
  },
  {
    name: 'tt',
    url: '../images/texastech/tt.gif'
  },
  {
    name: 'tt',
    url: '../images/texastech/tt.gif'
  }
]

let gameSize = cards.length
let matches = 0

let shuffledCards = []

let cardOne
let cardTwo

const shuffle = () => {
  shuffledCards = []
  for (let i = 0; i < gameSize; i++) {
    let random = Math.floor(Math.random() * cards.length)
    shuffledCards.push(cards[random])
    cards.splice(random, 1)
  }
}

const checkForMatch = () => {
  if (cardOne.name === cardTwo.name) {
    matches++
    return true
  } else {
    return false
  }
}

const flipCard = (index) => {
  if (cardTwo) {
    return
  }
  let allCards = board.children
  if (allCards[index].className.includes('flipped')) {
    return
  }
  allCards[index].classList.add('flipped', 'animate__animated', 'animate__flip')
  let image = document.createElement('img')
  image.setAttribute('src', shuffledCards[index].url)
  allCards[index].appendChild(image)
  if (!cardOne) {
    cardOne = {
      name: shuffledCards[index].name,
      url: shuffledCards[index].url,
      index: index
    }
  } else {
    cardTwo = {
      name: shuffledCards[index].name,
      url: shuffledCards[index].url,
      index: index
    }
    if (!checkForMatch()) {
      setTimeout(() => {
        allCards[cardOne.index].innerHTML = ''
        allCards[cardOne.index].classList.remove(
          'flipped',
          'animate__animated',
          'animate__flip'
        )
        allCards[cardTwo.index].innerHTML = ''
        allCards[cardTwo.index].classList.remove(
          'flipped',
          'animate__animated',
          'animate__flip'
        )
        setTimeout(() => {
          allCards[cardOne.index].classList.add(
            'animate__animated',
            'animate__flip'
          )
          allCards[cardTwo.index].classList.add(
            'animate__animated',
            'animate__flip'
          )
        }, 10)
      }, 1500)
      setTimeout(() => {
        allCards[cardOne.index].classList.remove(
          'animate__animated',
          'animate__flip'
        )
        cardOne = null
        allCards[cardTwo.index].classList.remove(
          'animate__animated',
          'animate__flip'
        )
        cardTwo = null
      }, 2400)
    } else {
      setTimeout(() => {
        allCards[cardOne.index].classList.remove(
          'animate__animated',
          'animate__flip'
        )
        cardOne = null
        allCards[cardTwo.index].classList.remove(
          'animate__animated',
          'animate__flip'
        )
        cardTwo = null
      }, 1500)
    }
  }
  if (matches === gameSize / 2) {
    matadorSong.play()
    pauseButton.style.display = 'flex'
    replayButton.style.display = 'flex'
  }
}

const generateBoard = () => {
  shuffle()
  board.innerHTML = ''
  for (let i = 0; i < shuffledCards.length; i++) {
    let card = document.createElement('div')
    card.classList.add('card')
    card.addEventListener('click', () => flipCard(i))
    board.appendChild(card)
  }
}

generateBoard()

replayButton.addEventListener('click', () => {
  generateBoard()
})

pauseButton.addEventListener('click', () => {
  if (matadorSong.paused) {
    matadorSong.play()
    playPauseButton.setAttribute('src', '../icons/pause.png')
    playPauseButton.setAttribute('alt', 'pause')
  } else {
    matadorSong.pause()
    playPauseButton.setAttribute('src', '../icons/play.png')
    playPauseButton.setAttribute('alt', 'play')
  }
})
