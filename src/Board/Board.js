import React, { Component } from 'react'
import ListInput from './ListInput'
import List from './List'

import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";

class Board extends Component {
    state= {
        items: [],
        id: "",
        item: "",
        editItem: false
    };
    handleChange= e => {
        this.setState({
            item: e.target.value
        });
    };
    handleSubmit = e => {
        e.preventDefault();
        
    const newItem= {
        id: this.state.id,
        title: this.state.item
    };

    const updatedItems= {...this.state.items, newItem};

    this.setState({
        items: updatedItems,
        item:"",
        id: "",
        editItem: false
      });
    };

    claerList= ()=> {
        this.setState({
            items:[]
        });
    };

    handleDelete= (id)=> {
        const filteredItems= this.state.items.filter(
            item => item.id !== id)
        this.setState({
            items: filteredItems
        });
    };

    handleEdit= id => {
        const filteredItems= this.state.items.filter(
            item => item.id !== id)
        
        const selectedItem= this.state.items.find(item=> item.id === id)

        this.setState({
            items: filteredItems,
            item: selectedItem.title,
            editItem: true,
            id: id
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h3 className="text-capitalisze text-center">
                            Create Board
                        </h3>
                        <ListInput 
                            item= {this.state.item} 
                            handleChange= {this.handleChange}
                            handleSubmit= {this.handleSubmit}
                            editItem= {this.state.editItem}
                         />
                        <List 
                            items= {this.state.items} 
                            claerList= {this.claerList} 
                            handleDelete= {this.handleDelete}
                            handleEdit= {this.handleEdit}
                        />
                    </div>
                </div>
            </div>
        )
    }
}


export default Board;