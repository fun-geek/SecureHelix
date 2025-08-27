const scannerbox = document.querySelector('#scanner');
const dnaInputField = document.querySelector('#dna-sequence');
const scanResultText = document.querySelector('#biometric-status');
const verifyButton = document.querySelector('#verify-btn');
const lockStatusDisplay = document.querySelector('#system-status-text');

scannerbox.addEventListener('click', () => {
    scanResultText.textContent = "Scanning in Progress...";
    scanResultText.style.color = "#6b7280";
    scannerbox.classList.add('active');

    setTimeout(() => {
        scanResultText.textContent = "Biometric Match Successfull";
        scanResultText.style.color = "#10b981";
        scannerbox.classList.remove('active');
    },1500);
});
 verifyButton.addEventListener('click', () => {
    const enteredSequence = dnaInputField.value.trim().toUpperCase();

    const expectedSequence = "ATCGTACGTGAC";
    if(enteredSequence==expectedSequence){
        lockStatusDisplay.textContent = "Unlocked";
        lockStatusDisplay.style.color = "#10b981";
    }
    else{
        lockStatusDisplay.textContent = "Locked";
        lockStatusDisplay.style.color = "#ef4444";
    }
 });
