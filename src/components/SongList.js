import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedSong } from '../actions';
class SongList extends Component {
    state = { songs:[] }
    renderList(){
        // console.log(this.props)
        return this.props.songs.map(song=>{
            return <div className="item" key={song.id}>
                        <div className="right floated content">
                            <button className="ui button primary"
                            onClick={()=>this.props.selectedSong(song)}
                            >
                            Select
                            </button>
                        </div>
                        <div className="content">{song.title}</div>
                    </div>
        })
    }

    render() { 
        return <div className="ui divided list">{this.renderList()}</div>
    }
}
const mapToProps=(state)=>{
    console.log(state);
//    this.setState({songs:state.songs});
    return {songs:state.songs}
}
export default connect(mapToProps,{selectedSong})(SongList) ;