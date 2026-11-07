import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { getClicksValue, update } from './redux/clickSlice'

function App() {
  const dispatch = useDispatch()
  const clicks = useSelector(getClicksValue)
  
  return (
    <>
    <h1>Number of clicks: {clicks}</h1>
    <button type='button' onClick={() => dispatch(update(5))}>Add 5 clicks</button>
    <button type='button' onClick={() => dispatch(update(10))}>Add 10 clicks</button>
    <button type='button' onClick={() => dispatch(update(20))}>Add 20 clicks</button>
    </>
  )
}

export default App
