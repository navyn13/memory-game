var cardArray=[
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }, {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]

cardArray.sort(()=>0.5-Math.random())

var gridDisplay = document.querySelector('#grid')
function createBoard(){
    for(let i=0; i<12; i++){
        var card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipboard)
        gridDisplay.appendChild(card)
    }
}
createBoard()
cardChosen=[]
cardChosenId=[]
var cardsWon=0

function checkForMatch(){
    const card= document.querySelectorAll('img')
    const option1Id= cardChosenId[0]
    const option2Id= cardChosenId[1]

    if(option1Id==option2Id){
        card[option1Id].setAttribute('src', 'images/blank.png')
        card[option2Id].setAttribute('src', 'images/blank.png')
        cardChosen.pop()
        cardChosen.pop()
        cardChosenId.pop()
        cardChosenId.pop()
              
    }
    else if(cardChosen[0]===cardChosen[1]){
        card[option1Id].setAttribute('src', 'images/white.png')
        card[option2Id].setAttribute('src', 'images/white.png')
        
        cardsWon++
        var scoreCount = document.getElementById('score')
        scoreCount.innerHTML = cardsWon
        if(cardsWon===6){
            alert('you won the game')
        }
       
        cardChosen.pop()
        cardChosen.pop()
        cardChosenId.pop()
        cardChosenId.pop()


    }
    else{
        card[option1Id].setAttribute('src', 'images/blank.png')
        card[option2Id].setAttribute('src', 'images/blank.png')
        cardChosen.pop()
        cardChosen.pop()
        cardChosenId.pop()
        cardChosenId.pop()
    }



}

function flipboard(){
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)

    this.setAttribute('src', cardArray[cardId].img)
    console.log(cardChosen)
    console.log(cardChosenId)

    if(cardChosen.length===2){
            setTimeout(checkForMatch, 500)  
        }
        
    }


