const headings = document.querySelectorAll('div');

toggleContent = () => {
  headings.forEach((heading) => {
    if (heading.classList.contains('showElement')){
      heading.classList.remove('showElement');
      heading.classList.add('hideElement');
    } else {
      heading.classList.remove('hideElement');
      heading.classList.add('showElement');
    }
  })
}
