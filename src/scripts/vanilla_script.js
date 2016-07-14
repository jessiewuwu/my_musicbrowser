function toggleResponsiveNav(){

  // toggle mobile nav bar
  document.getElementById('hamburger-menu').onclick = renderMenu;
  document.getElementById('exit-icon').onclick = closeMenu;

  // see more/less Top Songs mobile
  document.getElementById('display-toggle').onclick = toggleSongs;
}

function renderMenu() {
  var responsiveMenu = document.getElementById('responsive-nav');
  responsiveMenu.style.display = 'block';
  
  document.getElementById('hamburger-menu').style.display = 'none';
  document.getElementById('search-button').style.display = 'none';
  document.getElementById('exit-icon').style.display = 'block';
}

function closeMenu(){
  document.getElementById('responsive-nav').style.display = 'none';
  document.getElementById('hamburger-menu').style.display = 'block';
  document.getElementById('search-button').style.display = 'block';
  document.getElementById('exit-icon').style.display = 'none';
}

function toggleSongs() {
  var i,
  lastThreeSongs = document.querySelectorAll('.right-section li:nth-last-child(-n+3)')
  
  for(i = 0; i < lastThreeSongs.length; i++){
    if(lastThreeSongs[i].style.display == '') {
      lastThreeSongs[i].style.display = 'block';
      this.innerHTML = 'See Less';
    } else {
      lastThreeSongs[i].style.display = '';
      this.innerHTML = 'See More';
    }
  }
}