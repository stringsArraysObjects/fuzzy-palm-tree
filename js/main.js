const skeleton =  document.querySelector('.skeletonA')
const skeleton1 =  document.querySelector('.skeletonB')
const skeleton2 =  document.querySelector('.skeletonC')
const anime = document.querySelector('#anime')
const anime1 = document.querySelector('#anime1')
const gif = document.querySelector('#gif')
// const hideHeadings = document.querySelector('section') 

document.addEventListener("readystatechange", (event) => {
        if (event.target.readyState === "loading") {
          anime.replaceWith.skeleton
          anime1.replaceWith.skeleton2
          gif.replaceWith.skeleton1
        
        }else if (event.target.readyState === "complete") {
            skeleton.remove()
            skeleton1.remove()
            skeleton2.remove()
            getData()
            getGif()
            
            // hideHeadings.classList.toggle('hidden')
        }
});

//  document.addEventListener("readystatechange", (event) => {
//   if(event.target.readyState === "interactive"){
//     getData()
//     getGif()
//   }
//  })
  async function getData() {
    const url = 'https://nekos.best/api/v2/neko?amount=2';
    try {
      const response = await fetch(url, {cache:"force-cache"});
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      var animePicURL = data.results[0].url
      var animePicURL1 = data.results[1].url
      document.querySelector('#anime').src = animePicURL 
      document.querySelector('#animeURL').href = animePicURL
      document.querySelector('#artistName').innerText = data.results[0].artist_name
      document.querySelector('#anime1').src = animePicURL1
      document.querySelector('#animeURL1').href = animePicURL1
      document.querySelector('#artistName1').innerText = data.results[1].artist_name
      console.log(data);
      console.log(animePicURL)
    } catch (error) {
      console.error(error.message);
    }
  }


async function getGif() {
  const urlGif = 'https://nekos.best/api/v2/hug?amount=1';
  try {
    const response = await fetch(urlGif, {cache:"force-cache"});
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();
    var animeGifURL = data.results[0].url
      document.querySelector('#gif').src = animeGifURL
      document.querySelector('#animeGifURL').href = animeGifURL
      document.querySelector('#artistName2').innerText = data.results[0].anime_name
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}