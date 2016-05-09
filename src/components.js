import React from 'react';
import { changeVolume } from './audio-controller';

export function Track(props) { //Render a track into a table
    const {
        track, toggleClick
    } = props;

    console.log(track);

    return (
        <tr className={ track.isPlaying ? "track track--playing" : "track" }>
            <td><button onClick={ toggleClick(track.id) } className="track__button" >{ track.isPlaying ? "P" : "S" }</button></td>  
            <td><span className="track__title">{ track.track }</span></td>
            <td><strong className="track__artist">{ track.artist }</strong></td>
        </tr>
    ); //Show a P for playing or S for start, using a ternary operator
}

export function TrackList(props) { //Render the tracklist as a table
    const {
        tracks, toggleSong
    } = props;

    const toggleClick = id => event => toggleSong(id);

    return (
        <div className="react-radio">
            <table className = "playlist">
            <tbody>
                <tr className="table-header">
                    <th><span> <br/> </span> </th>
                    <th><span className="track__title">Track Title</span></th>
                    <th><strong className="track__artist">Artist</strong></th>
                </tr>
            { tracks.map( t => (
                <Track key={t.get('id')} track = { t.toJS() } toggleClick = {toggleClick} />
                     //Turn track from an Immutable map back into vanilla JS, no more need for using .get() in Track function
            ))}
            </tbody>
            </table>
        </div>
    );
}

export function AudioController(props) {

    const volumeChange = (event) => 
    {
        const element = event.target;
        changeVolume(element.value);
    };

    return (
    <div className="volume-wrapper">
        <div className="volume-header">
            <h3> Volume </h3>
        </div>
        <div className="volume-controller">
            <input type="range" min="0" max="1" step="0.01" defaultValue=".5" onChange={ volumeChange }></input>
        </div>
    </div>
    );
}