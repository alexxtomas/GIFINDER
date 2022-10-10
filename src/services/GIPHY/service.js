const getGifsByWord = (word) =>
  fetch(`https://api.giphy.com/v1/gifs/search?api_key=ZpcHIsGoS63yIluHq0ZqMKbYrW6uf3VI&q=${word}&limit=100&offset=0&rating=g&lang=en`)
    .then(res => res.json())
    .then(data => data)

const getTrendingGifs = () =>
  fetch('https://api.giphy.com/v1/gifs/trending?api_key=ZpcHIsGoS63yIluHq0ZqMKbYrW6uf3VI&limit=100&rating=g')
    .then(res => res.json())
    .then(gifts => gifts)

const getRandomGifs = () =>
  fetch('https://api.giphy.com/v1/gifs/random?api_key=ZpcHIsGoS63yIluHq0ZqMKbYrW6uf3VI&tag=&rating=g')
    .then(res => res.json())
    .then(data => data)

export default { getGifsByWord, getTrendingGifs, getRandomGifs }
