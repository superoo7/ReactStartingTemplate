import React from 'react';
import ReactDOM from 'react-dom';

export class Test extends React.Component {
    render() {
        return(
            <div>
                <h1>Test</h1>
            </div>
        );
    }
}

ReactDOM.render(<Test />, document.getElementById("app"));