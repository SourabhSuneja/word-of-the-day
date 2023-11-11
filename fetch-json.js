//JSON Dictionary





// fetching code starts

document.getElementById('loadFromJson').addEventListener('click', function () {
            // Check if the checkbox is checked
            var useJsonDataCheckbox = document.getElementById('useJsonData');
            if (useJsonDataCheckbox.checked) {
                // Parse the provided JSON data




var jsonData = {
  "words": [
    {
      "word": "Ambiguous",
      "meaning": "Having more than one possible interpretation.",
      "synonym": "Uncertain",
      "antonym": "Clear",
      "sentence": "The instructions were ambiguous, leaving the students confused about the assignment.",
      "pronunciation": "am-big-yoo-uhs"
    },
    {
      "word": "Cacophony",
      "meaning": "A harsh, discordant mixture of sounds.",
      "synonym": "Noise",
      "antonym": "Harmony",
      "sentence": "The cacophony of honking horns made it hard to concentrate in the busy city.",
      "pronunciation": "kuh-kaw-fuh-nee"
    }]};






    
                // Pick a random word
                var randomIndex = Math.floor(Math.random() * jsonData.words.length); 
alert(jsonData);
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