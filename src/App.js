import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer';
import HookIceCreamContainer from './components/HookIceCreamContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        
        {/* Component for API calls */}
        <UserContainer/>
        
        {/* Common Component for Cake */}
        <ItemContainer cake/>
        
        {/* Common Component for IceCream */}
        <ItemContainer/>
        
        {/* Component for Cake using Hooks */}
        <HookCakeContainer/>
        
        {/* Component for IceCream using Hooks */}
        <HookIceCreamContainer/>
        
        {/* Component for Cake using Connect */}
        <CakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
