import React, { Component } from 'react';
import './App.css';

import {connect} from 'react-redux';
// import {filterData1} from './actions/action1';


class Facet extends Component {
  constructor(){
    super();    
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
                return <li  key={product.id}><input onClick={this.props.filterData.bind(this,product.category)} type="checkbox"/>{product.category}</li>
           })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
     filterCategory:state.rB.filter
  }
}

const mapDispatchToProps = (dispatch) =>{
return{
  filterData: (category) => dispatch({type:'FACET', category:category})
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Facet);
