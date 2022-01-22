// --------------------------------------
// ESTABLISHING THE HTML ELEMENTS AND VARIABLES
// let notebook = document.getElementById("sticker-btn")
let clearBtn = document.getElementById("clear-btn")
let emojiContainer = document.getElementById("emoji-container")
let notebook = document.getElementById("notebook")
// emojiContainer.style.position = "absolute"
// emojiContainer.style.top = '15%';
let zValue = 0
// let pop = new sound("sounds/pop.mp3")

// the total emoji array and the current array
let emojiArray = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"]

// declare array variable to contain generated emojis that will be diplayed on the page
let currentEmojis = []

// --------------------------------------
// POPULATING CURRENTEMOJIS ARRAY

// getting a random number so we can use it to refer to an emojiArray item
function randomEmojiNum() {
  let randomNum = Math.floor(Math.random() * emojiArray.length)
  console.log(randomNum)
  return randomNum
}

// use a number passed as a way to access the emoji from the array
function getRandomEmoji(number) {
  let result = emojiArray[number]
  return result
}

// get an emoji font size from 30-60 (still big, obviously)
function getRandomFontSize() {
  let randomNum = (Math.floor(Math.random() * 10) + 80)
  console.log(randomNum)
  return randomNum
}

function getRandomLeftValue() {
  let randomNum = Math.floor(Math.random() * 80 + 1)
  return randomNum
}

function getRandomTopValue() {
  let randomNum = Math.floor(Math.random() * 82) + 1
  return randomNum
}

function getRandomRotation() {
  let randomNum = Math.floor(Math.random() * 359)
  return randomNum
}

// random scale number from 0.5 to 1.2 to change the sticker size
function getRandomStickerScale() {
  let randomNum = 12 + Math.floor(Math.random() * 8)
  console.log(randomNum)
  return randomNum
}

// push the generated emoji, a random font size and z-index value into currentEmojis
function pushEmojiIntoArray() {
  let randomEmoji = getRandomEmoji(randomEmojiNum())
  currentEmojis.push([randomEmoji,getRandomLeftValue(),getRandomTopValue(),getRandomRotation(),getRandomFontSize(), getRandomStickerScale()])
}



function renderEmojis() {
  // clear the emojiContainer div 
  emojiContainer.innerHTML = ""
// iterate through the emojiArray and draw the stickers
    
  for (let i = 0; i < currentEmojis.length; i++) {

      // create a div
      let node = document.createElement('div')

      // add classes to the divS
      node.className = 'sticker'
      
      // add id to the div
      node.setAttribute('id', `sticker${[i]}`)

      // add left value to the div
      node.style.left = `${currentEmojis[i][1]}%`

      // add top value to the div
      node.style.top = `${currentEmojis[i][2]}%`

      // rotate the sticker div
      node.style.transform = `rotate(${currentEmojis[i][3]}deg)`

      // add z-index to the div
      // node.style.zIndex = `${currentEmojis[i][5]}`

      // generate the emoji text
      let textNode = document.createTextNode(`${currentEmojis[i][0]}`)

      // set the sticker scale
      node.style.width = `${currentEmojis[i][5]}%`
      node.style.height = `${currentEmojis[i][5]}%`

      // set font size of emoji
      // let emojiFontSize = ${currentEmojis[i][6] * 4.8}

      // append the emoji text to the sticker
      node.appendChild(textNode)

      // append the sticker to the DOM
      emojiContainer.appendChild(node)

    if (i === currentEmojis.length - 1) {
    
      // add animation class to latest sticker
      node.className = 'sticker last-sticker'

    }

  }

  scaleItems()
}

clearBtn.addEventListener("click", function(){
  currentEmojis = []
  renderEmojis()
  console.log('clear!')
})

notebook.addEventListener("click", function(){
  pushEmojiIntoArray()
  renderEmojis()
  console.log(currentEmojis)
})

renderEmojis()

function setScaledItem(factor, selector) {

  let pageItem = document.querySelectorAll(`.${selector}`)
  let notebookWidth = document.getElementById('notebook').offsetWidth
  let scaledSize = notebookWidth * factor
  // console.log(notebookWidth)
  
  if (pageItem.length === 0) {
    } else {
      for (let i = 0; i < pageItem.length; i++) {
        pageItem[i].style.fontSize = `${scaledSize}px`
      }

      // console.log(scaledFontSize) 
  }

  if (selector === 'sticker') {
    for (let i = 0; i < pageItem.length; i++) {
      let scaledStickerSize = notebookWidth * `.${currentEmojis[i][5]}` * factor  
      pageItem[i].style.fontSize = `${scaledStickerSize}px`
    }
  }
}



function scaleItems() {

  // emoji font size
  setScaledItem(.6, 'sticker')
  // A perfect place font size
  setScaledItem(.07, 'notebook-header')
  // to store your emoji collection font size
  setScaledItem(.035, 'notebook-body')
  // instructions font size
  setScaledItem(.03, 'notebook-instructions')
}

// function setEmojiFontSize() {
//   let stickers = document.querySelectorAll('.sticker')
//   for (let i = 0; i < stickers.length; i++) {
//     let node = document.getElementById(`sticker${[i]}`)
//      node.style.fontSize = `${currentEmojis[i][6] * 4.6}`
//   }
// }

// list of all selectors with vw font sizes:
// body
// h3
// .sticker
// @keyframes sticker-squish
// .row h3
// .row p
// p.instructions


window.addEventListener("resize", scaleItems)

// document.querySelector('.sticker-container').addEventListener("click", function() {
//   console.log('sticker check')
// })

