const Gif = (image, title) => `
    <div class="gif-container">
        <img loading="lazy" src="${image}" alt="${title}" />
        <div class="after">${title}</div>
    </div>
`

export default Gif
