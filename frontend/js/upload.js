function selectImage(){

document
.getElementById("fileInput")
.click();

}

document
.getElementById("fileInput")
.addEventListener("change",

function(event){

const file =
event.target.files[0];

if(file){

const reader =
new FileReader();

reader.onload =
function(e){

document
.getElementById("preview")
.src = e.target.result;

};

reader.readAsDataURL(file);

}

});

function detectDisease(){

    let scanResult = {

        disease:
        "Tomato Early Blight",

        confidence:
        96,

        date:
        new Date()
        .toLocaleDateString()

    };

    let scans =
    JSON.parse(
        localStorage.getItem(
            "scanHistory"
        )
    ) || [];

    scans.push(
        scanResult
    );

    localStorage.setItem(
        "scanHistory",
        JSON.stringify(
            scans
        )
    );

    localStorage.setItem(
        "currentDisease",
        scanResult.disease
    );

    localStorage.setItem(
        "currentConfidence",
        scanResult.confidence
    );

    window.location.href =
    "result.html";

}