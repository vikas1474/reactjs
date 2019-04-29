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
                return <li  key={product.id}><input onClick={this.props.filterData} type="checkbox"/>{product.category}</li>
           })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) =>({
  data:state.name
})

const mapDispatchToProps = (dispatch) =>{
return{
  filterData: () => dispatch({type:'FACET'})
}
}

export default connect(mapStateToProps,mapDispatchToProps)(Facet);
