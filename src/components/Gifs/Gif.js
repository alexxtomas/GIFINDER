const Gif = (image, title, component = '') => {
  if (component === 'Random') {
    return ` <div class="gif-container-random">
        <img loading="lazy" src="${image}" alt="${title}" />
        <div class="after">${title}</div>
    </div>`
  } else {
    return `
        <div class="gif-container">
            <img loading="lazy" src="${image}" alt="${title}" />
            <div class="after">${title}</div>
        </div>
    `
  }
}

export default Gif
