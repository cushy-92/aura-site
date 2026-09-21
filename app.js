const modal = document.getElementById('donateModal');

document.querySelectorAll('[data-donate]').forEach(button => {
  button.addEventListener('click', () => {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

document.querySelector('[data-close]').addEventListener('click', () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
});

modal.addEventListener('click', event => {
  if (event.target === modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
});

document.querySelectorAll('.amounts button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.amounts button').forEach(item => {
      item.classList.remove('active');
    });

    button.classList.add('active');

    document.querySelector('.custom-amount').value =
      button.textContent.replace('₽', '').trim();
  });
});

document.querySelector('.menu').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('mobile-open');
});
