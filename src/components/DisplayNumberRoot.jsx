//store에 바로 처리하기 때문에 필요없는 컴포넌트
import DisplayNumber from "./DisplayNumber";
import { useSelector } from 'react-redux'

function DisplayNumberRoot() {
    const size = useSelector(state => state.counter.value)
    return (
        <div>
            <h1>Display Number Root</h1>
            <DisplayNumber number={size}></DisplayNumber>
        </div>
    );
}


export default DisplayNumberRoot;