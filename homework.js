class Counter extends Component {
  state = {
    count: 0
  };
  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };
  render() {
    return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}

//код в функциональном компоненте:

import {useState} from 'react';

const Counter = () => {
  
  const [count, setState] = useState(0);

  return (<button onClick={()=>setState(count+1)}>{count}</button>);
}