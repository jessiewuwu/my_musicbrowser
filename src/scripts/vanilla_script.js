function toggleResponsiveNav(){

  // toggle mobile nav bar
  document.getElementById("hamburger-menu").addEventListener("click", function () {renderMenu()})
  document.getElementById("exit-icon").addEventListener("click", function () {closeMenu()})

  // see more/less Top Songs mobile
  document.getElementById('display-toggle').onclick = toggleSongs;
}

function renderMenu() {
  document.getElementById('exit-icon').style.display = 'block';
  document.getElementById('hamburger-menu').style.display = 'none';
  document.getElementById("mobile-nav").style.height = "170px";
  document.getElementById('responsive-nav').style.display = 'block';
}

function closeMenu(){

  document.getElementById('hamburger-menu').style.display = 'block';
  document.getElementById('search-button').style.display = 'block';
  document.getElementById('exit-icon').style.display = 'none';
  document.getElementById("mobile-nav").style.height = "";
  document.getElementById('responsive-nav').style.display = 'none';
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