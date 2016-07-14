function toggleResponsiveNav(){
  var mobileNavIcon = document.getElementById('hamburger-menu');
  mobileNavIcon.onclick = renderMenu;
  document.getElementById('exit-icon').onclick = closeMenu;
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