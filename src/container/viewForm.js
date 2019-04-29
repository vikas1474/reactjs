import React, { Component } from 'react';
import axios from "axios";
import {connect} from 'react-redux';

class ViewProject extends Component{

    constructor(){
        super();
    }

    deleteProduct(id){
        console.log(id);
        return axios({url:"https://ecommerce-3ad3f.firebaseio.com/productdetails/"+id+".json", method:'DELETE',id:id}).then((response)=>{			            
            console.log(this.props.products);
    })
    }

    updateProduct(id){
        this.props.history.push('/update/'+id);
        console.log(id);
    }

    render(){
        console.log(this.props.products);
        return (
            <div>
                    <h3>View Project List</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Category</th>
                                <th scope="col">Description</th>
                                <th scope="col">Image</th>
                                <th scope="col">Title</th>
                                <th scope="col">Price</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.products.map((data)=>{
                                return (<tr key={data.id}>
                                    <td>{data.category}</td>
                                    <td>{data.description}</td>
                                    <td>{data.image}</td>
                                    <td>{data.name}</td>
                                    <td>{data.price}</td>
                                    <td><button type="button" onClick={this.deleteProduct.bind(this,data.id)}>Delete</button></td>
                                    <td><button type="button" onClick={this.updateProduct.bind(this,data.id)}>Update</button></td>
                                </tr>)
                            })
                        }
                        </tbody>
                    </table>
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

export default connect(mapStateToProps)(ViewProject);