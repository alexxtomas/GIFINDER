
const TrendingAnimatedText = (page = 'Trending') => {
  if (page === 'Trending') {
    return `
      <div class="trending">
      <span style="--i:1">T</span>
      <span style="--i:2">R</span>
      <span style="--i:3">E</span>
      <span style="--i:4">N</span>
      <span style="--i:5">D</span>
      <span style="--i:6">I</span>
      <span style="--i:7">N</span>
      <span style="--i:8">G</span>
      <span style="--i:9">🥳</span>

    </div>
      `
  }
}

export default TrendingAnimatedText
