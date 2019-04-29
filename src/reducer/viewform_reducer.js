const initialState={
	  products:[]
    }

const appReducerA = (state = initialState,action) =>{	
	if(action.type == 'GETDATA'){
		return {
			...state,
			products:action.payload
		}
	}	
	return state;
	
}    

export default appReducerA;

