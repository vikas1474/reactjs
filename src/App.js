import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Facet from './facets';
import ProductList from './product_list';

import {connect} from 'react-redux';
import * as actionCreators from './actions/action';

class App extends Component {

  constructor(){
    super();
  }

  // getData(){
  //   fetch('https://ecommerce-3ad3f.firebaseio.com/productdetails.json').then((res)=>{
  //     return res.json();
  //   }).then((data)=>{   
  //     let productData=[];
  //     for(var i in data) {
  //       data[i]["id"]=i;
  //       productData.push(data[i])  
  //     }
  //     this.setState({
  //        data:productData 
  //     })
  //   })
  // }

  // componentWillMount(){
  //     this.getData();
  // }

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
      <div className="container">
        <div className="row">
          <div className="left-panel col-md-2">
            // <Facet product={this.state.data} filterProductonCategory={this.filterProductonCategory}/>
          </div>
          <div className="right-panel col-md-9">
            <ProductList product={this.props.data}/>            
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return{
    data:state.data
  }
}

export default connect(mapStateToProps,actionCreators)(App);
