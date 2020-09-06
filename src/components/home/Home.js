import React from 'react';
import {connect} from "react-redux";
import { withNamespaces } from 'react-i18next';
import { compose } from 'redux';


class Home extends React.Component {

    render() {
        const { t } = this.props;
        return (
            <div>dss
                <h3>{t('home')}</h3>
            </div>
        );
    }
}

export default compose(withNamespaces('translation'),  connect(null, {}) )(Home);
