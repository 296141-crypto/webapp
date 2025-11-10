// Inside the <script> tags at the bottom of your HTML body

const arrow = document.getElementById('rotatable-arrow');

arrow.addEventListener('click', function() {
    // 1. Generate a random rotation angle between 0 and 360 degrees
    const randomDegree = Math.floor(Math.random() * 360);
    
    // 2. Apply the rotation to the element's style using a CSS transform
    // The 'rotate' function handles the rotation.
    // The 'important' tag ensures this style overrides any existing CSS style.
    arrow.style.transform = `rotate(${randomDegree}deg)`;
});