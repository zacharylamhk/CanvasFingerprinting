// generateFingerprint.js

/**
 * Dependencies:
 * - CryptoJS Library (for SHA-1 hashing)
 *   Include the following script in your HTML:
 *   <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"></script>
 */

/**
 * Function to generate a numeric fingerprint
 */
function generateNumericFingerprint() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = 200;
    canvas.height = 200;
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillStyle = '#f00';
    ctx.fillText('Unique Fingerprint', 50, 50);

    // Get the base64 string and remove the prefix
    var base64Data = canvas.toDataURL().split(',')[1];

    // Hash the base64 data using SHA-1
    var hash = CryptoJS.SHA1(base64Data).toString();

    // Convert hash to numeric by keeping only digits
    var numericHash = hash.replace(/\D/g, ''); // Remove non-digit characters

    // Truncate or pad to 20 digits
    return numericHash.substring(0, 20).padEnd(20, '0'); // Add trailing zeros if needed
}

/**
 * Function to display the fingerprint
 */
function displayFingerprint() {
    var visitorId = generateNumericFingerprint();
    console.log(visitorId);

    // Update the fingerprintStatus element, if it exists
    var fingerprintStatusElement = document.getElementById('fingerprintStatus');
    if (fingerprintStatusElement) {
        fingerprintStatusElement.innerText = visitorId;
    }
}

// Export the function for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateNumericFingerprint,
        displayFingerprint
    };
}