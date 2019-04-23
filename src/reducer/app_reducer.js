const initialState={
      data:[]
    }

const reducer = (state=initialState,action) =>{
	console.log(action);
	// if(action.type == 'GETDATA'){
	// 	return{
	// 		...state,
	// 		data:action.data
	// 	}	
	// }
}    

export default reducer;

