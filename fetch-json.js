// Array of JSON file sources
var jsonSources = ['data.json', 'data2.json']; // Add more sources as needed
var jsonDataCache = {}; // Cache to store pre-loaded JSON data

// Function to fetch and cache JSON data
function fetchAndCacheJsonData(source) {
    return fetch(source)
        .then(response => response.json())
        .then(jsonData => {
            jsonDataCache[source] = jsonData;
        })
        .catch(error => console.error(`Error fetching JSON from ${source}:`, error));
}

// Pre-load JSON data for all sources
jsonSources.forEach(source => fetchAndCacheJsonData(source));

document.getElementById('loadFromJson').addEventListener('click', function () { 
    // Check if the checkbox is checked
    var useJsonDataCheckbox = document.getElementById('useJsonData');
    if (useJsonDataCheckbox.checked) {
        // Randomly select a JSON file source
        var randomSource = jsonSources[Math.floor(Math.random() * jsonSources.length)];
        
        // Use the pre-loaded JSON data from the cache
        var jsonData = jsonDataCache[randomSource];

        if (jsonData) {
            // Pick a random word
            var randomIndex = Math.floor(Math.random() * jsonData.words.length);
            var randomWord = jsonData.words[randomIndex];

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
        alert("Please check the 'Use pre-loaded JSON data' checkbox.");
    }
});

var useJsonDataCheckbox = document.getElementById('useJsonData');
if (useJsonDataCheckbox.checked) {
    document.getElementById('loadFromJson').click();
}


