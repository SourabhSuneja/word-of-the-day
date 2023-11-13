// Array of JSON file sources
var jsonSources = ['data1.json', 'data2.json']; // Add more sources as needed
var jsonDataCache = {}; // Cache to store pre-loaded JSON data

// Cache DOM elements
var loadFromJsonButton = document.getElementById('loadFromJson');
var useJsonDataCheckbox = document.getElementById('useJsonData');
var wordInput = document.getElementById('word');
var meaningInput = document.getElementById('meaning');
var synonymInput = document.getElementById('synonym');
var antonymInput = document.getElementById('antonym');
var sentenceInput = document.getElementById('sentence');
var pronunciationInput = document.getElementById('pronunciation');

// Function to fetch and cache JSON data
function fetchAndCacheJsonData(source) {
    return fetch(source)
        .then(response => response.json())
        .then(jsonData => {
            jsonDataCache[source] = jsonData;
        })
        .catch(error => console.error(`Error fetching JSON from ${source}:`, error));
}

// Use Promise.all to wait for all fetch operations to complete
Promise.all(jsonSources.map(source => fetchAndCacheJsonData(source)))
    .then(() => {
        // All JSON files have been fetched and cached

        // Attach event handler after all JSON files have been loaded
        loadFromJsonButton.addEventListener('click', function () {
            // Check if the useJsonData checkbox is checked
            if (useJsonDataCheckbox.checked) {
                // Event handler logic when the checkbox is checked

                // Randomly select a JSON file source
                var randomSource = jsonSources[Math.floor(Math.random() * jsonSources.length)];

                // Use the pre-loaded JSON data from the cache
                var jsonData = jsonDataCache[randomSource];

                if (jsonData) {
                    // Pick a random word
                    var randomIndex = Math.floor(Math.random() * jsonData.words.length);
                    var randomWord = jsonData.words[randomIndex];

                    // Insert data into corresponding input fields
                    wordInput.value = randomWord.word;
                    meaningInput.value = randomWord.meaning;
                    synonymInput.value = randomWord.synonym;
                    antonymInput.value = randomWord.antonym;
                    sentenceInput.value = randomWord.sentence;
                    pronunciationInput.value = randomWord.pronunciation;
                } else {
                    console.error(`Error: JSON data for ${randomSource} not pre-loaded.`);
                }
            } else {
                // Alert if the checkbox is not checked
                alert('Please check the "Use pre-loaded JSON data" checkbox first.');
            }
        });

        // Trigger click on loadFromJson button
        if (useJsonDataCheckbox.checked) {
            loadFromJsonButton.click();
        }
    })
    .catch(error => console.error('Error fetching JSON:', error));