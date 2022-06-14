import {useDispatch, useSelector} from 'react-redux'
import Container from 'components/Container'
//import {increment, reset} from 'store/actions'
import {reset, increment} from '../store/reducers/index'

export default function ReduxCounter(props) {
  const clicks = useSelector(state => (state as any).counter.value)
  const dispatch = useDispatch()

  return (
    <Container title="Redux Counter - Rogério Moreira">
      <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-2xl font-bold">Redux Counter</h1>
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>Clicks: {clicks}</span>
        <button
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          onClick={() => dispatch(reset())}
        >
          Reset
        </button>
      </div>
    </Container>
  )
}
