const cropDiseases = {

Tomato:[
"Tomato Early Blight",
"Tomato Late Blight",
"Leaf Mold",
"Septoria Leaf Spot"
],

Rice:[
"Rice Blast",
"Brown Spot",
"Bacterial Blight"
],

Potato:[
"Potato Late Blight",
"Potato Scab"
],

Corn:[
"Corn Rust",
"Gray Leaf Spot"
]

};

const selectedCrop =
localStorage.getItem(
"selectedCrop"
);

document.getElementById(
"cropTitle"
).innerText =
selectedCrop + " Diseases";

const diseaseList =
document.getElementById(
"diseaseList"
);

cropDiseases[selectedCrop]
.forEach(disease=>{

const card =
document.createElement("div");

card.className =
"disease-card";

card.innerHTML = `
<h3>${disease}</h3>
<p>Tap to view details</p>
`;

card.onclick = ()=>{

localStorage.setItem(
"selectedDisease",
disease
);

window.location.href =
"disease-details.html";

};

diseaseList.appendChild(card);

});

const cropDiseases = {

Tomato:[
"Tomato Early Blight",
"Tomato Late Blight",
"Leaf Mold",
"Septoria Leaf Spot"
],

Rice:[
"Rice Blast",
"Brown Spot",
"Bacterial Blight"
],

Potato:[
"Potato Late Blight",
"Potato Scab"
],

Corn:[
"Corn Rust",
"Gray Leaf Spot"
]

};

const selectedCrop =
localStorage.getItem(
"selectedCrop"
);

if(selectedCrop){

document.getElementById(
"cropTitle"
).innerText =
selectedCrop + " Diseases";

const diseaseList =
document.getElementById(
"diseaseList"
);

cropDiseases[selectedCrop]
?.forEach(disease=>{

const card =
document.createElement("div");

card.className =
"disease-card";

card.innerHTML = `
<h3>${disease}</h3>
<p>Tap to view details</p>
`;

card.onclick = ()=>{

localStorage.setItem(
"selectedDisease",
disease
);

window.location.href =
"disease-details.html";

};

diseaseList.appendChild(card);

});

}