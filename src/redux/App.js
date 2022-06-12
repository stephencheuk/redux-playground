import { useSelector, useDispatch } from 'react-redux'

function App() {
  let s = useSelector(s => s.counter);
  let dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>use Redux</h2>
      <div>{ JSON.stringify(s) }</div>
      <button onClick={ e => dispatch({type: 'add'}) }>+</button>
      <button onClick={ e => dispatch({type: 'sub'}) }>-</button>
    </div>
  );
}

export default App;
