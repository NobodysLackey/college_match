let board = document.querySelector('.game-board')
let footer = document.querySelector('footer')

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

const shuffledCards = []

let cardOne
let cardTwo

const shuffle = () => {
  for (let i = 0; i < gameSize; i++) {
    let random = Math.floor(Math.random() * cards.length)
    shuffledCards.push(cards[random])
    cards.splice(random, 1)
  }
}

const checkForMatch = () => {
  if (cardOne.name === cardTwo.name) {
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
  allCards[index].classList.add('flipped')
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
        allCards[cardTwo.index].innerHTML = ''
        allCards[cardOne.index].classList.remove('flipped')
        allCards[cardTwo.index].classList.remove('flipped')
        cardOne = null
        cardTwo = null
      }, 1500)
    } else {
      cardOne = null
      cardTwo = null
    }
  }
}

const generateBoard = () => {
  shuffle()
  for (let i = 0; i < shuffledCards.length; i++) {
    let card = document.createElement('div')
    card.classList.add('card')
    card.addEventListener('click', () => flipCard(i))
    board.appendChild(card)
  }
}

generateBoard()
