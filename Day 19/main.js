const grid = document.querySelector('.grid')

window.addEventListener('load', async () => {
  const response = await unsplashGet('development')
  const images = []

  for (let i = 0; i < response.data.results.length; i++) {
    images[ i ] = document.createElement('img')
    images[ i ].setAttribute('src', response.data.results[ i ].urls.raw)
    if (response.data.results[ i ].alt_description == null) {
      images[ i ].setAttribute('alt', 'Picture of development.')
    } else {
      images[ i ].setAttribute('alt', response.data.results[ i ].alt_description)
    }
    grid.appendChild(images[ i ])
  }
})

function removeImages() {
  grid.innerHTML = ''
}

function unsplashGet(param) {
  return axios
    .get(`https://api.unsplash.com/search/photos/?query=${ param }&per_page=12&client_id=9stNgqQYMS8Z62dcVqUKV3tgsGUGCUvu1vXqF_o8ejM`)
}