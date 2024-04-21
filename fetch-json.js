// Constant to determine which randomization technique to use
const USE_CRYPTO_RANDOM = true; // Set to true to use crypto.getRandomValues(), false to use Math.random()

// Function to generate a random index using Math.random()
function getRandomIndexMath(length) {
    return Math.floor(Math.random() * length);
}

// Function to generate a cryptographically strong random index
function getRandomIndexCrypto(length) {
    var randomIndex;
    var randomArray = new Uint32Array(1);
    do {
        window.crypto.getRandomValues(randomArray);
        randomIndex = randomArray[0] % length;
    } while (randomIndex >= length);
    return randomIndex;
}

// Attach event handler after all JSON files have been loaded
document.getElementById('loadFromJson').addEventListener('click', function () {
    // Check if the useJsonData checkbox is checked
    var useJsonDataCheckbox = document.getElementById('useJsonData');

    if (useJsonDataCheckbox.checked) {
        // Event handler logic when the checkbox is checked

        // Randomly select a JSON file source
        var randomSourceIndex;
        if (USE_CRYPTO_RANDOM) {
            randomSourceIndex = getRandomIndexCrypto(jsonSources.length);
        } else {
            randomSourceIndex = getRandomIndexMath(jsonSources.length);
        }
        var randomSource = jsonSources[randomSourceIndex];

        // Use the pre-loaded JSON data from the cache
        var jsonData = jsonDataCache[randomSource];

        if (jsonData) {
            // Pick a random word
            var randomWordIndex;
            if (USE_CRYPTO_RANDOM) {
                randomWordIndex = getRandomIndexCrypto(jsonData.words.length);
            } else {
                randomWordIndex = getRandomIndexMath(jsonData.words.length);
            }
            var randomWord = jsonData.words[randomWordIndex];

            // Insert data into corresponding input fields
            document.getElementById('word').value = randomWord.word;
            document.getElementById('meaning').value = randomWord.meaning;
            document.getElementById('synonym').value = randomWord.synonym;
            document.getElementById('antonym').value = randomWord.antonym;
            document.getElementById('sentence').value = randomWord.sentence;
            document.getElementById('pronunciation').value = randomWord.pronunciation;
        } else {
            console.error(`Error: JSON data for ${randomSource} not pre-loaded.`);
        }
    } else {
        // Alert if the checkbox is not checked
        alert('Please check the "Use pre-loaded JSON data" checkbox first.');
    }
});