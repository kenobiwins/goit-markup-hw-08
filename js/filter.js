const refs = {
  filter: document.querySelector('.filter'),
  cards: document.querySelectorAll('.card'),
  gallery: document.querySelector('.gallery'),
  active: document.querySelector('.button--active'),
};

refs.filter.addEventListener('click', filterItems);

function filterItems(e) {
  const { target, currentTarget } = e;
  const type = target.dataset.value;

  if (target.nodeName !== 'BUTTON') {
    return;
  }

  refs.active.classList.remove('button--active');
  target.classList.add('button--active');
  refs.active = target;
  refs.cards.forEach(el => {
    el.dataset.value !== type
      ? el.classList.add('visually-hidden')
      : el.classList.remove('visually-hidden');

    if (type == 'all') {
      el.classList.remove('visually-hidden');
    }
  });
}
