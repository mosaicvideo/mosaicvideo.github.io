const switcher = document.querySelector('[data-theme-switch]');

function current() {
  try {
    return localStorage.getItem('appearance') || 'system';
  } catch (e) {
    return 'system';
  }
}

function apply(appearance) {
  const classes = document.documentElement.classList;
  classes.remove('light', 'dark');
  if (appearance !== 'system') classes.add(appearance);
  try {
    localStorage.setItem('appearance', appearance);
  } catch (e) {}
  switcher?.querySelectorAll('[data-appearance]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.appearance === appearance));
  });
}

switcher?.addEventListener('click', (event) => {
  const button = event.target.closest('[data-appearance]');
  if (button) apply(button.dataset.appearance);
});

apply(current());
