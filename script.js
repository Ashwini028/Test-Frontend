// Generate a random captcha
function generateCaptcha() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}

// Initialize captcha on page load
let captchaText = generateCaptcha();
document.getElementById('captchaText').textContent = captchaText;

// Refresh captcha on button click
document.getElementById('refreshCaptcha').addEventListener('click', function() {
    captchaText = generateCaptcha();
    document.getElementById('captchaText').textContent = captchaText;
});

// Form submission and validation
document.getElementById('queryForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting traditionally

    // Validate form inputs
    const name = document.getElementById('name').value;
    const course = document.getElementById('course').value;
    const mobile = document.getElementById('mobile').value;
    const email = document.getElementById('email').value;
    const location = document.getElementById('location').value;
    const query = document.getElementById('query').value;
    const captcha = document.getElementById('captcha').value;

    if (name && course && mobile && email && location && query && captcha === captchaText) {
        // Hide form and show confirmation message
        document.getElementById('queryForm').style.display = 'none';
        document.getElementById('confirmationMessage').style.display = 'block';
    } else {
        if (captcha !== captchaText) {
            alert('Incorrect captcha. Please try again.');
        } else {
            alert('Please fill in all fields correctly.');
        }
    }
});
