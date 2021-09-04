import { createStore, combineReducers } from 'redux';
import { contatosReducer } from './ducks/contatos';

const store = createStore(
    combineReducers({
        contatos: contatosReducer
    })
);

export default store;