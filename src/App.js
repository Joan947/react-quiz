import React, { Component } from 'react';


// Counter Component
class Counter extends Component {
  render() {
    const { value, increment, decrement } = this.props;
    return (
      <div className="counter">
        <b>{value}</b>
        <div className="counter-controls">
          <button onClick={decrement} className="button is-danger is-small">-</button>
          <button onClick={increment} className="button is-success is-small">+</button>
        </div>
      </div>
    );
  }
}
// created a total component
class Total extends Component {
  
  totalValue = () => this.props.getData.reduce((x, y) => x + y.value, 0)

  render() {
    return (
      <div  className="counter">
        <b>Total Value: {this.totalValue()}</b>
      </div>
    );
  }
}

class App extends Component {
  constructor(props, context) {
    super(props, context);
    // moved global data array to the component state for the App component
    this.state = {
      data: [
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        // added fourth component
        { id: 4, value: 0 },
      ]
    }
  }
 //added increment and decrement function
  onIncrement = (id) => {
    this.setState(prevState => ({
      data: prevState.data.map(a => a.id === id ? {id: a.id, value: a.value++} : a)
    }));
  }
  
  onDecrement = (id) => {
    this.setState(prevState => ({
      data: prevState.data.map(a => a.id === id ? {id: a.id, value: a.value--} : a)
    }));
    
  }

  render() {
    return (
      <div>
        {this.state.data.map((counter) => (
          <Counter 
         
            increment={() => this.onIncrement(counter.id)} 
            decrement={() => this.onDecrement(counter.id)} 
            key={counter.id} value={counter.value} />
        ))}
        <Total getData={this.state.data}/>
      </div>
    );
  }
}

export default App;
