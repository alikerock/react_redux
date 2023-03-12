import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../counterSlice'

function AddNumber() {
    const size = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Add Number</h1>
            <input
                type="button"
                value="+"
                onClick={() => dispatch(increment())}
            ></input>
            <input
                type="text"
                value={size}
            ></input>
        </div>
    );

}



export default AddNumber;