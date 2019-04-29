import axios from "axios";

export function loadData(){
    return(dispatch)=>{
        return axios.get("https://ecommerce-3ad3f.firebaseio.com/productdetails.json").then((response)=>{
				let productData=[];
				let data=response.data;
				for(var i in data) {
					data[i]["id"]=i;
					productData.push(data[i])
				}
				dispatch(getData(productData));
        })
    }
}

export function deleteRecords(id){
	return(dispatch)=>{
			return axios.delete("https://ecommerce-3ad3f.firebaseio.com/productdetails.json"+id,).then((response)=>{			
			dispatch(deleteData());
			})
	}
}



export function getData(data){
	return{
        type:"GETDATA",
        payload:data
	}
}

export function deleteData(){
	return{
        type:"DELETEDATA"
	}
}

