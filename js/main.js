
 document.addEventListener("readystatechange", (event) => {
  if(event.target.readyState === "interactive"){
    getData()
    getGif()
  }
 })
  async function getData() {
    const url = 'https://nekos.best/api/v2/neko?amount=2';
    try {
      const response = await fetch(url, {cache:"force-cache"});
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      document.querySelector('#anime').src = data.results[0].url 
      document.querySelector('#artistName').innerText = data.results[0].artist_name
      document.querySelector('#anime1').src = data.results[1].url
      document.querySelector('#artistName1').innerText = data.results[1].artist_name
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }


async function getGif() {
  const url = 'https://nekos.best/api/v2/hug?amount=1';
  try {
    const response = await fetch(url, {cache:"force-cache"});
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
      document.querySelector('#gif').src = json.results[0].url
      document.querySelector('#artistName2').innerText = json.results[0].anime_name
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}