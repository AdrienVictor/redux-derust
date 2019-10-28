import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, loggedIn } from './actions';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const login = useSelector(state => state.loginReducer);
  const dispach = useDispatch();

  return (
    <div>
      <button onClick={() => dispach(loggedIn())}>log me</button>
      {login ? <h3>You are logged In</h3> : <h3>You are not logged IN</h3>}
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispach(increment(1))}>+</button>
      <button onClick={() => dispach(decrement(1))}>-</button>
    </div>
  );
}

export default App;
