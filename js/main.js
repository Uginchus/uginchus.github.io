function changeLocalization() {
    var checkBox = document.getElementById("checkbox-localize");
    var textsEN = document.getElementsByClassName("text-EN");
    var textsUA = document.getElementsByClassName("text-UA");
    if (checkBox.checked == true) {
        for(var i = 0; i < textsEN.length; i++) {
            textsEN[i].style.display = "block"
        }
        for(var i = 0; i < textsUA.length; i++) {
            textsUA[i].style.display = "none"
        }
    } else {
        for(var i = 0; i < textsEN.length; i++) {
            textsEN[i].style.display = "none"
        }
        for(var i = 0; i < textsUA.length; i++) {
            textsUA[i].style.display = "block"
        }
    }
}