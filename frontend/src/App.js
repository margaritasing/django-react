import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import  Home from './container/Home';
import Error404 from './container/error/Error404';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
            {/* Error Display */}
            <Route path="*" element={<Error404/>}/>
            <Route exact path="/" element={<Home/>}/>
        </Routes>        
      </Router>   
   </Provider>
  );
}

export default App;
