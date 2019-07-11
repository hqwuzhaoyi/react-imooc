import React, { Component,Fragment } from 'react'

export class counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num : 1
        }
    }
    handleClick() {
        this.setState({
            num : this.state.num+1
        })
    }
    handleClickWindow() {
        console.log("window click");
    }
    componentDidMount() {
        window.addEventListener("click", this.handleClick);
    }
    componentWillUnmount() {
        window.removeEventListener("click",this.handleClick);
    }
    render() {
        return (
            <Fragment>
                <button onClick={this.handleClick.bind(this)}>+1</button>
                <div>{this.state.num}</div>
            </Fragment>
        )
    }
}

export default counter
