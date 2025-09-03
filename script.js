const record = document.getElementById("record");
const changeIcon = document.getElementById("changeIcon");

record.addEventListener("click", ()=>{
    changeIcon.classList.toggle("fa-microphone");
    changeIcon.classList.toggle("fa-square");
});