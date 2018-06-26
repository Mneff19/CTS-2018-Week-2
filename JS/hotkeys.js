const hotKeys = (e) => {
  let windowEvent = window.event ? event : e;

  if (windowEvent.keyCode === 66 && windowEvent.ctrlKey){
    const searchBar = document.querySelector('#searchBar');
    searchBar.focus();
  }
}

document.onkeydown = hotKeys;
