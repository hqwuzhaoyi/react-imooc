import React, { Component, Fragment } from 'react';
import './style.css';
import TodoItem from './TodoItem'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.state = {
            inputValue: 'hello world',
            list: []
        }
        this.handleItemClick=this.handleItemClick.bind(this);
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    handleKeyUp(e) {
        if (e.key === "Enter" && e.target.value !== '') {

            const list = [...this.state.list, this.state.inputValue];
            this.setState({
                list,
                inputValue: ''
            });

        }
    }
    handleItemClick(index, e) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list
        });
    }

    getListItems() {
        return this.state.list.map((value, index) => {
            return (
               <TodoItem 
               content={value} 
               key={index}
               index={index}
               deleteFunction={this.handleItemClick}
               ></TodoItem>
            )
        })
    }
    render() {
        return (
            <Fragment>
                {/* jsx注释 写法 */}
                <label htmlFor="myinput">请输入内容</label>
                <input type="text"
                    id="myinput"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    onKeyUp={this.handleKeyUp}
                    className="input"
                />
                <ul>
                    {
                        this.getListItems()
                    }
                </ul>
            </Fragment>
        );
    }
}

export default TodoList