let category = []

const genre = []

const trendItems = []


const render = {}


//Where Everything Starts
headerFunctions()
eventListener()

alsoLike()





const player = videojs('my-video');
const playNow = document.getElementById("play-now")
const watch = document.getElementById("watch")
const myVideo = document.getElementById("my-video") 

player.on('ready', function() {
    document.getElementById("mid").onclick = evt => {
        evt.stopPropagation();
        evt.preventDefault();
        if (evt.target.id === "play-now") {
            evt.target.className = evt.target.className.replace("d-block", "d-none")
            evt.target.nextElementSibling.className = evt.target.nextElementSibling.className.replace("d-none", "d-block")
            document.querySelector(".vjs-big-play-button").click();
            document.querySelector(".vjs-big-play-button").style.display = "none";
            player.addClass('vjs-waiting');
            download(urlParams.get('fileID').trim());
            
        }
    }
    
})


















