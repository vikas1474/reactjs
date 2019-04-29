import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';

import ProductList from './product_list';
import Facet from './facets';
import AddProject from './container/addForm';
import ViewProject from './container/viewForm';
import UpdateProject from './container/updateForm';



import {connect} from 'react-redux';
import {loadData} from './actions/action';


class App extends Component {

    componentDidMount(){
      this.props.loadData();
    }



  render() {

    console.log(this.props);

//    const products=this.props.loadData();
    return (
      <div className="container">
                    <Router>
                       <Route path='/' exact component={AddProject}/>
                       <Route path="/products" exact component={ProductList}/>
                       <Route path='/view' exact component={ViewProject}/>
                       <Route path='/update/:id' exact component={UpdateProject}/>
                       {/* <Route path='/dashboard' component={ProductList}/> */}
                    </Router>  
        {/* <div className="row">
          <div className="left-panel col-md-2">
              <Facet product={this.props.products}/>     
          </div>
          <div className="right-panel col-md-9">
              <ProductList product={this.props.products}/>            
          </div>
        </div> */}
      </div>
    );
  }
}


const mapStateToProps = (state) =>{
  return {
    products:state.rA.products,
}}

const mapDispatchToProps = (dispatch) =>{
  return{
    loadData: () => dispatch(loadData())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
