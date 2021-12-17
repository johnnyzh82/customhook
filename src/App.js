import React, { useReducer } from 'react';
import { StoreContext } from './store';
import { reducer, INITIAL_STATE} from './store/reducer';
import { Layout } from './components/Layout';
import { Profile } from './components/Profile';

const App = () => {
  return (
      <div className="App">
        <Layout />
        <Profile />
      </div>
  );
};

const AppWithStore = () => {
  const [globalState, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <StoreContext.Provider value={[globalState, dispatch]}>
      <App />
    </StoreContext.Provider>
  );
};

export { App };

export default AppWithStore;
