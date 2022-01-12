import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import countReducer1 from '../reducers/ReducersScreen1';
import countReducer2 from '../reducers/ReducersScreen2';
import countReducer3 from '../reducers/ReducersScreen3';
import countReducer4 from '../reducers/ReducersScreen4';
import countReducer5 from '../reducers/ReducersScreen5';
import countReducer6 from '../reducers/ReducersLogin'
import mySaga from '../sagas'
const reducer = combineReducers(
    {
        count1: countReducer1,
        count2: countReducer2,
        count3: countReducer3,
        count4: countReducer4,
        count5: countReducer5,
        count6: countReducer6
    }
);

const sagaMiddleware = createSagaMiddleware()


const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

export default store;
sagaMiddleware.run(mySaga)