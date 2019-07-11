import React, { Component } from 'react'

export class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleItemClick = this.handleItemClick.bind(this);
        this.content = this.props.content;
        this.index=this.props.index;
    }
    handleItemClick() {
        const {deleteFunction,index} = this.props;
      deleteFunction(index);
        
    }
    render() {
        return (
           <li   onClick={this.handleItemClick}>
              {this.content}
           </li>
        )
    }
}


export default TodoItem
