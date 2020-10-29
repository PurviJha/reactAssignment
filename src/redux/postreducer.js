const initialState={
    data:[]
}

    
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_POST':
            console.log("reducer",action.payload)
            return {
                 ...state ,
                  data:action.payload
                }
        
        case 'ADD_POST':
            return {
                ...state,
                data:[...state.data,action.payload]
            };
        case 'EDIT_POST':
            return {
                ...state,
                post: state.post.map(
                    (content, i) => content.id === action.payload.id ? { ...content, title: action.payload.title, 
                        body: action.payload.body }
                        : content)
            };
        case 'DELETE_POST':
            return {
                ...state,
                post: state.post.filter(item => item.id !== action.payload)
            };
            
        default:
            return state;
    }
}
    
  
export default postReducer;