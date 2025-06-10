function checkPalindrome() {
    const input = document.getElementById('inputText').value;
    const resultElement = document.getElementById('result');
    
    if (!input.trim()) {
        resultElement.textContent = "Please enter something!";
        resultElement.style.color = "red";
        return;
    }

    // Remove non-alphanumeric chars and convert to lowercase
    const cleaned = input.replace(/[^a-z0-9]/gi, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');

    if (cleaned === reversed) {
        resultElement.textContent = `"${input}" is a palindrome!`;
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = `"${input}" is NOT a palindrome`;
        resultElement.style.color = "red";
    }
}