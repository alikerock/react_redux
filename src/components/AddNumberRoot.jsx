//store에 바로 처리하기 때문에 필요없는 컴포넌트
import React, { Component } from "react";
import AddNumber from "../components/AddNumber";

class AddNumberRoot extends Component {
    render() {
        return (
            <div>
                <h1>Add Number Root</h1>
                <AddNumber
                    onClick={function (size) {
                        this.props.onClick(size);
                    }.bind(this)}
                ></AddNumber>
            </div>
        );
    }
}


export default AddNumberRoot;