import {
    ADD_PLACE,DELETE_PLACE,DESELECT_PLACE,SELECT_PLACE
} from '../actions/actionTypes'
const initialState ={
    places: [],
    selectedPlace: null
}

const reducer = (state = initialState, action ) =>{
    switch (action.type){
        case ADD_PLACE:
        return{
            ...state,
            places: state.places.concat({
                key: Math.random(),
                name: action.placeName,
                image: {
                  uri:
                    "https://yt3.ggpht.com/a-/AAuE7mDBFM3pNj8B_D-aggZ5nczA1XNvDnJY-F8HAg=s900-mo-c-c0xffffffff-rj-k-no"
                }
              })
        }
        case DELETE_PLACE:
        return{
            ...state,
            places: state.places.filter(place => {
                return place.key !== prevState.selectedPlace.key;
              }),
              selectedPlace: null
        }
        case DESELECT_PLACE:
        return{
            ...state,
            selectedPlace:null
            
        }
        case SELECT_PLACE:
        return{
            ...state,
            selectedPlace: prevState.places.find(place => {
                return place.key === key;
              })
        }
        default:
            return state
    }
}

export default reducer;