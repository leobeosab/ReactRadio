import { List, Map } from 'immutable';
import { loadSong, stopSong, changeVolume } from './audio-controller'

//Just to get you a couple songs to start with
const init = List([
    Map({ id:0, url:"./res/dreammachine.mp3", artist:"Lazerhawk", track:"Dream Machine", isPlaying: false}),
    Map({ id:1, url:"./res/discozombi.mp3", artist:"Carpenter Brut", track:"Disco Zombi Itaila", isPlaying: false}),
    Map({ id:2, url:"./res/highwaytohell.m4a", artist:"AC/DC", track:"Highway to Hell", isPlaying: false})
    ]);

export default function (trackList=init, action)
{
    switch(action.type)
    {
        case 'ADD_SONG':
            return trackList.push(Map(action.payload));
        case 'TOGGLE_SONG':
            return trackList.map(t => {
                if (t.get('id') === action.payload) {
                    if (t.get("isPlaying"))
                        stopSong();
                    else
                        loadSong(t.get('url'));
                    return t.update('isPlaying', isPlaying => !isPlaying);
                } else if (t.get('isPlaying')) { //Make sure there isn't another button showing Play
                    return t.update('isPlaying', isPlaying => !isPlaying); 
                } else {
                    return t;
                }
            });
        case 'CHANGE_VOLUME':
            changeVolume(action.payload);
        default:
            return trackList;
    }
    
}