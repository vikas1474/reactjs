import React, { Component } from 'react';
import './App.css';

class ProductList extends Component {

  constructor(){
    super();    
  }
  

  render() {

    let filterProducts=[];
    let tempArray=[];    
    let products=[...this.props.product];
    if(this.props.filter.length != 0){
      for(var i=0;i<this.props.filter.length;i++){
          for(var j=0;j<products.length;j++){
            if(this.props.filter[i] == products[j]["category"]){
              filterProducts.push(products[j]);
            }
          }        
      }    
          
    }
    else{
          filterProducts=[...this.props.product];            
    }    
    




    return (
      <div className="row">        
          {
             filterProducts.map((product)=>{
           return (
            <div className="col-md-3">
              <div className="block">
                <p><img src={product.image}/></p>
                <h4>{product.name}</h4>
                <p><b>{product.price}</b></p>
              </div>
            </div>
            )
           })
          }
      </div>
    );
  }
}

export default ProductList;
