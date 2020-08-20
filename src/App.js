import React from 'react';
import './App.css';
import SideBar from './components/sidebar/SideBar';
import TopNav from './components/top-navigation/TopNav';
import Nav from './components/navigation/Nav';
import Modules from './components/modules/Modules';
import TestCases from './components/test-cases/TestCases';
import QuickOverview from './components/quick-overview/QuickOverview';


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
  whitelist: ['modules', 'testCases', 'testmark']
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
    <Nav />
    <div className='container mer py-5 pr-0'>
      <div className='row'> 
        <div className='col-12 col-lg-3 pr-0'>
    <Modules />

        </div>
        <div className='col-12 col-lg-5 pr-0'>
        <TestCases />
    
            </div>
            <div className='col-12 col-lg-4 pr-0'>
           <QuickOverview/>
        
                </div>
      </div>
    </div>
  </div>
    </PersistGate>
    </Provider>
  );
}

export default App;
