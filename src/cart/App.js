import Header from './Header';
import Items from './Items';
import Debugger from './Debugger';

function App() {

  return (
    <div className="App">
      <Header />
      <h1>Cart App</h1>
      <h2>use Redux Toolkit</h2>
      <Items />
      <Debugger />
      { /*<button onClick={ e => dispatch(actions.add(1)) }>+</button>*/ }
      { /*<button onClick={ e => dispatch(actions.sub(2)) }>-</button>*/ }
    </div>
  );
}

export default App;
