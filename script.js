// Collapsible logic
const collapsibles = document.querySelectorAll('.collapsible');

collapsibles.forEach(button => {
  button.addEventListener('click', () => {
    const isActive = button.classList.contains('active');

    // Close all others
    collapsibles.forEach(btn => {
      btn.classList.remove('active');
      btn.nextElementSibling.style.maxHeight = null;
    });

    // Toggle clicked one
    if (!isActive) {
      button.classList.add('active');
      const content = button.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
