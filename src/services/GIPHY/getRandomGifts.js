

export const getRandomGifts = () => {
   return fetch('https://api.giphy.com/v1/gifs/random?api_key=ZpcHIsGoS63yIluHq0ZqMKbYrW6uf3VI&tag=&rating=g')
                .then(res => res.json())  
                .then(gits => gifts)
}