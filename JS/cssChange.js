const laptop = document.querySelector('.site-img');
let width = '';
let newWidth = '';

laptop.addEventListener('mouseover', (e) => {
  e.target.style.borderRight = '40px solid red';
  //e.target.style.width = '400px';
  width = e.target.style.width;
  newWidth = width.replace('px', ' ');
  parseInt(newWidth, 36);
  newWidth -= 40;
  e.target.style.width = `${newWidth}px`;
});

laptop.addEventListener('mouseout', (e) => {
  e.target.style.borderRight = '40px solid transparent';
  e.target.style.width = '400px';
});
