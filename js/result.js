function speakResult(){

let text = `
Tomato Early Blight detected.
Confidence ninety six percent.
Moderate risk.
Recommended treatment is Neem Oil Spray.
`;

let speech =
new SpeechSynthesisUtterance(text);

speech.lang = "en-IN";

window.speechSynthesis.speak(speech);

}

function saveHistory(){

alert(
"Result saved successfully"
);

}

function goHome(){

window.location.href =
"home.html";

}