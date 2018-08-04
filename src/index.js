import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

const initialState = {
  id: undefined,
  feeling: '',
  comprehension: '',
  support: '',
  comments: ''
}

const feedbackResponse = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_FEELINGS':
      return { ...state, feeling: action.payload }
    case 'STORE_COMPREHENSION':
      return { ...state, comprehension: action.payload }
    case 'STORE_SUPPORT':
      return { ...state, support: action.payload }
    case 'STORE_COMMENTS':
      return { ...state, comments: action.payload }
    default:
      return state
  }
}

const storeInstance = createStore(
  feedbackResponse,
  applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
