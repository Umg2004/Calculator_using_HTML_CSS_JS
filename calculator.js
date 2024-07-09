function clearScreen() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

function appendToResult(value) {
    document.getElementById('result').value += value;
}

function calculateResult() {
    try {
        let result = document.getElementById('result').value;
        result = result.replace(/\^/g, '**'); // Replace '^' with '**' for power calculation
        document.getElementById('result').value = eval(result);
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
