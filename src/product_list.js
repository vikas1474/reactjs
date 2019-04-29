import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';


class ProductList extends Component {

  constructor(){
    super();    
  }

  
  // filterProductonCategory = (category,bool)=>{
  //     let filter=[...this.state.filter];
  //     let remove;
  //     if(bool == true){
  //       filter.push(category);
  //     }
  //     else{
  //       let index=filter.indexOf(category);
  //       remove=filter.splice(index,1);
  //       console.log(filter);        
  //     }
  //     this.setState({
  //       filter:filter
  //     })
  // }




  render() {
    return (
      <div className="row">        
        <p>{this.props.filterCategory}</p>
          {
             this.props.product.map((product)=>{
           return (
            <div className="col-md-3" key={product.id}>
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


const mapStateToProps = (state) =>{
  console.log(state);
  return{
     filterCategory:state.rB.filterCategory
  }
}


export default connect(mapStateToProps)(ProductList);


