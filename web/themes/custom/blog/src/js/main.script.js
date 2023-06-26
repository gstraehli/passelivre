(function () {
  const navbarToggler = document.querySelector('.navbar-toggler');
  navbarToggler.addEventListener('click', (e) => {
    const navigationWrapper = document.querySelector('.block--blog-main-menu');
    if(navigationWrapper.classList.contains('is-open')) {
      navigationWrapper.classList.remove('is-open');
      navigationWrapper.style.right = -100 + '%';
    } else {
      navigationWrapper.classList.add('is-open');
      navigationWrapper.style.right = 0;
    }

  })
  document.getElementById('edit-submit').addEventListener('click', function(event) {

    var auteurInput = document.getElementById('edit-name').value;

    if (auteurInput === '') {
      event.preventDefault(); // Empêche la soumission du formulaire
      alert('Veuillez renseigner le champ auteur.');
    }
  });
})();
