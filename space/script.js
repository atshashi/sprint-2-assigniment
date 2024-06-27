function calculateLength() {

    const userInput = document.getElementById('userText').value;

    const lengthExcludingSpaces = userInput.replace(/\s+/g, '').length;

    document.getElementById('result').innerText = lengthExcludingSpaces;
}


document.getElementById('goButton').addEventListener('click', calculateLength);