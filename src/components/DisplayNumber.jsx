import { useSelector } from 'react-redux'


function DisplayNumber() {
    const size = useSelector(state => state.counter.value)
    return (
        <div>
            <h1>DisplayNumber</h1>
            <input type="text" value={size} readOnly></input>
        </div>
    );
}


export default DisplayNumber;