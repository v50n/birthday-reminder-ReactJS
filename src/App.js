import React, {Component} from 'react'
import './App.css';
import List from './list';
import Data from './data'

const dataList = Data;

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { data: [...dataList] };
  }
  
  handleClickClearAll = () => {
    this.setState({
      data: []
    })
  }
  render() {
    var {data} = this.state;
    return (
      <div className="App">
      <div className="main">
      <div className="container">
        <h2>{data.length} birthday today</h2>
        {
          data.map((item,index) => <List key={index} name={item.name} age={item.age} imagePerson={item.image}/>)
        }
        <button onClick={this.handleClickClearAll}>Clear All</button>
        </div>
      </div>
  </div>
    );
  }
}

export default App;
