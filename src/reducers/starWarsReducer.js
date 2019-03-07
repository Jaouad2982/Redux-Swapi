import /* we need our action types here*/{FETCHING,SUCCESS,FAILURE} from "../actions";
const initialState = {
  characters: [],
  isLoading : false,
  error : ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log("action",action)
  switch (action.type) {

    case FETCHING : return { ...state,isLoading : true}
    case SUCCESS  :return { ...state,isLoading : false,error : "", characters : action.payload}
    case FAILURE : return {...state,isLoading:false,error : action.payload }
    default:return state;
  }
};
