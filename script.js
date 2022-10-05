let board = document.querySelector('.game-board')
let footer = document.querySelector('footer')

const cards = [
  {
    name: 'logo',
    url: 'images/logo.png'
  },
  {
    name: 'logo',
    url: 'images/logo.png'
  },
  {
    name: 'smokey',
    url: 'images/smokey.png'
  },
  {
    name: 'smokey',
    url: 'images/smokey.png'
  },
  {
    name: 'vintage',
    url: 'images/vintage.gif'
  },
  {
    name: 'vintage',
    url: 'images/vintage.gif'
  },
  {
    name: 'original',
    url: 'images/original.gif'
  },
  {
    name: 'original',
    url: 'images/original.gif'
  },
  {
    name: 'crockett',
    url: 'images/crockett.png'
  },
  {
    name: 'crockett',
    url: 'images/crockett.png'
  },
  {
    name: 'vols',
    url: 'images/vols.png'
  },
  {
    name: 'vols',
    url: 'images/vols.png'
  },
  {
    name: 'tenn',
    url: 'images/tenn.png'
  },
  {
    name: 'tenn',
    url: 'images/tenn.png'
  },
  {
    name: 'ut',
    url: 'images/ut.png'
  },
  {
    name: 'ut',
    url: 'images/ut.png'
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
