const toggleBtn = document.getElementById('share');
const shareLinks = document.querySelector('.share-links');

toggleBtn.addEventListener('click', () => {
    shareLinks.classList.toggle('active');
});