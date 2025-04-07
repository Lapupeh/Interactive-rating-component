
'use strict';
const ratingButtons = document.querySelectorAll('.rating-button')
const ratingBtnContainer = document.querySelector('.rating-container');
const submitButton = document.querySelector('.submit-button');

ratingBtnContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('rating-button')) {
    ratingButtons.forEach(btn => 
        btn.classList.remove('active'))
    e.target.classList.add('active');
  }
});

submitButton.addEventListener('click', () => {
    const selectedRating = document.querySelector('.active');
    if (selectedRating) {
        const ratingValue = selectedRating.textContent;
        document.querySelector('.thank-you-card').classList.remove('hidden');
        document.querySelector('.thank-you-card').classList.add('flex')
        document.querySelector('.card').classList.add('hidden');
        document.querySelector('.selected-rating').textContent = `You selected ${ratingValue} out of 5`;
    } else {
        alert('Please select a rating before submitting.');
    }
});