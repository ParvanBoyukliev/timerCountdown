import React, { Component } from 'react';

class Timer extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: ''
        }

        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        // this.resetTimer = this.resetTimer.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    startTimer(){
        let decrementValue = 1;
        this.timer = setInterval(() => 
        this.setState({
            count: this.state.count - decrementValue
            }), 1000
        )
        return <div>dsads</div>
    }

    stopTimer(){
        clearInterval(this.timer)
    }

    handleChange(event){
        this.setState({count: event.target.value})
    }

    render(){
        return(
            <div className='container'>
                <input type='number' value={this.state.value} onChange={this.handleChange}></input>
                <button onClick={this.startTimer}>Start</button>
                <button onClick={this.stopTimer}>Stop</button>
                <button>Reset</button>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export default Timer