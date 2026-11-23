(() => {
  const toggler = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-nav');
  if (toggler && menu) {
    const closeMenu = () => { menu.classList.remove('menu-open'); toggler.setAttribute('aria-expanded','false'); };
    toggler.addEventListener('click', () => {
      const open = menu.classList.toggle('menu-open');
      toggler.setAttribute('aria-expanded',String(open));
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }
  const filters = [...document.querySelectorAll('.filter-button')];
  const projects = [...document.querySelectorAll('.project-card[data-groups]')];
  if (filters.length && projects.length) {
    filters.forEach(button => {
      button.addEventListener('click', () => {
        filters.forEach(f => f.setAttribute('aria-pressed',String(f === button)));
        const group = button.dataset.filter;
        projects.forEach(card => { card.hidden = group !== 'all' && !card.dataset.groups.split(' ').includes(group); });
      });
    });
  }
  document.querySelectorAll('[data-current-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
