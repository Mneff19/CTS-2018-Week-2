const imgs = document.querySelectorAll('.site-img');

imgs.forEach((img) => {
  img.addEventListener('mouseover', (e) => {
    const captionElement = e.target.parentElement.children[1];
    captionElement.className = 'show-img-overlay';
  })
})

imgs.forEach((img) => {
  img.addEventListener('mouseout', (e) => {
    const captionElement = e.target.parentElement.children[1];
    captionElement.className = 'hide-img-overlay';
  })
})
