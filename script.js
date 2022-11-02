// selctionne le hover de la div top
let clickaction = document.getElementById("top").addEventListener("mouseover", myhover);

// selction de eye
let eye = document.getElementsByClassName("view");


if (clickaction) {
    // function affichage eye
    function myhover(clickaction) {
        eye[0].style.display = "block";
    }
}else {
    eye[0].style.display = "none";
}