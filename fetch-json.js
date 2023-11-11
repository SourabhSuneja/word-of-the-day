document.getElementById('loadFromJson').addEventListener('click', function () {
            // Check if the checkbox is checked
            var useJsonDataCheckbox = document.getElementById('useJsonData');
            if (useJsonDataCheckbox.checked) {
                // Parse the provided JSON data
         alert("Run");   






var jsonData = {
  "words": [
    {
      "word": "Ambiguous",
      "meaning": "Having more than one possible interpretation.",
      "synonym": "Uncertain",
      "antonym": "Clear",
      "sentence": "The instructions were ambiguous, leaving the students confused about the assignment.",
      "pronunciation": "am-big-yoo-uhs"
    }]}








    
                // Pick a random word
                var randomIndex = Math.floor(Math.random() * jsonData.words.length); randomIndex=0;
                var randomWord = jsonData.words[randomIndex];

                // Insert data into corresponding input fields
                document.getElementById('word').value = randomWord.word;
                document.getElementById('meaning').value = randomWord.meaning;
                document.getElementById('synonym').value = randomWord.synonym;
                document.getElementById('antonym').value = randomWord.antonym;
                document.getElementById('sentence').value = randomWord.sentence;
                document.getElementById('pronunciation').value = randomWord.pronunciation;
            } else {
                alert("Please check the 'Use pre-loaded JSON data' checkbox.");
            }
        });