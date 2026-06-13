function speakDisease(){

let text =
document.getElementById(
"diseaseName"
).innerText;

let speech =
new SpeechSynthesisUtterance(text);

speech.lang = "en-IN";

window.speechSynthesis.speak(
speech
);

}