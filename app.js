const text = document.getElementById('text')
const playButton = document.getElementById('play-button')

playButton.addEventListener('click', () => {
  playText(text.value)
  console.log(text.value)
})

function playText(txt) {
  const utterence = new SpeechSynthesisUtterance(txt)
  utterence.rate = 1

  speechSynthesis.speak(utterence)
}
