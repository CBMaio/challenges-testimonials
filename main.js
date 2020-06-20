var next = document.getElementById("button-next")
var prev = document.getElementById("button-prev");
var tanya_section = document.getElementById("first-profile");
var john_section = document.getElementById("john-section")

function changeProfile(){
    if (john_section.classList.contains("second-profile")){
        tanya_section.classList.add("extra-class")
        john_section.classList.remove("second-profile")
    }
    else {
        tanya_section.classList.remove("extra-class")
        john_section.classList.add("second-profile")
    }
}