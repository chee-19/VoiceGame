const record = document.getElementById("record");
const changeIcon = document.getElementById("changeIcon");

function switchIcon() {
    changeIcon.classList.toggle("fa-microphone");
    changeIcon.classList.toggle("fa-square");
};

record.addEventListener("click", ()=>{
    switchIcon()
});

document.addEventListener("keypress", (event) => {
    if (event.key === "Enter" || event.key ===" "){
        switchIcon()
    }
});