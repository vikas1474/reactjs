const initialState={
	filterCategory:[]
  }

const appReducerB = (state = initialState,action) =>{
  console.log(action);  
  if(action.type == 'FACET'){
      if(state.filterCategory.indexOf(action.category) != -1){
        return {
          ...state,
          filterCategory:state.filterCategory.concat(action.category)
        }    
      }
      else{
        return {
          ...state,
          filterCategory:state.filterCategory.concat(action.category)
        }
      }
  }	

  return state;  
}    

export default appReducerB;

