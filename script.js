const recordBtn = document.getElementById("recordBtn");
const changeIcon = document.getElementById("changeIcon");
const audioPlayer = document.getElementById("audioPlayer");
const downloadLink = document.getElementById("downloadLink");

let mediaRecorder;
let chunks=[];
let isRecording = false;

async function initAudioRecorder() {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true}); //gets microphone access
    mediaRecorder = new MediaRecorder(stream); //gets the live audio

    mediaRecorder.ondataavailable = (e) => {
        if (e.data.size>0) {chunks.push(e.data)}
    }; //get the audio chunks stored in chunks lists

    mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, {type: "audio/webm"}); //combines the items in chuncks [] and and make it into one audio file in WebM format
        chunks = []; //reset the chunks list

        const url = URL.createObjectURL(blob); //create a URL with the blob
        audioPlayer.src = url; //use the url for the audio control in the website for playback

        downloadLink.href = url; //set the url of the downloadable link
        downloadLink.download = "audioRecording.webm"; //file name
        downloadLink.textContent = "Download me"; //text of the downloadable link
        downloadLink.style.display = "inline"; //make the downloadable link visible
    };

}

recordBtn.addEventListener("click", async ()=>{
    if(!mediaRecorder) {await initAudioRecorder();} //if it mediaRecorder is empty, run the initAudioRecorder

    if (!isRecording){
        mediaRecorder.start(); //start recordering the live audio
        isRecording = true;

        changeIcon.classList.remove("fa-microphone");
        changeIcon.classList.add("fa-square");
    }
    else{
        mediaRecorder.stop();
        isRecording = false;

        changeIcon.classList.remove("fa-square");
        changeIcon.classList.add("fa-microphone");
    }
});