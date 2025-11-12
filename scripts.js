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
black-arrow = document.getElementById('black-arrow');

// Function to start the spin
function startSpin() {
    // Add the CSS class "spinning" to the element
    spinner.classList.add('spinning');
}

// Function to stop the spin
function stopSpin() {
    // Remove the CSS class "spinning" from the element
    spinner.classList.remove('spinning');
}

// Event Listeners:
// When the user first touches the element (or clicks the mouse button down)
spinner.addEventListener('mousedown', startSpin); // For desktop mouse down
spinner.addEventListener('touchstart', startSpin); // For mobile touch start

// When the user releases the touch/click
spinner.addEventListener('mouseup', stopSpin); // For desktop mouse up
spinner.addEventListener('touchend', stopSpin); // For mobile touch end