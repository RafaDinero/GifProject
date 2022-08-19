const apiKEY = 'zi7W0UJ011yw9KRNB0znpydVraq3huiy'

export default function getGif ({keyword} ={}) {

  const gifURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`

  return fetch(gifURL)
    .then(res => res.json())
    .then(response => {
      const {data = []} = response
      if(Array.isArray(data)){
      const gifs = data.map(gif => {
        const {id, title, images, username} = gif
        const {url} = images.downsized_medium
        return {id, title, url, username}
      }) 
      return gifs
    }
  })
}