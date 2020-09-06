import React from 'react';
import {connect} from "react-redux";
import { withNamespaces } from 'react-i18next';
import { compose } from 'redux';


class Home extends React.Component {

    render() {
        const { t } = this.props;
        return (
            <div className={'w-100 d-flex align-items-center justify-content-center'}>
                <img src={'/logo.jpg'} />
            </div>
        );
    }
}

export default compose(withNamespaces('translation'),  connect(null, {}) )(Home);
