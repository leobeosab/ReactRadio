import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { TrackList, AddTrack, AudioController } from './containers';

const store = createStore( reducer, applyMiddleware(thunk) );

render((
    <div>
        <div className="nav">
            <h1> React Radio </h1>
        </div>
        <Provider store={store}>
            <div>
                <AudioController />
                <TrackList />
                <AddTrack />
            </div>
        </Provider>
    </div>
    ), document.getElementById('app')
);