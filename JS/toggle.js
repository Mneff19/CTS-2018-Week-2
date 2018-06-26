const heading = document.getElementById('mainHeading')
const btn = document.getElementById('toggleBtn');

btn.addEventListener('click', (e) => {
  heading.classList.toggle('hidden');
})
