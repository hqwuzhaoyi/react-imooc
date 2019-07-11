import React, { Component, Fragment } from 'react'

export class Son extends Component {
    clickFunction() {
        const {addFunction,getRef} = this.props;
        addFunction();
        getRef(this.buttonElem);
    }
    
    render() {
        const { num } = this.props;
        return (
            <Fragment>
                <button 
                onClick={this.clickFunction.bind(this)}
                ref={button => {
                    this.buttonElem = button
                }}
                >+1</button>
                <div>
                    Son {num}
                </div>
            </Fragment>

        )
    }
}

export default Son
