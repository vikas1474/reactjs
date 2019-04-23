import React, { Component } from 'react';
import './App.css';

class Product extends Component {

  constructor(){
    super();
    this.state={
      data:[]
    }
  }

  componentWillMount(){
    fetch('https://ecommerce-3ad3f.firebaseio.com/productdetails.json').then((res)=>{
      return res.json();
    }).then((data)=>{   
      let productData=[];
//      const newData={...data}
      for(var i in data) {
        data[i]["id"]=i;
        productData.push(data[i])  
      }
      this.setState({
         data:productData 
      })
    })
  }

  render() {
    return (
      <div>
        <ul>
          {
             this.state.data.map((product)=>{
           return <li key={product.id}>{product.category}</li>
           })
          }
        </ul>
      </div>
    );
  }
}

export default Product;
