const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', function() {
  navbarMenu.classList.toggle('active');
  this.classList.toggle('active');
});
