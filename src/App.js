import React from 'react';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import TopNav from './components/top-navigation/TopNav';


// REDUX CONFIGURATION
import { persistReducer, persistStore } from 'redux-persist';

import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer';

// Configure state persist so that the state is not reset when the component reloads
const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['navVisibility']
};

// Pass the root reducer and persist config into the persist reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

  let store = createStore (
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
  )

  let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <div className="App">
    <TopNav />
    <SideBar />
  </div>
    </PersistGate>
    </Provider>
  );
}

export default App;
