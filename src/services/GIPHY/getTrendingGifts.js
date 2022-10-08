const getTrendingGifts = () => {
    return fetch('https://api.giphy.com/v1/gifs/random?api_key=ZpcHIsGoS63yIluHq0ZqMKbYrW6uf3VI&tag=&rating=g')
                .then(res => res.json())
                .then(gifts => gifts)
}