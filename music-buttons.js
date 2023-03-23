//This code was written for CSC 102 class at UAT, DOM assignment. Written by Isiah Torres.


// This is needed to create sound. Required (base code) to play sound.
function sound(src) {
    // document.createElement("audio")  creates and defines a sound object.
    this.sound = document.createElement("audio");
    // This code says that when sound(src) is used, the parameter (src) is the file of the audio resource.
    this.sound.src = src;
    // setAttribute(qualifiesName: string, value: string) sets the value of an atrribute for a element.
    // The preload attribute controls whether the audio should bel loaded when the page loads or not. "auto" tells the browser to load entire audio when page loads.
    this.sound.setAttribute("preload", "auto");
    // The controls attribute determines whether simple audio functions are presented to the user or not.
    this.sound.setAttribute("controls", "none");
    // This line means that a element will not be displayed for each sound. (audio files and content are kept in the background, can only interact with them by using buttons.)
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
   // This code makes adding the "play" functionality shorter. Instead of having to write, "someValue.sound.play()" everytime...
   // we can just use "someValue.play()".
    this.play = function() {
        this.sound.play();
    }
    // This code is written to allow the user to stop the music.
    this.stop = function() {
        this.sound.pause();
    }
}


// Audio files, Play, and Pause buttons:

// This code is needed to attach and play...
// Bach – Book I: Prelude and Fugue No. 8 in E Flat Minor - by Carlos Gardels
function playBach() {
    // This specifies the audio file
    bach = new sound("carlos_gardels_bach_book_I.mp3");
    bach.play();
    // This causes all other audio buttons to be disabled until the corresponding "Stop" button is used.
    document.getElementById("bachStop").disabled = false;
    document.getElementById("bachPlay").disabled = true;
    document.getElementById("mermaidPlay").disabled = true;
    document.getElementById("bassPlay").disabled = true;
}

// This code is to pause the track.
function stopBach() {
    bach.stop();
    document.getElementById("bachStop").disabled = true;
    document.getElementById("bachPlay").disabled = false;
    document.getElementById("bassPlay").disabled = false;
    document.getElementById("mermaidPlay").disabled = false;
}

// This code is needed to attach and play...
// Mermaid Butterfly by Soft and Furious
function playMermaid() {
    mermaid = new sound("soft_and_furious-by-mermaid_butterfly.mp3");
    mermaid.play();
    document.getElementById("mermaidStop").disabled = false;
    document.getElementById("mermaidPlay").disabled = true;
    document.getElementById("bachPlay").disabled = true;
    document.getElementById("bassPlay").disabled = true;
}

function stopMermaid() {
    mermaid.stop();
    document.getElementById("mermaidStop").disabled = true;
    document.getElementById("mermaidPlay").disabled = false;
    document.getElementById("bachPlay").disabled = false;
    document.getElementById("bassPlay").disabled = false;
}

// This code is needed to attach and play...
// Bass by Monsplaisir
function playBass() {
    bass = new sound("bass_by_monsplaisir.mp3");
    bass.play();
    document.getElementById("bassStop").disabled = false;
    document.getElementById("bassPlay").disabled = true;
    document.getElementById("bachPlay").disabled = true;
    document.getElementById("mermaidPlay").disabled = true;
}

function stopBass() {
    bass.stop();
    document.getElementById("bassStop").disabled = true;
    document.getElementById("bassPlay").disabled = false;
    document.getElementById("mermaidPlay").disabled = false;
    document.getElementById("bachPlay").disabled = false;
}
