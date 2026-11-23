const toggle = document.querySelector('.mobile-toggle');
const menu = document.querySelector('.mobile-nav');

if (toggle && menu) {
  const mobile = matchMedia('(max-width: 58rem)');

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
  }

  setMenu(false);
  toggle.hidden = false;
  toggle.addEventListener('click', () => setMenu(menu.hidden));

  menu.addEventListener('click', event => {
    const link = event.target.closest('a');
    if (!link) return;
    setMenu(false);

    const destination = new URL(link.href);
    if (destination.pathname === location.pathname && destination.hash) {
      document.getElementById(destination.hash.slice(1))?.focus({ preventScroll: true });
    } else if (link.hasAttribute('download')) {
      toggle.focus();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !menu.hidden) {
      setMenu(false);
      toggle.focus();
    }
  });

  const header = toggle.closest('header');
  for (const eventType of ['click', 'focusin']) {
    document.addEventListener(eventType, event => {
      if (!menu.hidden && !header.contains(event.target)) setMenu(false);
    });
  }

  mobile.addEventListener('change', () => setMenu(false));
}

const filterRow = document.querySelector('.filter-row');
const projectCards = document.querySelectorAll('.project-card[data-groups]');

if (filterRow && projectCards.length) {
  const buttons = [...filterRow.querySelectorAll('button[data-filter]')];
  const validGroups = new Set(buttons.map(button => button.dataset.filter));

  function showProjects(group) {
    buttons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.filter === group));
    });
    projectCards.forEach(card => {
      card.hidden = group !== 'all' && !card.dataset.groups.split(' ').includes(group);
    });
  }

  function readFilter() {
    const group = new URLSearchParams(location.search).get('project');
    showProjects(validGroups.has(group) ? group : 'all');
  }

  filterRow.addEventListener('click', event => {
    const button = event.target.closest('button[data-filter]');
    if (!button || button.getAttribute('aria-pressed') === 'true') return;

    const group = button.dataset.filter;
    showProjects(group);

    // Query parameters are shareable on a server. A locally opened HTML file
    // still filters without attempting a cross-file history change.
    if (location.protocol === 'http:' || location.protocol === 'https:') {
      const url = new URL(location.href);
      if (group === 'all') url.searchParams.delete('project');
      else url.searchParams.set('project', group);
      history.pushState(null, '', url);
    }
  });

  function updateCurrentLocation() {
    for (const link of document.querySelectorAll('.desktop-nav a, .mobile-nav a')) {
      const hash = new URL(link.href).hash;
      if (hash && hash === location.hash) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }

  readFilter();
  updateCurrentLocation();
  filterRow.hidden = false;
  addEventListener('popstate', readFilter);
  addEventListener('hashchange', updateCurrentLocation);
}

const caseSummary = document.querySelector('.case-sidebar');

if (caseSummary) {
  const narrowCase = matchMedia('(max-width: 47.5rem)');

  function placeCaseSummary() {
    const grid = caseSummary.parentElement;
    const focused = document.activeElement;

    // Keep keyboard and screen-reader order aligned with the phone layout.
    if (narrowCase.matches) grid.prepend(caseSummary);
    else grid.append(caseSummary);

    if (caseSummary.contains(focused)) focused.focus({ preventScroll: true });
  }

  placeCaseSummary();
  narrowCase.addEventListener('change', placeCaseSummary);
}

document.querySelectorAll('[data-current-year]').forEach(element => {
  element.textContent = new Date().getFullYear();
});
