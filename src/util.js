import {v4 as uuidv4} from 'uuid';

function chillHop() {
    return [
        {
            name   : "Lilo",
            artist : "The Field Tapes",
            cover  : "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            id     : uuidv4(),
            active : true,
            audio  : "https://mp3.chillhop.com/serve.php/?mp3=11244",
            color  : ["#82d9b8", "#a34040"]
        },
        {
            name   : "Harbor",
            artist : "The Field Tapes",
            cover  : "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            id     : uuidv4(),
            active : false,
            audio  : "https://mp3.chillhop.com/serve.php/?mp3=11245",
            color  : ["#82d9b8", "#a34040"]
        },
        {
            name   : "Going Back",
            artist : "Swørn",
            cover  : "https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",
            id     : uuidv4(),
            active : false,
            audio  : "https://mp3.chillhop.com/serve.php/?mp3=10310",
            color  : ["#82d9b8", "#a34040"]
        },
        {
            name   : "Magenta Forever",
            artist : "Aviino",
            cover  : "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
            id     : uuidv4(),
            active : false,
            audio  : "https://mp3.chillhop.com/serve.php/?mp3=10458",
            color  : ["#82d9b8", "#a34040"]
        },
        {
            name   : "Bluetooth Ringtone",
            artist : "Aviino",
            cover  : "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
            id     : uuidv4(),
            active : false,
            audio  : "https://mp3.chillhop.com/serve.php/?mp3=10446",
            color  : ["#82d9b8", "#a34040"]
        },
    ];
}

export const playAudio = (isPlaying, audioRef) => {
    if(isPlaying) {
        const playPromise = audioRef.current.play();
        if(playPromise !== undefined){
            playPromise.then(
                (audio) => {
                    audioRef.current.play();
                }
            )
        }
    }
}

export default chillHop;
