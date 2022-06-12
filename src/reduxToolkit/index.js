import App from './App';
import store from './store';
import { Provider } from 'react-redux';

const PureRedux = () => {
  return (
      <Provider store={ store }>
        <App />
      </Provider>
  );

}

export default PureRedux