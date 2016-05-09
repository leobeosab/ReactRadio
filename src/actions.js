const uid = () => Math.random().toString(34).slice(2);

export function addTrack(url, artist, track)
{
    return {
        type: 'ADD_SONG',
        payload: {
            id: uid(),
            isPlaying: false,
            url: url,
            artist: artist,
            track: track
        }
    };
}

export function toggleSong( id )
{
    return {
        type: 'TOGGLE_SONG',
        payload: id
    }
}

export function changeVolume( volume )
{
    return {
        type: 'CHANGE_VOLUME',
        payload: volume
    }
}
