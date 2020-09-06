import React from 'react';
import {connect} from "react-redux";


class Home extends React.Component {


    render() {
        return (
            <div>
                <h3>Home</h3>
            </div>
        );
    }
}

export default connect(null, {})(Home);
