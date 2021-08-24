// --------------------------------------
// ESTABLISHING THE HTML ELEMENTS AND VARIABLES
let stickerBtn = document.getElementById("sticker-btn")
let emojiContainer = document.getElementById("emoji-container")
let stickers = document.querySelectorAll("sticker")
let notebook = document.getElementById("notebook")
// emojiContainer.style.position = "absolute"
// emojiContainer.style.top = '15%';
let zValue = 0
// let pop = new sound("sounds/pop.mp3")

// the total emoji array and the current array
let emojiArray = ["✌","😂","😝","😁","😱","👉","🙌","🍻","🔥","🌈","☀","🎈","🌹","💄","🎀","⚽","🎾","🏁","😡","👿","🐻","🐶","🐬","🐟","🍀","👀","🚗","🍎","💝","💙","👌","❤","😍","😉","😓","😳","💪","💩","🍸","🔑","💖","🌟","🎉","🌺","🎶","👠","🏈","⚾","🏆","👽","💀","🐵","🐮","🐩","🐎","💣","👃","👂","🍓","💘","💜","👊","💋","😘","😜","😵","🙏","👋","🚽","💃","💎","🚀","🌙","🎁","⛄","🌊","⛵","🏀","🎱","💰","👶","👸","🐰","🐷","🐍","🐫","🔫","👄","🚲","🍉","💛","💚"]

// declare variable whose array will be diplayed on the page
let currentEmojis = []

// --------------------------------------
// POPULATING CURRENTEMOJIS ARRAY

// getting a random number so we can use it to refer to an emojiArray item
function getRandomEmojiNum() {
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
  let randomNum = Math.floor(Math.random() * 500)
  return randomNum
}

function getRandomTopValue() {
  let randomNum = (Math.floor(Math.random() * 500) + 200)
  return randomNum
}

function getRandomRotation() {
  let randomNum = Math.floor(Math.random() * 359)
  return randomNum
}

// random scale number from 0.5 to 1.2 to change the sticker size
function getRandomScale() {
  let randomNum = Math.random() + 0.5
  console.log(randomNum)
  return randomNum
}

// push the generated emoji, a random font size and z-index value into currentEmojis
function addEmojiInfoToCurrentEmojis() {
  let randomEmoji = getRandomEmoji(getRandomEmojiNum())
  zValue += 1
  currentEmojis.push([randomEmoji,getRandomLeftValue(),getRandomTopValue(),getRandomRotation(),getRandomFontSize(),zValue])
}

//  this sticks the "stickers" down on the page with random locations and rotations
// function renderEmojis() {
//   emojiContainer.innerHTML = ""
//   for (let i = 0; i < currentEmojis.length; i++){
//     emojiContainer.innerHTML += `<div class="sticker" id="sticker${[i]}" style="box-shadow:0px 0px 1px;position:absolute;left:${currentEmojis[i][1]}px;top:${currentEmojis[i][2]}px;font-size:${currentEmojis[i][4]}px;transform:rotate(${currentEmojis[i][3]}deg);z-index:${currentEmojis[i][5]})">${currentEmojis[i][0]}</div>`
//   }
//}

function renderEmojis() {
  emojiContainer.innerHTML = ""
  for (let i = 0; i < currentEmojis.length; i++){
    emojiContainer.innerHTML += `<div class="sticker" id="sticker${[i]}" style="position:absolute;left:40.5%;top:20%;font-size:70;">${currentEmojis[i][0]}</div>`
  }
}

stickerBtn.addEventListener("click", function(){
  addEmojiInfoToCurrentEmojis()
  renderEmojis()
  // pop.play()
  console.log(currentEmojis)
})

renderEmojis()
