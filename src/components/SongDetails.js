import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({song}) =>{
    if(!song){
        return <div>Select your song</div>
    }
    return <div><h3>Details for :</h3>
    <p>Title : {song.title} <br></br> {song.duration}</p>
    </div>
} 

const mapToProps=(state)=>{
    return {song :state.selectedSong}
}

export default connect(mapToProps)(SongDetails);