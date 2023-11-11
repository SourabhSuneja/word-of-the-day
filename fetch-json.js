document.getElementById('loadFromJson').addEventListener('click', function () { alert("hi1")
    // Check if the checkbox is checked
    var useJsonDataCheckbox = document.getElementById('useJsonData');
    if (useJsonDataCheckbox.checked) {
        // Fetch the external JSON data
        fetch('data.json')
            .then(response => response.json())
            .then(jsonData => {
                // Pick a random word
alert("hi2"):
                var randomIndex = Math.floor(Math.random() * jsonData.words.length);
                var randomWord = jsonData.words[randomIndex];

                // Insert data into corresponding input fields
                document.getElementById('word').value = randomWord.word;
                document.getElementById('meaning').value = randomWord.meaning;
                document.getElementById('synonym').value = randomWord.synonym;
                document.getElementById('antonym').value = randomWord.antonym;
                document.getElementById('sentence').value = randomWord.sentence;
                document.getElementById('pronunciation').value = randomWord.pronunciation;
            })
            .catch(error => console.error('Error fetching JSON:', error));
    } else {
        alert("Please check the 'Use pre-loaded JSON data' checkbox.");
    }
});
