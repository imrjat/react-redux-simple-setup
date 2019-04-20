import {combineReducers} from "redux";
export const songReducers =()=>{
    return [
        {id:1,title:"Hey Bro", duration:"3:12"},
        {id:2, title:"Pahla Nasha", duration:"3:12"},
        {id:3, title:" Dheere Dheere se", duration:"3:12"},
        {id:4, title:"Meri Mahbooba", duration:"3:12"},
        {id:5, title:"I wanna talk to you", duration:"3:12"},
    ]
}

export const selectedSongReducer=(selectedSong=null, action)=>{
    if(action.type==="SELECTED_SONG"){
        return action.payload
    }
    return selectedSong
}


export default combineReducers({
    songs:songReducers,
    selectedSong:selectedSongReducer
})