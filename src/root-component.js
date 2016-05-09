import React, { Component } from 'react';
import { addTrack, toggleSong } from './actions';

import AddTrack from './addtrack-component';
import { TrackList } from './displaytrack-components';

class RootComponent extends Component
{
    render() {
        const { tracks } = this.props
        
        return (
            <div>
            <TrackList tracks = { tracks }/>
            <AddTrack />
            </div>
        )
    }
}