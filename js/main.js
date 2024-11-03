// Component specific elements
const shareBtn = document.getElementById('share-btn');
const shareLinks = document.getElementById('share-links');

/**
 * Toggle the share links when the share button is clicked as well as changing the styling of the share button
 */
shareBtn.addEventListener('click', () => {
  shareLinks.classList.toggle('open');
  shareBtn.classList.toggle('active');
});

/**
 * Close the share links container when the user clicks anywhere outside of the share button or share links container
 */
window.addEventListener('click', (e) => {
  if (e.target !== shareBtn && e.target !== shareLinks && !shareLinks.contains(e.target) && !shareBtn.contains(e.target)) {
    shareLinks.classList.remove('open');
    shareBtn.classList.remove('active');
  }
});