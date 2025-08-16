"use strict";

// Final step page functionality
document.addEventListener('DOMContentLoaded', function() {
  // Add any additional functionality for the final step page here
  
  // Example: Track when user clicks the subscribe button
  const subscribeButton = document.querySelector('.final-step-button');
  if (subscribeButton) {
    subscribeButton.addEventListener('click', function() {
      // You can add analytics tracking here
      console.log('User clicked subscribe button');
    });
  }
  
  // Example: Add smooth scroll animation when page loads
  const finalStepContainer = document.querySelector('.final-step-container');
  if (finalStepContainer) {
    finalStepContainer.style.opacity = '0';
    finalStepContainer.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      finalStepContainer.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      finalStepContainer.style.opacity = '1';
      finalStepContainer.style.transform = 'translateY(0)';
    }, 100);
  }
});
