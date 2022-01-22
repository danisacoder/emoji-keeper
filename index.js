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
  let randomNum = Math.floor(Math.random() * 85)
  return randomNum
}

function getRandomTopValue() {
  let randomNum = Math.floor(Math.random() * 85)
  return randomNum
}

function getRandomRotation() {
  let randomNum = Math.floor(Math.random() * 359)
  return randomNum
}

// random scale number from 0.5 to 1.2 to change the sticker size
function getRandomStickerScale() {
  let randomNum = 17 + Math.floor(Math.random() * 3)
  console.log(randomNum)
  return randomNum
}

// push the generated emoji, a random font size and z-index value into currentEmojis
function pushEmojiIntoArray() {
  let randomEmoji = getRandomEmoji(randomEmojiNum())
  let stickerZValue = 6
  stickerZValue += 1
  currentEmojis.push([randomEmoji,getRandomLeftValue(),getRandomTopValue(),getRandomRotation(),getRandomFontSize(),stickerZValue, getRandomStickerScale()])
}



function renderEmojis() {
  // clear the emojiContainer div 
  emojiContainer.innerHTML = ""
// iterate through the emojiArray and 
    
  for (let i = 0; i < currentEmojis.length; i++) {

    if (i === currentEmojis.length - 1) {
    // most recently added sticker gets animated
    emojiContainer.innerHTML +=
      `<div
      class="sticker last-sticker"
      id="sticker${[i]}"
      style="
      left:${currentEmojis[i][1]}%;
      top:${currentEmojis[i][2]}%;
      transform:rotate(${currentEmojis[i][3]}deg);
      z-index:${currentEmojis[i][5]};
      ">
      ${currentEmojis[i][0]}
      </div>`
    } 
    // every other sticker does not get animated
    else {
      emojiContainer.innerHTML +=
      `<div
      class="sticker"
      id="sticker${[i]}"
      style="
      left:${currentEmojis[i][1]}%;
      top:${currentEmojis[i][2]}%;
      transform:rotate(${currentEmojis[i][3]}deg);
      z-index:${currentEmojis[i][5]};
      ">
      ${currentEmojis[i][0]}
      </div>`

    }

  }

  setFontSizes()
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

function setScaledFontSize(multiplier, selector) {

  let pageItem = document.querySelectorAll(`.${selector}`)
  let notebookWidth = document.getElementById('notebook').offsetWidth
  let scaledFontSize = notebookWidth * multiplier
  
  if (pageItem.length === 0) {
    } else {
      for (let i = 0; i < pageItem.length; i++) {
        pageItem[i].style.fontSize = `${scaledFontSize}px`
      }

      // console.log(emojiFontSize) 
  }

}



function setFontSizes() {
  // emoji font size
  // setScaledFontSize(`${currentEmojis[i][6]}`, 'sticker')
  // A perfect place font size
  setScaledFontSize(.07, 'notebook-header')
  // to store your emoji collection font size
  setScaledFontSize(.035, 'notebook-body')
  // instructions font size
  setScaledFontSize(.03, 'notebook-instructions')
}



// list of all selectors with vw font sizes:
// body
// h3
// .sticker
// @keyframes sticker-squish
// .row h3
// .row p
// p.instructions


window.addEventListener("resize", setFontSizes)

// document.querySelector('.sticker-container').addEventListener("click", function() {
//   console.log('sticker check')
// })

