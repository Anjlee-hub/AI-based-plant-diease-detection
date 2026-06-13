window.onload = function(){

    let disease =
    localStorage.getItem(
        "currentDisease"
    );

    let confidence =
    localStorage.getItem(
        "currentConfidence"
    );

    document.getElementById(
        "diseaseName"
    ).innerText = disease;

    document.getElementById(
        "confidenceText"
    ).innerText =
    "Confidence : " +
    confidence + "%";

};


function speakResult(){

    let disease =
    localStorage.getItem(
        "currentDisease"
    );

    let confidence =
    localStorage.getItem(
        "currentConfidence"
    );

    let text =

    disease +

    " detected with confidence "

    + confidence +

    " percent.";

    let speech =
    new SpeechSynthesisUtterance(
        text
    );

    speech.lang =
    "en-IN";

    window
    .speechSynthesis
    .speak(speech);

}


function saveHistory(){

    alert(
        "Already saved to history"
    );

}


function goHome(){

    window.location.href =
    "home.html";

}