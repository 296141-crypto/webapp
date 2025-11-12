// Get a reference to the arrow element (using the correct ID from your HTML)
const arrow = document.getElementById('rotatable-arrow'); 

// The total degree of rotation to create a continuous spin effect
// 3600 degrees = 10 full spins (360 * 10). Adjust this number for more/fewer spins.
const baseSpins = 3600; 

arrow.addEventListener('click', function() {
    // 1. Generate a random degree (0 to 359) for the final stopping position
    const finalDegree = Math.floor(Math.random() * 360);
    
    // 2. Calculate the total rotation: 10 full spins + the random final degree
    const totalRotation = baseSpins + finalDegree;

    // 3. Apply the rotation using an inline style
    // The browser now animates this to 3800+ degrees over 5 seconds (as defined in the CSS)
    arrow.style.transform = `rotate(${totalRotation}deg)`;
    
    // The previous transform remains applied, so the next click starts the spin from the 
    // last position, which looks seamless!
});