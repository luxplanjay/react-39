import { useSelector, useDispatch } from 'react-redux';
import { update, getClicksValue } from '../redux/clicksSlice';

export const App = () => {
  const dispatch = useDispatch();
  const numberOfClicks = useSelector(getClicksValue);

  return (
    <>
      <h1>Number of clicks: {numberOfClicks}</h1>
      <button type="button" onClick={() => dispatch(update(5))}>
        Add 5 clicks
      </button>
      <button type="button" onClick={() => dispatch(update(10))}>
        Add 10 clicks
      </button>
      <button type="button" onClick={() => dispatch(update(20))}>
        Add 20 clicks
      </button>
    </>
  );
};
