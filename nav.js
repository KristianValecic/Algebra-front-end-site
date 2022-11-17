const primaryNav = document.querySelector('#navbar');
const navToggle = document.querySelector('#navBtn');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === 'false') {
    primaryNav.setAttribute('data-visible', true);
  }
  else{
    primaryNav.setAttribute('data-visible', false);
  }
});
