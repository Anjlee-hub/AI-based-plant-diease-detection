function saveLanguage(){

    let language =
        document.getElementById("language").value;

    localStorage.setItem(
        "selectedLanguage",
        language
    );

    window.location.href =
        "login.html";
}