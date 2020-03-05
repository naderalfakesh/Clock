import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(){
        super();
        const date = new Date();
        this.state={
            time: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
            color: "#" + Math.floor(Math.random() * 16777215).toString(16)
        }
    }
    componentDidMount(){
        this.interval = setInterval(this.handleTime , 1000);
        // color = ()=>{
        //     return "#" + Math.floor(Math.random() * 16777215).toString(16);
        // }
    }
    
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    
    handleTime = ()=>{
        const date = new Date();
        const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        this.setState({time: time })
    }
    render() {
        return (
            <div className="clock" style={{backgroundColor: this.state.color}}>
                <button onClick={() => this.props.handleRemove(this.props.id)}>X</button>
                <br />
                <b>{this.state.time}</b>
            </div>
        )
    }
}
