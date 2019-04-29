import React, { Component } from 'react';
import { exists } from 'fs';
import axios from "axios";

class AddProject extends Component{

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

    addProject(){                                
        console.log(this.state.formControls);
        for(let i in this.state.formControls){
            if(this.state.formControls[i] == ''){
                return false;
            }
        }
        axios.post("https://ecommerce-3ad3f.firebaseio.com/productdetails.json",this.state.formControls).then((response)=>{
            console.log(response);
            this.setState=()=>({
                formControls:{
                category:'',
                description:'',
                image:'',
                name:'',
                price:''
                }
            });   
    });

    }

    handleChange(e){
        const name = e.target.name;
        const value = e.target.value;                
        e.preventDefault();
        this.setState({
            formControls:{
                ...this.state.formControls,                
                [name]:value
            }
        });
    }


    render(){
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
                    <button type="button" className="btn btn-primary" onClick={this.addProject.bind(this)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddProject;