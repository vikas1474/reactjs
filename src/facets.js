import React, { Component } from 'react';
import './App.css';

class Facet extends Component {
//    productCategory = [];
  constructor(){
    super();    
  }

    filterProducts = (category,e)=>{
      this.props.filterProductonCategory(category,e.target.checked);
  }



  render() {
    let productCategory=[];
    let tempArray=[];    
    let products=[...this.props.product];
    productCategory=products.filter((product,pos)=>{      
        if(tempArray.indexOf(product["category"]) == -1) {
          tempArray.push(product["category"]);
          return true;
        }
    })    


    console.log('enter');
    return (
      <div>
        <ul>
          {
             productCategory.map((product)=>{
                return <li  key={product.id}><input onClick={this.filterProducts.bind(this,product.category)} type="checkbox"/>{product.category}</li>
           })
          }
        </ul>
      </div>
    );
  }
}

export default Facet;
