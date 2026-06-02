function openCrop(crop){

    localStorage.setItem(
        "selectedCrop",
        crop
    );

    window.location.href =
        "crop-diseases.html";

}