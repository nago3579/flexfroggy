import React from 'react';
import './App.css';
import Page1 from './Page1.js';
import Page2 from './Page2.js';
import Page3 from './Page3.js';


class App extends React.Component{
  constructor(props) {
  super(props);

  this.state = {
    page1: true,
    page2: false,
    page3: false,
  };
      this.click1 = this.click1.bind(this);
      this.click2 = this.click2.bind(this);
      this.click3 = this.click3.bind(this);
}
click1(){
    this.setState({
      page1: true,
      page2: false,
      page3: false
    });
}
click2(){
    this.setState({
      page1: false,
      page2: true,
      page3: false
    });
}
click3(){
    this.setState({
      page1: false,
      page2: false,
      page3: true
    });
}
  render(){
    return (
      <div className="App">
        <header>
          <div  id="headerbar">
            <button
            class="button button-outline"
            style={{flex: 1, margin: 15}}
            onClick={this.click1}
            >Layout 1</button>
            <button
            class="button button-outline"
            style={{flex: 1, margin: 15}}
            onClick={this.click2}
            >Layout 2</button>
            <button
            class="button button-outline"
            style={{flex: 1, margin: 15}}
            onClick={this.click3}
            >Layout 3</button>
          </div>
        </header>
        <div>
        {this.state.page1 ?
          <Page1/>
        : null}
        {this.state.page2 ?
          <Page2/>
        : null}
        {this.state.page3 ?
          <Page3/>
        : null}
        </div>
      </div>
    );
  }
}

export default App;
