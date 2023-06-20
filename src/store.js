import { createStore } from 'redux';
import rootReducer from './reducers/reducers'; // Adjust the path if needed

const store = createStore(rootReducer);

export default store;
