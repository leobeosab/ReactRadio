import { connect } from 'react-redux';
import * as components from './components'; //imports all the functions as a list called components
import { addTrack, toggleSong, changeVolume } from './actions';
import AddTrackComp from './addtrack-component';


export const TrackList = connect (
    function mapStateToProps(state) {
        return { tracks: state };
    },
    function mapDispatchToProps(dispatch) {
         return { toggleSong: id => dispatch(toggleSong(id)) };
    }
)(components.TrackList); 

export const AudioController = connect (
    function mapStateToProps(state)
    {
        return { tracks: state };
    },
    function mapDispatchToProps(dispatch)
    {
        return { changeVolume: v => dispatch(changeVolume(v)) };
    }
)(components.AudioController);

export const AddTrack = connect (
    function mapStateToProps ( state )
    {
        return {};
    },
    function mapDispatchToProps(dispatch)
    {
        return {
            addTrack: (url, artist, name) => dispatch(addTrack(url, artist, name))
        };
    }
)(AddTrackComp);