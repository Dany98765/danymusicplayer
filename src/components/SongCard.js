import React from "react";
import style from "./style.css"

export default function SongCard(props){
    // state responsible to determine whether the song will play or not
    const [playingSong, setPlayingSong] = React.useState(true)
    // a useref hook to store the song's ringtone
    const songref = React.useRef();
    const [play,setPlay] = React.useState(props.ringtone)
    const [volume, setVolume] = React.useState(1); // new state variable for volume
    // function which plays/pauses the song's audio
    function PlayOrPause(event){
        event.preventDefault()
        setPlayingSong(() => !playingSong)
        if (playingSong === true){
            songref.current.play();
        }
        else{
            songref.current.pause();
        }
    }
    function Replay(event){
        event.preventDefault()
        songref.current.currentTime = 0; // reset the audio element's currentTime property
        songref.current.play(); // play the audio element
    }
    function handleVolumeChange(event) {
        setVolume(event.target.value); // update the volume state
        songref.current.volume = event.target.value; // update the audio element's volume
    }
    return(
        <div className="song--card">
            <div className="content">
                <h3 className="song--title">{props.title}</h3>
                <p className="song--subtitle">{props.subtitle}</p>
                <div className="play-pause-div">
                    <button 
                    className="play-pause-button"
                    onClick={PlayOrPause}>{playingSong === false && "II" || playingSong === true && "▶"}</button>
                    <audio id="video" ref={songref}>
                        <source src={props.ringtone}/>
                    </audio>
                    <button className="replay--button" onClick={Replay}>Replay</button><br />
                    <div>
                        <input type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
                        <p>{volume * 100}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}