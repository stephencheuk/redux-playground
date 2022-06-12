import { useSelector, useDispatch } from 'react-redux'
import { actions } from './store';

function App() {
  let s = useSelector(s => s);
  let dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter App</h1>
      <h2>use Redux Toolkit</h2>
      <div>{ JSON.stringify(s) }</div>
      <button onClick={ e => dispatch(actions.add(1)) }>+</button>
      <button onClick={ e => dispatch(actions.sub(2)) }>-</button>
    </div>
  );
}

export default App;
