import {createStore, applyMiddleware} from 'redux';
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './components/App';
import reducers from './reducers';

const duplicateActionMiddleWare = store=> next=> action=>{
    for (let i = 0; i <2 ; i++) {
        next(action);
        console.log('duplicated action type= '+action.type);
        console.log('store after duplicated action:  ');
        console.log(store.getState())
        console.log('\n');
    }
}



const store = createStore(reducers, applyMiddleware(thunk, duplicateActionMiddleWare));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root")
);
