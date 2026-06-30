const root = document.documentElement;
const themeButton = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('portfolio-theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(theme) {
  root.dataset.theme = theme;
  if (themeButton) {
    themeButton.textContent = theme === 'dark' ? '☀' : '☾';
    themeButton.setAttribute('aria-label', theme === 'dark' ? '라이트 모드 켜기' : '다크 모드 켜기');
  }
}

setTheme(savedTheme || (prefersDark ? 'dark' : 'light'));
themeButton?.addEventListener('click', () => {
  const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('portfolio-theme', nextTheme);
  setTheme(nextTheme);
});

const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
});
navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));

document.querySelector('#year').textContent = new Date().getFullYear();

const filterButtons = document.querySelectorAll('.filter-button');
const activityCards = document.querySelectorAll('.activity-card');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  const filter = button.dataset.filter;
  activityCards.forEach(card => card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter));
}));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .08 });
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
