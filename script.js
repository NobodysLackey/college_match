const board = document.querySelector('#game-board')
const footer = document.querySelector('footer')
const pauseButton = document.querySelector('#pause')
const replayButton = document.querySelector('#replay')
const playPauseButton = document.querySelector('#playPauseButton')

const rockyTop = new Audio('rocky-top.mp3')

let cards = [
  {
    name: 'logo',
    url: 'images/tennessee/logo.png'
  },
  {
    name: 'logo',
    url: 'images/tennessee/logo.png'
  },
  {
    name: 'smokey',
    url: 'images/tennessee/smokey.png'
  },
  {
    name: 'smokey',
    url: 'images/tennessee/smokey.png'
  },
  {
    name: 'vintage',
    url: 'images/tennessee/vintage.gif'
  },
  {
    name: 'vintage',
    url: 'images/tennessee/vintage.gif'
  },
  {
    name: 'original',
    url: 'images/tennessee/original.gif'
  },
  {
    name: 'original',
    url: 'images/tennessee/original.gif'
  },
  {
    name: 'crockett',
    url: 'images/tennessee/crockett.png'
  },
  {
    name: 'crockett',
    url: 'images/tennessee/crockett.png'
  },
  {
    name: 'vols',
    url: 'images/tennessee/vols.png'
  },
  {
    name: 'vols',
    url: 'images/tennessee/vols.png'
  },
  {
    name: 'tenn',
    url: 'images/tennessee/tenn.png'
  },
  {
    name: 'tenn',
    url: 'images/tennessee/tenn.png'
  },
  {
    name: 'ut',
    url: 'images/tennessee/ut.png'
  },
  {
    name: 'ut',
    url: 'images/tennessee/ut.png'
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
        setTimeout(() => {
          allCards[cardOne.index].innerHTML = ''
          allCards[cardOne.index].classList.remove(
            'flipped',
            'animate__animated',
            'animate__flip'
          )
          setTimeout(() => {
            allCards[cardOne.index].classList.add(
              'animate__animated',
              'animate__flip'
            )
          }, 50)
        }, 200)
        setTimeout(() => {
          allCards[cardTwo.index].innerHTML = ''
          allCards[cardTwo.index].classList.remove(
            'flipped',
            'animate__animated',
            'animate__flip'
          )
          setTimeout(() => {
            allCards[cardTwo.index].classList.add(
              'animate__animated',
              'animate__flip'
            )
          }, 50)
        }, 400)
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
      }, 3000)
    } else {
      setTimeout(() => {
        setTimeout(() => {
          allCards[cardOne.index].classList.remove(
            'animate__animated',
            'animate__flip'
          )
          setTimeout(() => {
            allCards[cardOne.index].classList.add(
              'animate__animated',
              'animate__heartBeat'
            )
          }, 50)
        }, 200)
        setTimeout(() => {
          allCards[cardTwo.index].classList.remove(
            'animate__animated',
            'animate__flip'
          )
          setTimeout(() => {
            allCards[cardTwo.index].classList.add(
              'animate__animated',
              'animate__heartBeat'
            )
          }, 50)
        }, 200)
      }, 800)
      setTimeout(() => {
        allCards[cardOne.index].classList.remove(
          'animate__animated',
          'animate__heartBeat'
        )
        cardOne = null
        allCards[cardTwo.index].classList.remove(
          'animate__animated',
          'animate__heartBeat'
        )
        cardTwo = null
      }, 3000)
    }
  }
  if (matches === gameSize / 2) {
    rockyTop.play()
    pauseButton.style.display = 'flex'
    replayButton.style.display = 'flex'
    setTimeout(() => {
      for (let i = 0; i < board.children.length; i++) {
        board.children[i].classList.add('animate__animated', 'animate__tada')
        setTimeout(() => {
          board.children[i].classList.remove(
            'animate__animated',
            'animate__tada'
          )
        }, 5000)
      }
    }, 3000)
  }
}

const generateBoard = () => {
  matches = 0
  cards = [
    {
      name: 'logo',
      url: 'images/tennessee/logo.png'
    },
    {
      name: 'logo',
      url: 'images/tennessee/logo.png'
    },
    {
      name: 'smokey',
      url: 'images/tennessee/smokey.png'
    },
    {
      name: 'smokey',
      url: 'images/tennessee/smokey.png'
    },
    {
      name: 'vintage',
      url: 'images/tennessee/vintage.gif'
    },
    {
      name: 'vintage',
      url: 'images/tennessee/vintage.gif'
    },
    {
      name: 'original',
      url: 'images/tennessee/original.gif'
    },
    {
      name: 'original',
      url: 'images/tennessee/original.gif'
    },
    {
      name: 'crockett',
      url: 'images/tennessee/crockett.png'
    },
    {
      name: 'crockett',
      url: 'images/tennessee/crockett.png'
    },
    {
      name: 'vols',
      url: 'images/tennessee/vols.png'
    },
    {
      name: 'vols',
      url: 'images/tennessee/vols.png'
    },
    {
      name: 'tenn',
      url: 'images/tennessee/tenn.png'
    },
    {
      name: 'tenn',
      url: 'images/tennessee/tenn.png'
    },
    {
      name: 'ut',
      url: 'images/tennessee/ut.png'
    },
    {
      name: 'ut',
      url: 'images/tennessee/ut.png'
    }
  ]
  shuffle()
  board.innerHTML = ''
  for (let i = 0; i < shuffledCards.length; i++) {
    setTimeout(() => {
      let card = document.createElement('div')
      card.classList.add('card')
      card.addEventListener('click', () => flipCard(i))
      board.appendChild(card)
      card.classList.add('animate__animated', 'animate__flip')
      setTimeout(() => {
        card.classList.remove('animate__animated', 'animate__flip')
      }, 1500)
    }, 100 * i)
  }
}

generateBoard()

replayButton.addEventListener('click', () => {
  generateBoard()
})

pauseButton.addEventListener('click', () => {
  if (rockyTop.paused) {
    rockyTop.play()
    playPauseButton.setAttribute('src', './icons/pause.png')
    playPauseButton.setAttribute('alt', 'pause')
  } else {
    rockyTop.pause()
    playPauseButton.setAttribute('src', './icons/play.png')
    playPauseButton.setAttribute('alt', 'play')
  }
})
