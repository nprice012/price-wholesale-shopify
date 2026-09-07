document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-mobile-nav]');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.hasAttribute('hidden');
      nav.toggleAttribute('hidden', !open);
      menuButton.setAttribute('aria-expanded', String(open));
    });
  }
});
