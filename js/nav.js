(() => {
  const button = document.querySelector('.Nav-button');
  const nav = document.querySelector('.Nav');

  button.addEventListener('click', () => {
    nav.classList.toggle('Nav--visible');
    nav.classList.toggle('Nav--hidden');
    nav.classList.add('Nav--animating');
  });

  nav.addEventListener('animationend', () => {
    nav.classList.remove('Nav--animating');
  });
})();
