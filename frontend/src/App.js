import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div className=''>
    <h1 className="text-3xl font-bold underline text-blue-600">
       Hello world!
    </h1>
   </div>
   </Provider>
  );
}

export default App;
