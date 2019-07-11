import React, { Component, Fragment } from 'react'
import Son from './Son'
export class Father extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "hello world",
            num : 1
        }
        this.handleClick=this.handleClick.bind(this)
        this.getRef=this.getRef.bind(this)
    }
    handleClick() {
        console.log(this.sonElem.buttonElem.nextElementSibling.innerHTML);
        this.setState(
            ()=>{return {num: this.state.num+1}},
            ()=>{console.log(this.sonElem.buttonElem.nextElementSibling.innerHTML)
        });
        
    }
    getRef(ref) {
       this.button = ref;
    }
    render() {
        return (
            <Fragment>
                <Son 
                num={this.state.num} 
                addFunction={this.handleClick}
                getRef={this.getRef}
                ref={son=> this.sonElem=son}
                ></Son>
            </Fragment>
        )
    }
}

export default Father
