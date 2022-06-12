// import { useSelector } from 'react-redux'

import Header from './Header';
import Items from './Items';
import Footer from './Footer';
import Debugger from './Debugger'

function App() {
  //let s = useSelector(s => s);

  console.log('App loading');

  return (
    <div className="App">
      <Header />
      <h1>Cart App</h1>
      <h2>use Redux Mobx</h2>
      <Items />
      <Debugger />
      { /*<button onClick={ e => dispatch(actions.add(1)) }>+</button>*/ }
      { /*<button onClick={ e => dispatch(actions.sub(2)) }>-</button>*/ }
      <Footer />
    </div>
  );
}

export default App;
