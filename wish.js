document.addEventListener('DOMContentLoaded', () => {
  const wishMessage = document.getElementById('wish-message');
  if (wishMessage) {
      wishMessage.style.display = 'block';
      wishMessage.classList.add('fade-in');
  }
});

