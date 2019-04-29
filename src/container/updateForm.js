import React, { Component } from 'react';
import { exists } from 'fs';
import axios from "axios";

import {connect} from 'react-redux';

class UpdateProject extends Component{

    constructor(){
        super();
        this.state={
            formControls:{
                category:'',
                description:'',
                image:'',
                name:'',
                price:''
            }
        }        
    }

    updateData(e){
        return axios({url:"https://ecommerce-3ad3f.firebaseio.com/productdetails.json"+this.props.match.params.id,method:'PUT',
            data:{...this.state.formControls, id:this.props.match.params.id}}).then((res)=>{
                console.log(res);
            })
    }
    handleChange = (e) => {
        //console.log(e)
        const data = {[e.target.name] :e.target.value}
       this.setState({
          formControls: {...this.state.formControls,...data}  
       });

    }

    componentDidMount(){
        console.log(this.props);
        let data;
        if(this.props.match.params && this.props.match.params.id && this.props.products){
            data=this.props.products.filter((data)=>{
                return data["id"]==this.props.match.params.id;
            });

            if(data != ""){
                console.log(data[0]);
                this.setState({
                    formControls:{
                        category:data[0]["category"],
                        description:data[0].description,
                        image:data[0].image,
                        name:data[0].name,
                        price:data[0].price
        
                    }
                })
                console.log(this.state);
            }       
        }
    }



    render(){
        console.log(this.state.formControls)
        return (
            <div>
                <h3>Add Product</h3>
                <form noValidate>
                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <input value={this.state.formControls.category} type="text" name="category" className="form-control" placeholder="Enter category" onChange={this.handleChange.bind(this)}/>
                        <span></span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input type="text" value={this.state.formControls.description} name="description" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Enter description"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Image</label>
                        <input type="text" className="form-control" placeholder="Enter image path" value={this.state.formControls.image} name="image" onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Title</label>
                        <input type="text" className="form-control" value={this.state.formControls.name} name="name" onChange={this.handleChange.bind(this)} placeholder="Enter title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Price</label>
                        <input type="text" value={this.state.formControls.price} name="price" onChange={this.handleChange.bind(this)} className="form-control" placeholder="Enter price"/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={this.updateData.bind(this)}>Submit</button>
                </form>
            </div>
        )
    }
}



const mapStateToProps = (state) =>{
    console.log(state);
    return{
        products:state.rA.products
    }
  }

export default connect(mapStateToProps)(UpdateProject);

