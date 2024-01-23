let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")
let sentenceText = ""

for (let i = 0; i < sentence.length; i++) {
sentenceText += sentence[i];
   
}

greetingEl.textContent = sentenceText;