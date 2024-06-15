document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menu');
  const closeIcon = document.getElementById('close');
  const searchItems = document.querySelector('.search-item');

  menuIcon.addEventListener('click', () => {
      searchItems.classList.add('show');
      menuIcon.style.display = 'none';
      closeIcon.style.display = 'block';
  });

  closeIcon.addEventListener('click', () => {
      searchItems.classList.remove('show');
      menuIcon.style.display = 'block';
      closeIcon.style.display = 'none';
  });

  // Initially hide the close icon
  closeIcon.style.display = 'none';
});
