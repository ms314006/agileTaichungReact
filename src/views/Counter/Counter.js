import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { incrementCount } from '../../actions/counter';

const Counter = () => {
  const [count, setCount] = useState(0);
  const history = useHistory();
  return (
    <div>
      <div>
        <button onClick={() => { history.push('/home') }}>
          回首頁
        </button>
      </div>
      <span>目前計數{count}</span>
      <button onClick={() => setCount(count + 1)}>
        點我加一
      </button>
    </div>
  )
};

/*
const Counter = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <span>目前計數{count}</span>
      <button onClick={() => dispatch(incrementCount())}>
        點我加一
      </button>
    </div>
  )
};
*/

export default Counter;
