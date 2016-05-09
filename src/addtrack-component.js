import React, { Component, PropTypes } from 'react';

export default class AddTrackComp extends Component
{
    render()
    {
        return (
             <div className="form-container">
                 <div className="form-header">
                     <h2> Add Track </h2>
                 </div>
                 <form className="form">
                     <div className="form__row">
                         <label className="form__label">Audio Source</label><br/>
                         <input className="form__text" id="url" ref="url" type="text" onKeyDown={ (e)=> this.onSubmit(e) } placeholder="http://someurl.com/sound.mp3" />
                     </div>
                     <div className="form__row">
                         <label className="form__label">Artist</label> <br/>
                         <input className="form__text" ref="artist" type="text" onKeyDown={ (e)=> this.onSubmit(e) } placeholder="Artist name" />
                     </div>
                     <div className="form__row">
                         <label className="form__label">Track Name</label><br/>
                         <input className="form__text" type="text" ref="track" onKeyDown={ (e)=> this.onSubmit(e) } placeholder="Track title" />
                     </div>
                     <button type="button" className="form__button" onClick={(e)=> this.onSubmit(e)}>+</button>
                     <p className="error" ref="errorDOM"> </p>
                 </form>
             </div>
        )
    }
    
    onSubmit(e) {
        
        const nodes = { //keeps a reference of the text fields to grab the value and edit later
            url: this.refs.url,
            artist: this.refs.artist,
            track: this.refs.track,
            errorDOM: this.refs.errorDom
        };
        
        const submitted = e.which == 13 ? true : false; //if the button was not clicked check to see if the enter key was pressed
        
        if (submitted == true || e.type == "react-click") {
            
            const errors = {};
            
            if (nodes.url.value.length <= 0) 
                errors.url = "Enter a URL \n";
            
            if (nodes.artist.value.length <= 0) 
                errors.artist = "Enter an artist name \n";
            
            if (nodes.track.value.length <= 0) 
                errors.track = "Enter a track name";
            
            if (errors.url == null && errors.artist == null && errors.track == null) { //make sure all the fields were filled out
                this.props.addTrack(nodes.url.value, nodes.artist.value, nodes.track.value);
                nodes.track.value = '', nodes.artist.value = '', nodes.url.value = '';
                document.getElementById("url").focus(); //set the focus to the first field
            }
            else {
                alert((errors.url + errors.artist + errors.track).replace("undefined", ''));
            }
        }
     }
} 