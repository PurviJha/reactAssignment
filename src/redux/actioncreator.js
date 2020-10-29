import axios from 'axios'

export const  getPost=()=>{

    return (dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
        
        .then(res2=>{
            console.log("action",res2)
            dispatch({
                type: 'GET_POST' ,
                payload: res2.data  
            })
        })

    }
    
}
export function addPost(input ) {  
    return (dispatch)=>{
        axios.post("https://jsonplaceholder.typicode.com/posts",
        {
           title: input.title,
           body: input.body
         })
         .then( (response) =>{
           console.log(response);
           dispatch({
               type: 'ADD_POST',  
               payload: response  
           })
         })
    }
    
};  
  
export function editPost(data) {  
    return dispatch => {  
        return dispatch({  
            type: 'EDIT_POST',  
            payload: data  
        });  
    }  
};  
  
export function deleteEmployee(postId) {  
    return dispatch => {  
        return dispatch({  
            type: 'DELETE_POST',  
            payload: postId  
        });  
    }  
}; 