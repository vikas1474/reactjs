import axios from 'axios'

export function getData(){
	return (dispatch)=>{
		// return fetch('https://ecommerce-3ad3f.firebaseio.com/productdetails.json').then((res)=>{
  //     		return res.json();
  //   	}).then((data)=>{   
  //     let productData=[];
  //     for(var i in data) {
  //       data[i]["id"]=i;
  //       productData.push(data[i])  
  //     }
  //     dispatch(getProducts({"name":"vikas"}));
  //   })
    return axios('https://ecommerce-3ad3f.firebaseio.com/productdetails.json').then((res)=>{
        dispatch(getProducts(res));
    })
	}
}

export function getProducts(products){
	return{
		type:"GETDATA",
		data:products
	}
}