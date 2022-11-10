const refs = {
  filter: document.querySelector('.filter'),
  cards: document.querySelectorAll('.card'),
  gallery: document.querySelector('.gallery'),
};

refs.filter.addEventListener('click', filterItems);

function filterItems(e) {
  const { target, currentTarget } = e;
  const type = target.dataset.value;

  if (target.nodeName !== 'BUTTON') {
    return;
  }

  //   target.classList.add('button--active');
  refs.cards.forEach(el => {
    el.dataset.value !== type
      ? el.classList.add('visually-hidden')
      : el.classList.remove('visually-hidden');

    if (type == 'all') {
      el.classList.remove('visually-hidden');
    }
  });
}
