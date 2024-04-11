document.querySelector('button').addEventListener('click', getAnime)

 
function getAnime() {
    fetch('https://nekos.best/api/v2/neko',{cache: 'force-cache'})
  .then(response => response.json())
  .then(json => {
      console.log(json.results[0].url)
      document.querySelector('#anime').src = json.results[0].url

  })

// https://nekos.best/api/v2/neko/XXXXXX-XXXXX.png

}
document.querySelector('#gifButton').addEventListener('click', getGif)

function getGif() {
  fetch('https://nekos.best/api/v2/hug?amount=2',{cache: 'force-cache'})
  .then(response => response.json())
  .then(json => {
      console.log(json.results[0].url)
      document.querySelector('#gif').src = json.results[0].url

  })

}