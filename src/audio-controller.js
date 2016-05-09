const context = window.AudioContext || window.webkitAudioContext; //Cross browser compatibliltiy
const AC = new context(); 

var source;

const gainNode = AC.createGain();
gainNode.gain.value = .5;

const error_handler = (e) => alert("Error parsing audio \nError:" + e.err); 

export function loadSong( url ) {

    stopSong();
    
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "arraybuffer";
    
    request.onload = function() {
        AC.decodeAudioData(request.response).then( b => { playSong(b); }, error_handler);
    };
    
    request.onerror = error_handler;
    
    request.send();
}

function playSong( buffer ) {
   source = AC.createBufferSource();
   source.buffer = buffer;
   source.connect(gainNode);
   gainNode.connect(AC.destination);
   if (!source.start) //more cross browser compatibility
   {
        source.start = source.noteOn;
        source.stop = source.noteOff;
   }
   source.start();
}

export function stopSong() {
    if (source != null)
    {
        source.stop();
        source = null;
    }
}

export function changeVolume( volume )
{
    console.log(volume);
    gainNode.gain.value = volume;
}